import { GitHubUserInput, GitHubUserMapper, GitHubUserModel } from './user.mapper';

export interface GitHubPullRequestInput {
  id: string;
  url: string;
  state: string;
  title: string;
  body: string;
  user: GitHubUserInput
  assignees: GitHubUserInput[];
  requested_reviewers: GitHubUserInput[];
  created_at: Date;
  updated_at: Date;
}

export interface GitHubPullRequestModel {
  uid: string;
  url: string;
  state: string;
  title: string;
  description: string;
  owner: GitHubUserModel;
  assignees: GitHubUserModel[];
  reviewers: GitHubUserModel[];
  createdOn: Date;
  updatedOn: Date;
}

export class GitHubPullRequestMapper {
  static import(input: GitHubPullRequestInput): GitHubPullRequestModel {
    return {
      uid: input.id,
      url: input.url,
      state: input.state,
      title: input.title,
      description: input.body,
      owner: GitHubUserMapper.import(input.user),
      assignees: input.assignees.map((assignee: GitHubUserInput) => GitHubUserMapper.import(assignee)),
      reviewers: input.requested_reviewers.map((reviewer: GitHubUserInput) => GitHubUserMapper.import(reviewer)),
      createdOn: input.created_at,
      updatedOn: input.updated_at,
    };
  }
}
