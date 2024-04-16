/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as TodoController from '../controllers/todo.controller'
import { validate } from '../utils/validate'

import { authenticateToken, isAdmin } from '../middlewares/authentication.middleware'
import { createUserDto, updateTodoDto } from '../validators/create-todo.validator'
const route = express.Router()



route.get('/', authenticateToken,TodoController.getAll)

route.get('/:id', TodoController.findOne)

route.post('/', validate(createUserDto), authenticateToken, TodoController.create)

route.delete('/:id', authenticateToken, isAdmin, TodoController.remove)

route.patch('/:id',validate(updateTodoDto), authenticateToken, isAdmin, TodoController.update)


export default route;