import type { NextApiRequest, NextApiResponse } from "next";

import type { QueryData } from "../../types/typed_data";

const GITHUB_TOKEN = process.env.GITHUB_PA;
const ExceptionRules = [
  "daggy1234/dagpi",
  "daggy1234/dagpi-auth",
  "daggy1234/dagpi-data",
  "daggy1234/dagpi-central",
  "daggy1234/dagpi-dashboard",
  "daggy1234/dagbot",
  "daggy1234/dagpaste",
  "daggy1234/polaroid",
  "daggy1234/image-uploader",
  "daggy1234/r.daggy",
  "daggy1234/udymts",
  "daggy1234/ewaste-app",
  "daggy1234/daggy1234",
  "daggy1234/f1bot",
];

const query = `
  query {
    viewer {
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC },
        ownerAffiliations: OWNER,
        affiliations: [OWNER]
      ) {
        nodes {
          nameWithOwner
          description
          createdAt
          stargazerCount
          viewerHasStarred
          url
          isFork
          isPrivate
          primaryLanguage {
            color
            name
          }
          licenseInfo {
            nickname
            name
            url
          }
        }
      } 
      repositoriesContributedTo(
        contributionTypes: COMMIT
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          description
          createdAt
          nameWithOwner
          viewerHasStarred
          url
          forkCount
          primaryLanguage {
            color
            name
          }
          stargazerCount
          isPrivate
          licenseInfo {
            nickname
            url
            name
          }
        }
      }
    }
  }
`;

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cache: { data: unknown; expiresAt: number } | null = null;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (cache && Date.now() < cache.expiresAt) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).send(cache.data);
  }

  const resp = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${GITHUB_TOKEN}`,
    },
  });
  const js: QueryData = (await resp.json()).data.viewer;
  if (resp.status === 200) {
    js.repositories.nodes = js.repositories.nodes.filter(
      (repo) =>
        !ExceptionRules.includes(repo.nameWithOwner.toLowerCase()) &&
        repo.isFork === false &&
        repo.viewerHasStarred === true
    );
    const payload = { status: true, data: js };
    cache = { data: payload, expiresAt: Date.now() + CACHE_TTL_MS };
    res.setHeader("X-Cache", "MISS");
    res.status(200).send(payload);
  } else {
    res.status(200).send({ status: false, data: null });
  }
};
