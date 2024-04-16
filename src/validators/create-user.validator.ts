import { z } from 'zod'

export const createUserDtoBody = z.object ({

    email: z.string({
        required_error: 'email is required', 

    }),

    passsword: z.string({
        required_error: 'passsword  is required',

    }),

    isAdmin: z.boolean().optional().default(false)

}).strict()

export const createUserDto = z.object ({
    body: createUserDtoBody
})
