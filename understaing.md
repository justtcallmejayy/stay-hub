| HTTP request | URL                  | Purpose           |
| ------------ | -------------------- | ----------------- |
| GET          | `/listings`          | Show all listings |
| GET          | `/listings/new`      | Show create form  |
| POST         | `/listings`          | Create listing    |
| GET          | `/listings/:id`      | Show one listing  |
| GET          | `/listings/:id/edit` | Show edit form    |
| PUT          | `/listings/:id`      | Update listing    |
| DELETE       | `/listings/:id`      | Delete listing    |

### EJS Syntax

- `<% ... %>`: Run JavaScript without displaying its result.
- `<%= ... %>`: Run JavaScript and display its result in the HTML.
