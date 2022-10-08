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
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      Content
      ProjectID
      UserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProjectTags = /* GraphQL */ `
  subscription OnCreateProjectTags {
    onCreateProjectTags {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProjectTags = /* GraphQL */ `
  subscription OnUpdateProjectTags {
    onUpdateProjectTags {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProjectTags = /* GraphQL */ `
  subscription OnDeleteProjectTags {
    onDeleteProjectTags {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProjectUser = /* GraphQL */ `
  subscription OnCreateProjectUser {
    onCreateProjectUser {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProjectUser = /* GraphQL */ `
  subscription OnUpdateProjectUser {
    onUpdateProjectUser {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProjectUser = /* GraphQL */ `
  subscription OnDeleteProjectUser {
    onDeleteProjectUser {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
