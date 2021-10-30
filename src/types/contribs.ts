import { gql } from "@apollo/client";

const GET_CONTRIBUTIONS = gql`
  query {
    viewer {
      login
      repositoriesContributedTo(
        contributionTypes: PULL_REQUEST
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          description
          createdAt
          nameWithOwner
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

export default GET_CONTRIBUTIONS;
