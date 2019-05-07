# ![LOGO](logo.png) Gitlab **flow**ground Connector

## Description

A generated **flow**ground connector for the Gitlab API (version v3).

Generated from: https://api.apis.guru/v2/specs/gitlab.com/v3/swagger.json<br/>
Generated at: 2019-05-07T17:41:02+03:00

## API Description

The platform for modern developers
GitLab unifies issues, code review, CI and CD into a single UI

## Authorization

Supported authorization schemes:
- API Key- API Key
## Actions

### Get the current application settings

*Tags:* `application`

### Modify application settings

*Tags:* `application`

### Validation of .gitlab-ci.yml content

*Tags:* `ci`

### getV3DeployKeys

*Tags:* `deploy_keys`

### Get the list of the available template

> This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `dockerfiles`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `dockerfiles`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get the list of the available template

> This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `gitignores`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `gitignores`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get the list of the available template

> This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `gitlab_ci_ymls`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `gitlab_ci_ymls`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get a groups list

*Tags:* `groups`

#### Input Parameters
* `statistics` - _optional_ - Include project statistics
* `all_available` - _optional_ - Show all group that you have access to
* `search` - _optional_ - Search for a specific group
* `order_by` - _optional_ - Order by name or path
    Possible values: name, path.
* `sort` - _optional_ - Sort by asc (ascending) or desc (descending)
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a group. Available only for users who can create groups.

*Tags:* `groups`

### Get list of owned groups for authenticated user

*Tags:* `groups`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `statistics` - _optional_ - Include project statistics

### Remove a group.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group

### Get a single group, with containing projects.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group

### Update a group. Available only for users who can administrate groups.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group

### Gets a list of access requests for a group.

> This feature was introduced in GitLab 8.11.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Requests access for the authenticated user to a group.

> This feature was introduced in GitLab 8.11.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID

### Denies an access request for the given user.

> This feature was introduced in GitLab 8.11.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `user_id` - _required_ - The user ID of the access requester

### Approves an access request for the given user.

> This feature was introduced in GitLab 8.11.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `user_id` - _required_ - The user ID of the access requester

### Get a list of group issues

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group
* `state` - _optional_ - Return opened, closed, or all issues
    Possible values: opened, closed, all.
* `labels` - _optional_ - Comma-separated list of label names
* `milestone` - _optional_ - Return issues for a specific milestone
* `order_by` - _optional_ - Return issues ordered by `created_at` or `updated_at` fields.
    Possible values: created_at, updated_at.
* `sort` - _optional_ - Return issues sorted in `asc` or `desc` order.
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Gets a list of group or project members viewable by the authenticated user.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `query` - _optional_ - A query string to search for members
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Adds a member to a group or project.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID

### Removes a user from a group or project.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `user_id` - _required_ - The user ID of the member

### Gets a member of a group or project.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `user_id` - _required_ - The user ID of the member

### Updates a member of a group or project.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID
* `user_id` - _required_ - The user ID of the new member

### Get group level notification level settings, defaults to Global

> This feature was introduced in GitLab 8.12

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### Update group level notification level settings, defaults to Global

> This feature was introduced in GitLab 8.12

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### Get a list of projects in this group.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Transfer a project to the group namespace. Available only for admin.

*Tags:* `groups`

#### Input Parameters
* `id` - _required_ - The ID of a group
* `project_id` - _required_ - The ID or path of the project

### Get the list of system hooks

*Tags:* `hooks`

### Create a new system hook

*Tags:* `hooks`

### Delete a hook

*Tags:* `hooks`

#### Input Parameters
* `id` - _required_ - The ID of the system hook

### Test a hook

*Tags:* `hooks`

#### Input Parameters
* `id` - _required_ - The ID of the system hook

### postV3InternalAllowed

*Tags:* `internal`

### getV3InternalBroadcastMessage

*Tags:* `internal`

### getV3InternalCheck

*Tags:* `internal`

### getV3InternalDiscover

*Tags:* `internal`

