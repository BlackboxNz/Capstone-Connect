/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
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
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
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
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      TeamName
      ProjectName
      Description
      Brief
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      TeamName
      ProjectName
      Description
      Brief
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      TeamName
      ProjectName
      Description
      Brief
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateProjectTags = /* GraphQL */ `
  subscription OnCreateProjectTags($owner: String) {
    onCreateProjectTags(owner: $owner) {
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
export const onUpdateProjectTags = /* GraphQL */ `
  subscription OnUpdateProjectTags($owner: String) {
    onUpdateProjectTags(owner: $owner) {
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
export const onDeleteProjectTags = /* GraphQL */ `
  subscription OnDeleteProjectTags($owner: String) {
    onDeleteProjectTags(owner: $owner) {
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
export const onCreateProjectUser = /* GraphQL */ `
  subscription OnCreateProjectUser($owner: String) {
    onCreateProjectUser(owner: $owner) {
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
export const onUpdateProjectUser = /* GraphQL */ `
  subscription OnUpdateProjectUser($owner: String) {
    onUpdateProjectUser(owner: $owner) {
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
export const onDeleteProjectUser = /* GraphQL */ `
  subscription OnDeleteProjectUser($owner: String) {
    onDeleteProjectUser(owner: $owner) {
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
