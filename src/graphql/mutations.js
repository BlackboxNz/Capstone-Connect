/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
      id
      Name
      IsAward
      Projects {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
      id
      Name
      IsAward
      Projects {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
      id
      Name
      IsAward
      Projects {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      Users {
        items {
          id
          Email
          Password
          FirstName
          LastName
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      Users {
        items {
          id
          Email
          Password
          FirstName
          LastName
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      Users {
        items {
          id
          Email
          Password
          FirstName
          LastName
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Email
      Password
      FirstName
      LastName
      LikedProjects {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      teamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Email
      Password
      FirstName
      LastName
      LikedProjects {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      teamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Email
      Password
      FirstName
      LastName
      LikedProjects {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      teamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      TeamName
      ProjectName
      Description
      Brief
      Tag
      Img
      Video
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Users {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Tags {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      TeamName
      ProjectName
      Description
      Brief
      Tag
      Img
      Video
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Users {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Tags {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      TeamName
      ProjectName
      Description
      Brief
      Tag
      Img
      Video
      Comments {
        items {
          id
          Content
          ProjectID
          UserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Users {
        items {
          id
          userID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Tags {
        items {
          id
          tagsID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createProjectTags = /* GraphQL */ `
  mutation CreateProjectTags(
    $input: CreateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    createProjectTags(input: $input, condition: $condition) {
      id
      tagsID
      projectID
      tags {
        id
        Name
        IsAward
        Projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateProjectTags = /* GraphQL */ `
  mutation UpdateProjectTags(
    $input: UpdateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    updateProjectTags(input: $input, condition: $condition) {
      id
      tagsID
      projectID
      tags {
        id
        Name
        IsAward
        Projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteProjectTags = /* GraphQL */ `
  mutation DeleteProjectTags(
    $input: DeleteProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    deleteProjectTags(input: $input, condition: $condition) {
      id
      tagsID
      projectID
      tags {
        id
        Name
        IsAward
        Projects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createProjectUser = /* GraphQL */ `
  mutation CreateProjectUser(
    $input: CreateProjectUserInput!
    $condition: ModelProjectUserConditionInput
  ) {
    createProjectUser(input: $input, condition: $condition) {
      id
      userID
      projectID
      user {
        id
        Email
        Password
        FirstName
        LastName
        LikedProjects {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateProjectUser = /* GraphQL */ `
  mutation UpdateProjectUser(
    $input: UpdateProjectUserInput!
    $condition: ModelProjectUserConditionInput
  ) {
    updateProjectUser(input: $input, condition: $condition) {
      id
      userID
      projectID
      user {
        id
        Email
        Password
        FirstName
        LastName
        LikedProjects {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteProjectUser = /* GraphQL */ `
  mutation DeleteProjectUser(
    $input: DeleteProjectUserInput!
    $condition: ModelProjectUserConditionInput
  ) {
    deleteProjectUser(input: $input, condition: $condition) {
      id
      userID
      projectID
      user {
        id
        Email
        Password
        FirstName
        LastName
        LikedProjects {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      project {
        id
        TeamName
        ProjectName
        Description
        Brief
        Tag
        Img
        Video
        Comments {
          nextToken
          startedAt
        }
        Users {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
