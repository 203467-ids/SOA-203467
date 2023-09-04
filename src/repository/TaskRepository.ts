import { Task } from "../model/Task";



interface InterfaceTaskRepository{
  createTask(task: Task): Promise<void>;
  updateStatus(task: Task): Promise<void>;
  deleteTask(taskId: number): Promise<void>;
  getTaskById(taskId: number): Promise<Task>;
  getTasks(): Promise<Task[]>;
}

export class TaskRepository implements InterfaceTaskRepository{
    async createTask(task: Task): Promise<void> {
        try {
            await Task.create({
              titulo: task.titulo,
              descripcion: task.descripcion
              
            });
          } catch (error) {
            throw new Error("Error al crear tarea");
          }
    }
    async updateStatus(task: Task): Promise<void> {
        
        try {
            const new_task = await Task.findOne({
              where: {
                id: task.id,
              },
            });
            if (!new_task) {
              throw new Error("Tarea no encontrada");
            }
            new_task.estado = task.estado
            
      
            await new_task.save();
          } catch (error) {
            throw new Error("Error al actualizar tarea!");
          }
    }
    async deleteTask(taskId: number): Promise<void> {
      try {
        const new_task = await Task.findOne({
          where: {
            id: taskId,
          },
        });
        if (!new_task) {
          throw new Error("task not found!");
        }
  
        await new_task.destroy();
      } catch (error) {
        throw new Error("Failed to eliminate task!");
      }
    }
    async getTaskById(taskId: number): Promise<Task> {
        try {
            const new_task = await Task.findOne({
              where: {
                id: taskId,
              },
              attributes: ['id', 'titulo','descripcion','estado']
            });
            if (!new_task) {
              throw new Error("Tarea no encontrada!");
            }
            return new_task;
          } catch (error) {
            throw new Error("Error al obtener tarea!");
          }
    }
    async getTasks(): Promise<Task[]> {
        try {
            return await Task.findAll({
              attributes: ['id', 'titulo','descripcion','estado']
            });
           } catch (error) {
             throw new Error("Error al obtener tareas!");
           }
    }
    
}