### postV3InternalLfsAuthenticate

*Tags:* `internal`

### getV3InternalMergeRequestUrls

*Tags:* `internal`

### postV3InternalTwoFactorRecoveryCodes

*Tags:* `internal`

### Get currently authenticated user's issues

*Tags:* `issues`

#### Input Parameters
* `state` - _optional_ - Return opened, closed, or all issues
    Possible values: opened, closed, all.
* `labels` - _optional_ - Comma-separated list of label names
* `milestone` - _optional_ - Return issues for a specific milestone
* `order_by` - _optional_ - Return issues ordered by `created_at` or `updated_at` fields.
    Possible values: created_at, updated_at.
* `sort` - _optional_ - Return issues sorted in `asc` or `desc` order.
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get single ssh key by id. Only available to admin users

*Tags:* `keys`

#### Input Parameters
* `id` - _required_

### Get the list of the available license template

> This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `licenses`

#### Input Parameters
* `popular` - _optional_ - If passed, returns only popular licenses

### Get the text for a specific license

> This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `licenses`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get a namespaces list

*Tags:* `namespaces`

#### Input Parameters
* `search` - _optional_ - Search query for namespaces
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get global notification level settings and email, defaults to Participate

> This feature was introduced in GitLab 8.12

*Tags:* `notification_settings`

### Update global notification level settings and email, defaults to Participate

> This feature was introduced in GitLab 8.12

*Tags:* `notification_settings`

### Get a projects list for authenticated user

*Tags:* `projects`

#### Input Parameters
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project

### Create new project

*Tags:* `projects`

### Get all projects for admin user

*Tags:* `projects`

#### Input Parameters
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project
* `statistics` - _optional_ - Include project statistics

### Fork new project for the current user or provided namespace.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get an owned projects list for authenticated user

*Tags:* `projects`

#### Input Parameters
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project
* `statistics` - _optional_ - Include project statistics

### Search for projects the current user has access to

*Tags:* `projects`

#### Input Parameters
* `query` - _required_ - The project name to be searched
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Gets starred project for the authenticated user

*Tags:* `projects`

#### Input Parameters
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project

### Create new project for a specified user. Only available to admin users.

*Tags:* `projects`

#### Input Parameters
* `user_id` - _required_ - The ID of a user

### Get a list of visible projects for authenticated user

*Tags:* `projects`

#### Input Parameters
* `order_by` - _optional_ - Return projects ordered by field
    Possible values: id, name, path, created_at, updated_at, last_activity_at.
* `sort` - _optional_ - Return projects sorted in ascending and descending order
    Possible values: asc, desc.
* `archived` - _optional_ - Limit by archived status
* `visibility` - _optional_ - Limit by visibility
    Possible values: public, internal, private.
* `search` - _optional_ - Return list of authorized projects matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `simple` - _optional_ - Return only the ID, URL, name, and path of each project

### Remove a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get a single project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Update an existing project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Trigger a GitLab project build

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `ref` - _required_ - The commit sha or name of a branch or tag

### Gets a list of access requests for a project.

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Requests access for the authenticated user to a project.

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### Denies an access request for the given user.

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `user_id` - _required_ - The user ID of the access requester

### Approves an access request for the given user.

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `user_id` - _required_ - The user ID of the access requester

### Archive a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get all project boards

> This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get the lists of a project board

> Does not include `backlog` and `done` lists. This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `board_id` - _required_ - The ID of a board

### Create a new board list

> This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `board_id` - _required_ - The ID of a board

### Delete a board list

> This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `board_id` - _required_ - The ID of a board
* `list_id` - _required_ - The ID of a board list

### Get a list of a project board

> This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `board_id` - _required_ - The ID of a board
* `list_id` - _required_ - The ID of a list

### Moves a board list to a new position

> This feature was introduced in 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `board_id` - _required_ - The ID of a board
* `list_id` - _required_ - The ID of a list

