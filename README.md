# Route Manager

<a><img src="https://img.shields.io/badge/created%20by-@thequinndev-purple.svg" alt="Created by @thequinndev"></a>
<hr />

Endpoint management, OpenAPI management and auto-documentation in one simple module. 

* [Route Manager README](https://github.com/thequinndev/route-manager/blob/main/README.md)

* [Up-to-date working examples](https://github.com/thequinndev/route-manager/tree/main/examples/route-manager)

* [Route Manager Documentation](https://github.com/thequinndev/docolate/wiki/Route-Manager-%E2%80%90-Getting-Started)

## Simple endpoint management using zod

```typescript
import { RouteManager } from '@thequinndev/route-manager'

const routeManager = RouteManager()

// READ
const getUser = routeManager.endpoint({
    operationId: 'getUser',
    path: '/users/:userId',
    method: 'get',
    accepts: {
        path: z.object({
            userId: z.number()
        })
    },
    returns: {
        200: z.object({
            output: z.string()
        }),
        400: z.object({
            message: z.string()
        }).array(),
        404: z.object({
            message: z.string()
        }).array(),
        500: z.enum(['Internal Server Error'])
    }
})

// CREATE
const createUser = routeManager.endpoint({...})
// UPDATE
const updateUser = routeManager.endpoint({...})
// DELETE
const deleteUser = routeManager.endpoint({...})

// Group endpoints by entity or purpose
const userEndpoints = routeManager.endpointGroup([
    getUser,
    createUser,
    updateUser,
    deleteUser
])

...
```

* For more, see the [Route Manager Documentation](https://github.com/thequinndev/docolate/wiki/Route-Manager-%E2%80%90-Getting-Started)