"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const Task_1 = require("../model/Task");
class TaskRepository {
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Task_1.Task.create({
                    titulo: task.titulo,
                    descripcion: task.descripcion
                });
            }
            catch (error) {
                throw new Error("Error al crear tarea");
            }
        });
    }
    updateStatus(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_task = yield Task_1.Task.findOne({
                    where: {
                        id: task.id,
                    },
                });
                if (!new_task) {
                    throw new Error("Tarea no encontrada");
                }
                new_task.estado = task.estado;
                yield new_task.save();
            }
            catch (error) {
                throw new Error("Error al actualizar tarea!");
            }
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_task = yield Task_1.Task.findOne({
                    where: {
                        id: taskId,
                    },
                });
                if (!new_task) {
                    throw new Error("task not found!");
                }
                yield new_task.destroy();
            }
            catch (error) {
                throw new Error("Failed to eliminate task!");
            }
        });
    }
    getTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_task = yield Task_1.Task.findOne({
                    where: {
                        id: taskId,
                    },
                    attributes: ['id', 'titulo', 'descripcion', 'estado']
                });
                if (!new_task) {
                    throw new Error("Tarea no encontrada!");
                }
                return new_task;
            }
            catch (error) {
                throw new Error("Error al obtener tarea!");
            }
        });
    }
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Task_1.Task.findAll({
                    attributes: ['id', 'titulo', 'descripcion', 'estado']
                });
            }
            catch (error) {
                throw new Error("Error al obtener tareas!");
            }
        });
    }
}
exports.TaskRepository = TaskRepository;
