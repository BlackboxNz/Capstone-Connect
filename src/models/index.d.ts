import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VisitorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Team {
  readonly id: string;
  readonly Students?: (Student | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class Student {
  readonly id: string;
  readonly UPI?: string | null;
  readonly projectID: string;
  readonly User?: User | null;
  readonly teamID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class User {
  readonly id: string;
  readonly Email: string;
  readonly Password: string;
  readonly FirstName: string;
  readonly LastName?: string | null;
  readonly LikedProjects?: (UserProject | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Student?: Student | null;
  readonly Admin?: Admin | null;
  readonly Visitor?: Visitor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userStudentId?: string | null;
  readonly userAdminId?: string | null;
  readonly userVisitorId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Project {
  readonly id: string;
  readonly TeamName: string;
  readonly ProjectName: string;
  readonly Description?: string | null;
  readonly Students?: (Comment | null)[] | null;
  readonly Comment?: (Comment | null)[] | null;
  readonly LikedBy?: (UserProject | null)[] | null;
  readonly Tags?: (ProjectTag | null)[] | null;
  readonly Brief?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Comment {
  readonly id: string;
  readonly CommentText?: string | null;
  readonly ProjectID: string;
  readonly UserID: string;
  readonly userID: string;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Tag {
  readonly id: string;
  readonly isAward?: boolean | null;
  readonly projects?: (ProjectTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Admin {
  readonly id: string;
  readonly Access?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

export declare class Visitor {
  readonly id: string;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Visitor, VisitorMetaData>);
  static copyOf(source: Visitor, mutator: (draft: MutableModel<Visitor, VisitorMetaData>) => MutableModel<Visitor, VisitorMetaData> | void): Visitor;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class UserProject {
  readonly id: string;
  readonly user: User;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserProject, UserProjectMetaData>);
  static copyOf(source: UserProject, mutator: (draft: MutableModel<UserProject, UserProjectMetaData>) => MutableModel<UserProject, UserProjectMetaData> | void): UserProject;
}

export declare class ProjectTag {
  readonly id: string;
  readonly project: Project;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectTag, ProjectTagMetaData>);
  static copyOf(source: ProjectTag, mutator: (draft: MutableModel<ProjectTag, ProjectTagMetaData>) => MutableModel<ProjectTag, ProjectTagMetaData> | void): ProjectTag;
}