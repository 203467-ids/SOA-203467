import { Request, Response } from "express";
import { Task } from "../model/Task";
import { TaskRepository } from "../repository/TaskRepository";

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const new_task = new Task();
      new_task.titulo = req.body.titulo;
      new_task.descripcion = req.body.descripcion;

      await new TaskRepository().createTask(new_task);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created task!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "No se logro el registro de la tarea!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new TaskRepository().deleteTask(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted task!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Tarea no eliminada!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_task = await new TaskRepository().getTaskById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched task by id!",
        data: new_task,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Tarea no encontrada!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_task = await new TaskRepository().getTasks();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all task data!",
        data: new_task,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "no se puede obtener las tareas!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_task = new Task();

      new_task.id = id;
      new_task.estado=true;
     

      await new TaskRepository().updateStatus(new_task);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated task data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "tarea no encontrada!",
      });
    }
  }
}

export default new TaskController()