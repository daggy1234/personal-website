export interface QueryResult {
  data: QueryData;
}

interface QueryData {
  login: string;
  repositories: {
    nodes: RespositoryData[];
  };
}

interface RespositoryData {
  nameWithOwner: string;
  description: string;
  createdAt: string;
  stargazerCount: number;
  url: string;
  isPrivate: boolean;
  primaryLanguage: {
    color: string;
    name: string;
  };
  licenseInfo: {
    nickname?: string;
    name: string;
    url: string;
  };
}