### Get a project builds

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `scope` - _optional_ - The scope of builds to show
    Possible values: pending, running, failed, success, canceled.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Download the artifacts file from build

> This feature was introduced in GitLab 8.10

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `ref_name` - _required_ - The ref from repository
* `job` - _required_ - The name for the build

### Get a specific build of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Download the artifacts file from build

> This feature was introduced in GitLab 8.5

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Keep the artifacts to prevent them from being deleted

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Cancel a specific build of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Erase build (remove artifacts and build trace)

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Trigger a manual build

> This feature was added in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a Build

### Retry a specific build of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Get a trace of a specific build of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `build_id` - _required_ - The ID of a build

### Get a specific project's deploy keys

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project

### Add new deploy key to currently authenticated user

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project

### Delete deploy key for a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Get single deploy key

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Disable a deploy key for a project

> This feature was added in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Enable a deploy key for a project

> This feature was added in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Get all deployments of the project

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Gets a specific deployment

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `deployment_id` - _required_ - The deployment ID

### Get all environments of the project

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Creates a new environment

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### Deletes an existing environment

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `environment_id` - _required_ - The environment ID

### Updates an existing environment

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `environment_id` - _required_ - The environment ID

### Get events for a single project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Remove a forked_from relationship

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Mark this project as forked from another

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `forked_from_id` - _required_ - The ID of the project it was forked from

### Get project hooks

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Add hook to project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Deletes project hook

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `hook_id` - _required_ - The ID of the hook to delete

### Get a project hook

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `hook_id` - _required_ - The ID of a project hook

### Update an existing project hook

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `hook_id` - _required_ - The ID of the hook to update

### Get a list of project issues

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `state` - _optional_ - Return opened, closed, or all issues
    Possible values: opened, closed, all.
* `iid` - _optional_ - Return the issue having the given `iid`
* `labels` - _optional_ - Comma-separated list of label names
* `milestone` - _optional_ - Return issues for a specific milestone
* `order_by` - _optional_ - Return issues ordered by `created_at` or `updated_at` fields.
    Possible values: created_at, updated_at.
* `sort` - _optional_ - Return issues sorted in `asc` or `desc` order.
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Get a single project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Update an existing issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Add spent time for a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of an Issue, Merge Request or Snippet
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `issue_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `issue_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `issue_id` - _required_

### Move an existing issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `id` - _required_
* `issue_id` - _required_
* `note_id` - _required_

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `issue_id` - _required_
* `note_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `issue_id` - _required_
* `note_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `issue_id` - _required_
* `note_id` - _required_

### Reset spent time for a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Reset the time estimate for a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Set a time estimate for a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Show time stats for a project issue

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of a project issue

### Create a todo on an issuable

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `issue_id` - _required_ - The ID of an issuable

### Get a list of project +noteable+ notes

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable

### Delete a +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Get a single +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `note_id` - _required_ - The ID of a note
* `noteable_id` - _required_ - The ID of the noteable

### Update an existing +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Unsubscribe from a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Subscribe to a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Get a specific project's deploy keys

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project

### Add new deploy key to currently authenticated user

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project

### Delete deploy key for a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Get single deploy key

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Disable a deploy key for a project

> This feature was added in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Enable a deploy key for a project

> This feature was added in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of the project
* `key_id` - _required_ - The ID of the deploy key

### Delete an existing label

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `name` - _required_ - The name of the label to be deleted

### Get all labels of the project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Create a new label

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Update an existing label. At least one optional parameter is required.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Unsubscribe from a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Subscribe to a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Gets a list of group or project members viewable by the authenticated user.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `query` - _optional_ - A query string to search for members
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Adds a member to a group or project.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### Removes a user from a group or project.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `user_id` - _required_ - The user ID of the member

### Gets a member of a group or project.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `user_id` - _required_ - The user ID of the member

### Updates a member of a group or project.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `user_id` - _required_ - The user ID of the new member

### Get a single merge request

> This endpoint is deprecated and will be removed in GitLab 9.0.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a merge request

