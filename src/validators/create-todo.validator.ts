import { z } from 'zod'

export const createTodoDtoBody = z.object ({
    
        title: z.string({
            required_error: 'Name is required', 

        }),

        active: z.boolean({
            required_error: 'Active status is required'

        }),

        isAdmin: z.boolean().optional().default(false)
        
    }).strict()

export const createUserDto = z.object ({
    body: createTodoDtoBody

})

export const updateTodoDtoBody = z.object ({
    
        title: z.string({
            required_error:  'title is required', 

        }),

        active: z.boolean({
            required_error: 'Active status is required'

        }),
        isAdmin: z.boolean().optional().default(false)

        
    }).strict()

    export const updateTodoDto = z.object ({
        body: updateTodoDtoBody

    })

// export const removeTodoDto = z.object ({
//     body: z.object({
//         id: z.number({
//             required_error: 'Id is required', 

//         }),

//         // active: z.boolean({
//         //     required_error: 'Active status is required'

//         // })
//     }).strict(),
// })



// export const findOneTodoDto = z.object ({
//     body: z.object({
//         title: z.string({
//             required_error: 'Name is required', 

//         }),

//         active: z.boolean({
//             required_error: 'Active status is required'

//         })
//     }).strict(),
// })

// export const getAllTodoDto = z.object ({
//     body: z.object({
//         title: z.string({
//             required_error: 'Name is required', 

//         }),

//         active: z.boolean({
//             required_error: 'Active status is required'

//         })
//     }).strict(),
// })