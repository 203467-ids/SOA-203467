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
const Task_1 = require("../model/Task");
const TaskRepository_1 = require("../repository/TaskRepository");
class TaskController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_task = new Task_1.Task();
                new_task.titulo = req.body.titulo;
                new_task.descripcion = req.body.descripcion;
                yield new TaskRepository_1.TaskRepository().createTask(new_task);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created task!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "No se logro el registro de la tarea!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new TaskRepository_1.TaskRepository().deleteTask(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted task!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Tarea no eliminada!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_task = yield new TaskRepository_1.TaskRepository().getTaskById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched task by id!",
                    data: new_task,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Tarea no encontrada!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_task = yield new TaskRepository_1.TaskRepository().getTasks();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all task data!",
                    data: new_task,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "no se puede obtener las tareas!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_task = new Task_1.Task();
                new_task.id = id;
                new_task.estado = true;
                yield new TaskRepository_1.TaskRepository().updateStatus(new_task);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated task data!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "tarea no encontrada!",
                });
            }
        });
    }
}
exports.default = new TaskController();