### Update a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Cancel merge if "Merge When Pipeline Succeeds" is enabled

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Show the merge request changes

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### List issues that will be closed on merge

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `merge_request_id` - _required_

### Get the comments of a merge request

> Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `merge_request_id` - _required_

### Post a comment to a merge request

> Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Get the commits of a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Merge a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Unsubscribe from a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Subscribe to a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### List merge requests

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `state` - _optional_ - Return opened, closed, merged, or all merge requests
    Possible values: opened, closed, merged, all.
* `order_by` - _optional_ - Return merge requests ordered by `created_at` or `updated_at` fields.
    Possible values: created_at, updated_at.
* `sort` - _optional_ - Return merge requests sorted in `asc` or `desc` order.
    Possible values: asc, desc.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a merge request

### Get a single merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Update a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Add spent time for a project merge_request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a project merge_request

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of an Issue, Merge Request or Snippet
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `merge_request_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `merge_request_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `merge_request_id` - _required_

### Cancel merge if "Merge When Pipeline Succeeds" is enabled

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Show the merge request changes

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### List issues that will be closed on merge

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `merge_request_id` - _required_

### Get the comments of a merge request

> Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `merge_request_id` - _required_

### Post a comment to a merge request

> Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Get the commits of a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Merge a merge request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `id` - _required_
* `merge_request_id` - _required_
* `note_id` - _required_

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `merge_request_id` - _required_
* `note_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `merge_request_id` - _required_
* `note_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `merge_request_id` - _required_
* `note_id` - _required_

### Reset spent time for a project merge_request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a project merge_request

### Reset the time estimate for a project merge_request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a project merge_request

### Set a time estimate for a project merge_request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a project merge_request

### Show time stats for a project merge_request

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a project merge_request

### Create a todo on an issuable

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of an issuable

### Get a list of merge request diff versions

> This feature was introduced in GitLab 8.12.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a merge request

### Get a single merge request diff version

> This feature was introduced in GitLab 8.12.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `merge_request_id` - _required_ - The ID of a merge request
* `version_id` - _required_ - The ID of a merge request diff version

### Get a list of project +noteable+ notes

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable

### Delete a +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Get a single +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `note_id` - _required_ - The ID of a note
* `noteable_id` - _required_ - The ID of the noteable

### Update an existing +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Unsubscribe from a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Subscribe to a resource

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `subscribable_id` - _required_ - The ID of a resource

### Get a list of project milestones

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `state` - _optional_ - Return "active", "closed", or "all" milestones
    Possible values: active, closed, all.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new project milestone

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get a single project milestone

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `milestone_id` - _required_ - The ID of a project milestone

### Update an existing project milestone

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `milestone_id` - _required_ - The ID of a project milestone

### Get all issues for a single project milestone

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `milestone_id` - _required_ - The ID of a project milestone
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get project level notification level settings, defaults to Global

> This feature was introduced in GitLab 8.12

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### Update project level notification level settings, defaults to Global

> This feature was introduced in GitLab 8.12

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### Create a new pipeline

> This feature was introduced in GitLab 8.14

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### Get all Pipelines of the project

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `scope` - _optional_ - Either running, branches, or tags
    Possible values: running, branches, tags.

### Gets a specific pipeline for the project

> This feature was introduced in GitLab 8.11

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `pipeline_id` - _required_ - The pipeline ID

### Cancel all builds in the pipeline

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `pipeline_id` - _required_ - The pipeline ID

### Retry failed builds in the pipeline

> This feature was introduced in GitLab 8.11.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `pipeline_id` - _required_ - The pipeline ID

### Get an archive of the repository

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _optional_ - The commit sha of the archive to be downloaded
* `format` - _optional_ - The archive format

### Get a raw file contents

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit, branch name, or tag name
* `filepath` - _required_ - The path to the file to display

### Get a project repository branches

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Create branch

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete a branch

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `branch` - _required_ - The name of the branch

### Get a single branch

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `branch` - _required_ - The name of the branch

