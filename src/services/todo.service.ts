import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"

const prisma = new PrismaClient()

export const getAll = async (userId: number) => {
  try { 
    
  return await prisma.todo.findMany( { where : { userId : userId } } )
    }
    // return await prisma.todo.findMany()
    
  catch (error: any) {
    
    console.log( error );

    if ( error.code === 'P2025') {
        throw Boom.notFound(' nothing to show my dear ')
    } else {
      throw (error)
    }
  }
}
  
  
  
  
  export const create = async (body: any, userId: number) => {
    // const { title } = body
    try {
      return await prisma.todo.create({

      data: {
        title : body.title,
        userId : userId,  
        active: body.active
      }
    })
    // return 'create garne api'
  } catch( error: any) {
    console.log(error);

    if ( error.code === 'P2003') {
      throw Boom.notFound('cannot be created')
    } else {
      throw(error)
    }
  }
}
   
  export const update = async (id: number, todo: any) => {
     try {

      return await prisma.todo.update({
        data:{
          title: todo.title,
          active: todo.active
        },
        where:{
            id: Number(id)
        }
      })
      
  }catch(error: any) {
    console.log( error )
    if ( error.code === 'P2025') {
      
      throw Boom.notFound('Nothing to change my dear')
     } else {
      throw(error)
     }
     
   } 
  }

  
  export const remove = async (id: Number) => {
 try{
  
    return await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    })
} catch(error: any){
  if ( error.code === 'P2025') {
      
    throw Boom.notFound('Nothing to delete my dear')
   } else {
    throw(error)
   }
}
  }

  // ( id: number ) => {
  //   try {
  //    await prisma.todo.delete ({ where: { id: id  } })
     
  //    return 'remove garne api'
    
  //  } catch (error: any){
  //    console.log( error );
 
  //    if ( error.code === 'P2025') {
  //      throw Boom.notFound(' Nothing to delete my dear')
  //    } else {
  //      throw(error)
  //    }
  //  } 
  //  }



  export const findOne = async ( id: number ) => {
    try {
     return await prisma.todo.findFirstOrThrow ({ where: { 
      id: id 
    }, 
  })
   } catch (error: any){

     console.log( error )

     if ( error.code === 'P2025') {
      
      throw Boom.notFound('Nothing posted my dear')
     } else {
      throw(error)
     }
     
   } 
   }

   