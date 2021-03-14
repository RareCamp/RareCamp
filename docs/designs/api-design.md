# API Design

The following document describes the individual APIs used in this application, request/response models,
and HTTP Status Codes. In the future, this document will be superseded by the Swagger model definition as the
source of truth. At that point, we will use this document the behavior of individual APIs instead.

Refer to the [Data Model Doc](./data-models.md) for source of truth details about each entity
referred in the doc here.

## NOTE

- All the APIs use the following prefix: `api.example.com/v1/`. The prefix is skipped in the following descriptions for simplicity.

- Authentication parameters is not shown the following API definitions for simplicity

- Common HTTP Status like `401 Unauthorized` or `500 _internal Server Error` are not shown here for simplicity

- We try to use standard REST HTTP verbs as much as possible. Any deviations are described clearly in the API.

- For simplicity, we are creating APIs around the business logic and not the underlying data models.
  This is a deviation from best-practices. But it keeps the frontend logic fairly simple. In the backend
  implementation, we will have high-level business logic methods that map to lower level data-model specific methods
  to interface with the database

- As much as possiible, we have tried to separate an object's data from the way it is visually
  presented on the screen. This should simplify the backend logic and hopefully keep the
  data storage de-coupled from the visual presentation. This should also allow the UI to be
  rendered quickly without waiting for the entire data model to be parsed & processed.

- All dates returned by the API are in UTC. UI is responsible for converting to local
  timezone

- All keys in the API request/response use Camel Case starting with a lower case letter.

- In response JSONs, the core data elements are enclosed in a top-level key
  representing the entity returned by the response. Example: In the `Get Programs API`, all
  contents of the Program entity are stored within a top-level key called "program" -
  `{"program": {...}}`. This is a more extensible design allowing us to send other metadata
  along with the core entity.

- All APIs have an `_internal` blob containing metadata used for backend's housekeeping purposes.

## User

Get details about the logged in user

`GET /me`

**Response**

```json
{
  "user": {
    "id": "<uuid>",
    "firstName": "<string>",
    "lastName": "<string>",
    "email": "<string>",
    "organization": {
      "id": "<uuid>",
      "name": "<string>"
    },
    "workspaces": [
      {
        "id": "<uuid>",
        "name": "<string>"
      }
    ]
  },
  "ui": {
    "defaultWorkspaceId": "<uuid>"
  }
}
```

## Logout

`POST /logout`

**Request**
None

**Response**

None

## Get Workspace

Get all details necessary to display the workspace page.

`GET /workspace/<workspaceId>`

**Request**

None

**Response**

```json
{
  "workspace": {
    "id": "<uuid>",
    "name": "<string>",
    "programs": [
      {
        "id": "<uuid>",
        "name": "<string>",
        "description": "<string>"
      }
    ]
  }
}
```

Create a new workspace.

`POST /workspace`

**Request**

```json
{
  "workspace": {
    "id": "<uuid>",
    "name": "<string>",
    "description": "<string>"
  }
}
```

**Response**
Returns the full response of `Get Workspace API`. The ID returned in the response is the ID of
the newly created program.


## Create Program

Create a brand new program

`POST /workspace/<workspaceId>/program`

**Request**
All the fields are optional, expect the name of the program.

```json
{
  "name": "<string>",
  "description": "<string>",
  "disease": {
    "name": "<string>",
    "abbreviation": "<string>",
    "omimId": "<string>",
    "causalGene": "<string>",
    "mutationImpact": "<string>",
    "sizeOfProtein": "<string>"
  }
}
```

**Response**
Returns the full response of `Get Program API`. The ID returned in the response is the ID of
the newly created program.

## Get Program

Get details for the Program page.

`GET /program/<programId>`

**Request**

```json

```

**Response**