### Protect a single branch

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `branch` - _required_ - The name of the branch

### Unprotect a single branch

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `branch` - _required_ - The name of the branch

### Get a project repository commits

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `ref_name` - _optional_ - The name of a repository branch or tag, if not given the default branch is used
* `since` - _optional_ - Only commits after or in this date will be returned
* `until` - _optional_ - Only commits before or in this date will be returned
* `page` - _optional_ - The page for pagination
* `per_page` - _optional_ - The number of results per page
* `path` - _optional_ - The file path

### Commit multiple file changes as one commit

> This feature was introduced in GitLab 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get a specific commit of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - A commit sha, or the name of a branch or tag

### Get a raw file contents

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit, branch name, or tag name
* `filepath` - _required_ - The path to the file to display

### Get builds for a specific commit of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The SHA id of a commit
* `scope` - _optional_ - The scope of builds to show
    Possible values: pending, running, failed, success, canceled.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Cherry pick commit into a branch

> This feature was introduced in GitLab 8.15

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - A commit sha to be cherry picked

### Get a commit's comments

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `sha` - _required_ - A commit sha, or the name of a branch or tag

### Post comment to commit

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit's SHA

### Get the diff for a specific commit of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - A commit sha, or the name of a branch or tag

### Get a commit's statuses

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit hash
* `ref` - _optional_ - The ref
* `stage` - _optional_ - The stage
* `name` - _optional_ - The name
* `all` - _optional_ - Show all statuses, default: false
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Compare two branches, tags, or commits

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `from` - _required_ - The commit, branch name, or tag name to start comparison
* `to` - _required_ - The commit, branch name, or tag name to stop comparison

### Get repository contributors

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete an existing file in repository

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `file_path` - _required_ - The path to new file. Ex. lib/class.rb
* `branch_name` - _required_ - The name of branch
* `commit_message` - _required_ - Commit Message
* `author_email` - _optional_ - The email of the author
* `author_name` - _optional_ - The name of the author

### Get a file from repository

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID
* `file_path` - _required_ - The path to the file. Ex. lib/class.rb
* `ref` - _required_ - The name of branch, tag, or commit

### Create new file in repository

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### Update existing file in repository

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The project ID

### deleteV3ProjectsIdRepositoryMergedBranches

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get a raw blob contents by blob sha

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit, branch name, or tag name

### Get a project repository tags

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Create a new repository tag

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete a repository tag

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `tag_name` - _required_ - The name of the tag

### Get a single repository tag

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `tag_name` - _required_ - The name of the tag

### Add a release note to a tag

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `tag_name` - _required_ - The name of the tag

### Update a tag's release note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `tag_name` - _required_ - The name of the tag

### Get a project repository tree

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `ref_name` - _optional_ - The name of a repository branch or tag, if not given the default branch is used
* `path` - _optional_ - The path of the tree
* `recursive` - _optional_ - Used to get a recursive tree

### Get runners available for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `scope` - _optional_ - The scope of specific runners to show
    Possible values: active, paused, online, specific, shared.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Enable a runner for a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Disable project's runner

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `runner_id` - _required_ - The ID of the runner

### Set asana service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set assembla service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set bamboo service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set bugzilla service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set buildkite service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set builds-email service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set campfire service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set custom-issue-tracker service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set drone-ci service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set emails-on-push service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set external-wiki service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set flowdock service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set gemnasium service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set hipchat service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set irker service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set jira service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set kubernetes service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set mattermost service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set mattermost-slash-commands service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Trigger a slash command for mattermost-slash-commands

> Added in GitLab 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Set pipelines-email service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set pivotaltracker service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set pushover service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set redmine service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set slack service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Set slack-slash-commands service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Trigger a slash command for slack-slash-commands

> Added in GitLab 8.13

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Set teamcity service for project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_

### Delete a service for project

*Tags:* `projects`

