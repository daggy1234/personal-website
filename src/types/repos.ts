import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query {
    viewer {
      login
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          nameWithOwner
          description
          createdAt
          stargazerCount
          url
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
    }
  }
`;

export default GET_REPOSITORIES;