```json
{
  "program": {
    "id": "<uuid>",
    "name": "<string>",
    "description": "<string>",

    "projects": [
        {
            "id": "<uuid>",
            "name": "<string>",
            "description": "<string>",
            "status": "<status>",
            "tasks": [
                {
                    "id": "<uuid>",
                    "name": "<string>",
                    "description": "<string>",
                    "status": "<string>",
                    "assignee": [
                        {
                            "id": "<uuid>",
                            "firstName": "<string>",
                            "thumbnailColor": "<hexcode>"
                        }
                    ],
                    "budget": {
                        "amount": "<number>",
                        "currency": "<string>"
                    },
                    "duration": "<string>",
                    "estimatedStartDate": "<iso-date-str>",
                    "estimatedEndDate": "<iso-date-str>",
                    "actualStartDate": "<iso-date-str>",
                    "actualEndDate": "<iso-date-str>"
                }
            ],
        }
    ]
  },

  // All information necessary for visual presentation is in this object
  "ui": {
      "programs": {
        "<programId>": {
            "projectsOrder": ["projectId1", "projectId2" ...]
        }
      },
      "projects": {
          "<projectId>": {
            "taskOrder": ["taskId1", "taskId2" ...]
          }
      }
    }
}
```

## Update Program: Add/Update Project, Add/Update Task Overview

Called to update an existing program, details about its constituent projects, and high level details about
individual tasks within the project. It is also used when you add a new project or a new task. It is a very
broadly scoped API overloading a lot of functionality into one. We are using this structure for now because it
simplifies the frontend UI logic.

`PUT /program/<programId>`

**Request**
Request sends an update copy of the entire structure returned by `Get Program API`. Backend will take care of splicing
individual elements and storing them in appropriate tables.

**Response**
Returns a complete response of `Get Program API`. Makes it very easy for a frontend to refresh the program page using
the existing Program page rendering logic.

**HTTP Status Code**

- `409 Conflict`: This is returned when new project cannot be created because the program state stored in the database
  has changed.

## Get Task Details

Call this API to full details about a task in order to render the Task Detail page

`GET /task/<taskId>`

**Request**

```json

```

**Response**

```json
{
  "task": {
    "id": "<uuid>",
    "name": "<string>",
    "description": "<string>",
    "status": "<string>",
    "assignee": [
      // List of users assigned to this task
      {
        "id": "<uuid>",
        "firstName": "<string>",
        "thumbnailColor": "<hexcode>"
      }
    ],
    "budget": {
      "amount": "<number>",
      "currency": "<string>"
    },
    "duration": "<string>",
    "estimatedStartDate": "<iso-date-str>",
    "estimatedEndDate": "<iso-date-str>",
    "actualStartDate": "<iso-date-str>",
    "actualEndDate": "<iso-date-str>",
    "notes": {
      // JSON representation of rich text HTML
    },
    "files": [
      {
        "id": "<uuid>",
        "originalName": "<string>",
        "description": "<string>",
        "userId": "<userId>"
      }
    ],
    "guide": {
      "id": "<uuid>",
      "detailsUrl": "<string>",
      "title": "<string>",
      "imageUrl": "<string>",
      "about": "<string>"
    },
    "serviceProviders": [
      {
        "id": "<uuid>",
        "name": "<string>",
        "type": "<string>",
        "shortDescription": "<string>",
        "websiteUrl": "<string>",
        "email": "<string>"
      }
    ]
  },

  "ui": {
    "serviceProvidersOrder": ["serviceProviderId1", "serviceProviderId2"]
  }
}
```

## Update Task Details

Call this API to update all the task details. It is again a broadly scoped API for simplicity of the frontend.

NOTE: File uploads are not yet supported through this API. We will create a separate API for it.

`PUT /task/<taskId>`

**Request**
Send an update copy of the response you received via `Get Task Details API`

**Response**
Returns a complete response of `Get Task Details API` for ease of refreshing the UI.

**HTTP Status Code**

- `409 Conflict`: This is returned when new project cannot be created because the program state stored in the database
  has changed.