#### Input Parameters
* `service_slug` - _required_ - The name of the service
    Possible values: asana, assembla, bamboo, bugzilla, buildkite, builds-email, campfire, custom-issue-tracker, drone-ci, emails-on-push, external-wiki, flowdock, gemnasium, hipchat, irker, jira, kubernetes, mattermost-slash-commands, slack-slash-commands, pipelines-email, pivotaltracker, pushover, redmine, slack, mattermost, teamcity.
* `id` - _required_

### Get the service settings for project

*Tags:* `projects`

#### Input Parameters
* `service_slug` - _required_ - The name of the service
    Possible values: asana, assembla, bamboo, bugzilla, buildkite, builds-email, campfire, custom-issue-tracker, drone-ci, emails-on-push, external-wiki, flowdock, gemnasium, hipchat, irker, jira, kubernetes, mattermost-slash-commands, slack-slash-commands, pipelines-email, pivotaltracker, pushover, redmine, slack, mattermost, teamcity.
* `id` - _required_

### Share the project with a group

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### deleteV3ProjectsIdShareGroupId

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `group_id` - _required_ - The ID of the group

### Get all project snippets

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new project snippet

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get a list of project +noteable+ notes

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable

### Delete a +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Get a single +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `note_id` - _required_ - The ID of a note
* `noteable_id` - _required_ - The ID of the noteable

### Update an existing +noteable+ note

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `noteable_id` - _required_ - The ID of the noteable
* `note_id` - _required_ - The ID of a note

### Delete a project snippet

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `snippet_id` - _required_ - The ID of a project snippet

### Get a single project snippet

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `snippet_id` - _required_ - The ID of a project snippet

### Update an existing project snippet

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `snippet_id` - _required_ - The ID of a project snippet

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `snippet_id` - _required_ - The ID of an Issue, Merge Request or Snippet
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `snippet_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `snippet_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `snippet_id` - _required_

### Get a list of project +awardable+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page
* `id` - _required_
* `snippet_id` - _required_
* `note_id` - _required_

### Award a new Emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `id` - _required_
* `snippet_id` - _required_
* `note_id` - _required_

### Delete a +awardables+ award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of an award emoji
* `id` - _required_
* `snippet_id` - _required_
* `note_id` - _required_

### Get a specific award emoji

> This feature was introduced in 8.9

*Tags:* `projects`

#### Input Parameters
* `award_id` - _required_ - The ID of the award
* `id` - _required_
* `snippet_id` - _required_
* `note_id` - _required_

### Get a raw project snippet

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `snippet_id` - _required_ - The ID of a project snippet

### Unstar a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Star a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Post status to a commit

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `sha` - _required_ - The commit hash

### Get triggers list

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a trigger

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete a trigger

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `token` - _required_ - The unique token of trigger

### Get specific trigger of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `token` - _required_ - The unique token of trigger

### Unarchive a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Upload a file

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Get the users list of a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `search` - _optional_ - Return list of users matching the search criteria
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get project variables

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a new variable in a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project

### Delete an existing variable from a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `key` - _required_ - The key of the variable

### Get a specific variable from a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `key` - _required_ - The key of the variable

### Update an existing variable from a project

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - The ID of a project
* `key` - _required_ - The key of the variable

### Get runners available for user

*Tags:* `runners`

#### Input Parameters
* `scope` - _optional_ - The scope of specific runners to show
    Possible values: active, paused, online.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get all runners - shared and specific

*Tags:* `runners`

#### Input Parameters
* `scope` - _optional_ - The scope of specific runners to show
    Possible values: active, paused, online, specific, shared.
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Remove a runner

*Tags:* `runners`

#### Input Parameters
* `id` - _required_ - The ID of the runner

### Get runner's details

*Tags:* `runners`

#### Input Parameters
* `id` - _required_ - The ID of the runner

### Update runner's details

*Tags:* `runners`

#### Input Parameters
* `id` - _required_ - The ID of the runner

### Login to get token

*Tags:* `session`

### Get the Sidekiq Compound metrics. Includes queue, process, and job statistics

*Tags:* `sidekiq`

