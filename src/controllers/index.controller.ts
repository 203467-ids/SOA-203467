import { Request, Response } from "express";
import { QueryResult } from "pg";
import {pool} from '../database'
import {task} from '../modelo/task'

export const getTasks = async (req: Request, res:Response): Promise <Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM task WHERE deleted_at IS NULL');
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }
    catch(e){
        console.log(e);
        return res.status(500).json('No se puede conectar a la base de datos');
    }
}

export const getTaskbyId = async (req: Request, res:Response): Promise <Response> =>{
    
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('SELECT * FROM task WHERE id= $1', [id]);
        console.log(response.rows);
        if(response.rows.length<1){
            return res.status(500).json('Tarea no existe');
        } else
        return res.status(200).json(response.rows);
   
}

export const createTask = async (req: Request, res:Response): Promise <Response> =>{
    
    const {titulo,descripcion,} = req.body;
    const created_at = new Date();
    const status= false
    
    try{
        const response: QueryResult = await pool.query('INSERT INTO task (titulo, descripcion, estado, created_at) VALUES ($1, $2, $3, $4)',[titulo, descripcion,status, created_at]);
        return res.status(200).json("Tarea creada satisfactoriamente");
    }
    catch(e){
        console.log(e);
        return res.status(500).json('No se pudo crear tarea ' + e);
    }

}

export const updateStatus = async (req: Request, res:Response): Promise <Response> =>{
    const id = parseInt(req.params.id);
    const estate= req.params.estado;
  
    const status=!estate;
    const updated_at = new Date();
    console.log(status)

 
    try{
        const response: QueryResult = await pool.query('UPDATE task SET estado = $1, updated_at =$2 WHERE estado=false AND id=$3  ;', [status,updated_at,id]);
        return res.status(200).json("Estado actualizado satisfactoriamente");
        console.log(status)
    }
    catch(e){
        console.log(e);
        return res.status(500).json('No se pudo actualizar estado ');
    }
}

export const deleteTask = async (req: Request, res:Response): Promise <Response> =>{
    const id = parseInt(req.params.id);
    const deleted_at = new Date();
    

 
    try{
        const response: QueryResult = await pool.query('UPDATE task SET deleted_at = $1 WHERE  id=$2  ;', [deleted_at,id]);
        return res.status(200).json("Tarea Eliminado satisfactoriamente");
        console.log(status)
    }
    catch(e){
        console.log(e);
        return res.status(500).json('No se pudo eliminar tarea ');
    }
}

