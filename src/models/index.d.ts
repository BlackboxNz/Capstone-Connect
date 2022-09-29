import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tags {
  readonly id: string;
  readonly Name?: string | null;
  readonly IsAward?: boolean | null;
  readonly Projects?: (ProjectTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}

export declare class Project {
  readonly id: string;
  readonly TeamName: string;
  readonly ProjectName: string;
  readonly Description?: string | null;
  readonly Brief?: string | null;
  readonly Tag?: (string | null)[] | null;
  readonly Img?: string | null;
  readonly Video?: string | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Users?: (ProjectUser | null)[] | null;
  readonly Tags?: (ProjectTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Comment {
  readonly id: string;
  readonly Content: string;
  readonly ProjectID: string;
  readonly UserID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class User {
  readonly id: string;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly LikedProjects?: (ProjectUser | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly teamID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Team {
  readonly id: string;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class ProjectTags {
  readonly id: string;
  readonly tags: Tags;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectTags, ProjectTagsMetaData>);
  static copyOf(source: ProjectTags, mutator: (draft: MutableModel<ProjectTags, ProjectTagsMetaData>) => MutableModel<ProjectTags, ProjectTagsMetaData> | void): ProjectTags;
}

export declare class ProjectUser {
  readonly id: string;
  readonly project: Project;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectUser, ProjectUserMetaData>);
  static copyOf(source: ProjectUser, mutator: (draft: MutableModel<ProjectUser, ProjectUserMetaData>) => MutableModel<ProjectUser, ProjectUserMetaData> | void): ProjectUser;
}