### Get the Sidekiq job statistics

*Tags:* `sidekiq`

### Get the Sidekiq process metrics

*Tags:* `sidekiq`

### Get the Sidekiq queue metrics

*Tags:* `sidekiq`

### Get a snippets list for authenticated user

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create new snippet

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

### List all public snippets current_user has access to

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Remove snippet

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `id` - _required_ - The ID of a snippet

### Get a single snippet

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `id` - _required_ - The ID of a snippet

### Update an existing snippet

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `id` - _required_ - The ID of a snippet

### Get a raw snippet

> This feature was introduced in GitLab 8.15.

*Tags:* `snippets`

#### Input Parameters
* `id` - _required_ - The ID of a snippet

### Get the list of the available template

> This feature was introduced in GitLab 8.15.

*Tags:* `templates`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.15.

*Tags:* `templates`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get the list of the available template

> This feature was introduced in GitLab 8.8.

*Tags:* `templates`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.8.

*Tags:* `templates`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get the list of the available template

> This feature was introduced in GitLab 8.9.

*Tags:* `templates`

### Get the text for a specific template present in local filesystem

> This feature was introduced in GitLab 8.9.

*Tags:* `templates`

#### Input Parameters
* `name` - _required_ - The name of the template

### Get the list of the available license template

> This feature was introduced in GitLab 8.7.

*Tags:* `templates`

#### Input Parameters
* `popular` - _optional_ - If passed, returns only popular licenses

### Get the text for a specific license

> This feature was introduced in GitLab 8.7.

*Tags:* `templates`

#### Input Parameters
* `name` - _required_ - The name of the template

### Mark all todos as done

*Tags:* `todos`

### Get a todo list

*Tags:* `todos`

#### Input Parameters
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Mark a todo as done

*Tags:* `todos`

#### Input Parameters
* `id` - _required_ - The ID of the todo being marked as done

### Get the currently authenticated user

*Tags:* `user`

### Get the currently authenticated user's email addresses

*Tags:* `user`

### Add new email address to the currently authenticated user

*Tags:* `user`

### Delete an email address from the currently authenticated user

*Tags:* `user`

#### Input Parameters
* `email_id` - _required_ - The ID of the email

### Get a single email address owned by the currently authenticated user

*Tags:* `user`

#### Input Parameters
* `email_id` - _required_ - The ID of the email

### Get the currently authenticated user's SSH keys

*Tags:* `user`

### Add a new SSH key to the currently authenticated user

*Tags:* `user`

### Delete an SSH key from the currently authenticated user

*Tags:* `user`

#### Input Parameters
* `key_id` - _required_ - The ID of the SSH key

### Get a single key owned by currently authenticated user

*Tags:* `user`

#### Input Parameters
* `key_id` - _required_ - The ID of the SSH key

### Get the list of users

*Tags:* `users`

#### Input Parameters
* `username` - _optional_ - Get a single user with a specific username
* `search` - _optional_ - Search for a username
* `active` - _optional_ - Filters only active users
* `external` - _optional_ - Filters only external users
* `blocked` - _optional_ - Filters only blocked users
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Create a user. Available only for admins.

*Tags:* `users`

### Delete a user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Get a single user

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Update a user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Block a user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Get the emails addresses of a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Add an email address to a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Delete an email address of a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user
* `email_id` - _required_ - The ID of the email

### Get the contribution events of a specified user

> This feature was introduced in GitLab 8.13.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user
* `page` - _optional_ - Current page number
* `per_page` - _optional_ - Number of items per page

### Get the SSH keys of a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Add an SSH key to a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Delete an existing SSH key from a specified user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user
* `key_id` - _required_ - The ID of the SSH key

### Unblock a user. Available only for admins.

*Tags:* `users`

#### Input Parameters
* `id` - _required_ - The ID of the user

### Get the version information of the GitLab instance.

> This feature was introduced in GitLab 8.13.

*Tags:* `version`

## License

**flow**ground :- Telekom iPaaS / gitlab-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
