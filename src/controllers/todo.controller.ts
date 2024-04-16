import { NextFunction, Request, Response } from "express"
import * as TodoService from '../services/todo.service'
import HttpStatusCodes from "http-status-codes"


export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log((req as any).user)
        const userId = (req as any).user.userId;
        const data = await TodoService.getAll(userId)
        res.json(data)
    } catch (error) {
        next(error)
    }
}


export const create = async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log(req.body, ' is request body')
    const todos = await TodoService.create(req.body, (req as any).user.userId)
  res.status(HttpStatusCodes.CREATED).send(todos)
} catch(error){
  next(error)
}
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const todo: any = req.body
  const id = Number(req.params.id)
  const todos = await TodoService.update(id, todo)
  res.status(HttpStatusCodes.OK).send(todos);
  } catch(error) {
    next(error)
  }
}


export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
  // @TODO: Handle errors
  const todos = await TodoService.remove(Number(id))
  res.status(HttpStatusCodes.NO_CONTENT).send()
}catch(error){
  next(error)
}
}



// try {
//   const id = Number(req.params.id)
// console.log(id, ' request params ko id yo ho hai')
// const todos = await TodoService.remove(id)
// res.status(HttpStatusCodes.GONE).send()
// } catch (error) {
// next(error)
// }

export const findOne =async (req: Request, res: Response, next: NextFunction) => {
  try {
      const  id  = Number(req.params.id);
      const todos =  await TodoService.findOne(id);

      res.status(HttpStatusCodes.ACCEPTED).send(todos);
  } catch (error: any) {
    next(error);
  }
  }


  // res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);

  // if (!todo) {
  //   res.status(HttpStatusCodes.NOT_FOUND).send('Todo not found');
  // } else {
  //   res.status(HttpStatusCodes.ACCEPTED).send(todo);
  // }