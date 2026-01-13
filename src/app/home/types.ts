type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
};

type Committer = {
  name?: string | undefined;
  email?: string | undefined;
  date?: string | undefined;
};

export type Commit = {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: {
    url: string;
    author: null | Committer;
    committer: null | Committer;
    message: string;
    comment_count: number;
    tree: {
      sha: string;
      url: string;
    };
    verification?:
      | {
          verified: boolean;
          reason: string;
          payload: string | null;
          signature: string | null;
        }
      | undefined;
  };
  author?: null | User;
  committer?: null | User;
  stats?: {
    additions?: number | undefined;
    deletions?: number | undefined;
  };
};

export type Repository = {
  id: number;
  name: string;
  stargazers_count: number;
};
