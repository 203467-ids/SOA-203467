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
exports.deleteTask = exports.updateStatus = exports.createTask = exports.getTaskbyId = exports.getTasks = void 0;
const database_1 = require("../database");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM task WHERE deleted_at IS NULL');
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('No se puede conectar a la base de datos');
    }
});
exports.getTasks = getTasks;
const getTaskbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM task WHERE id= $1', [id]);
    console.log(response.rows);
    if (response.rows.length < 1) {
        return res.status(500).json('Tarea no existe');
    }
    else
        return res.status(200).json(response.rows);
});
exports.getTaskbyId = getTaskbyId;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, descripcion, } = req.body;
    const created_at = new Date();
    const status = false;
    try {
        const response = yield database_1.pool.query('INSERT INTO task (titulo, descripcion, estado, created_at) VALUES ($1, $2, $3, $4)', [titulo, descripcion, status, created_at]);
        return res.status(200).json("Tarea creada satisfactoriamente");
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('No se pudo crear tarea ' + e);
    }
});
exports.createTask = createTask;
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const estate = req.params.estado;
    const status = !estate;
    const updated_at = new Date();
    console.log(status);
    try {
        const response = yield database_1.pool.query('UPDATE task SET estado = $1, updated_at =$2 WHERE estado=false AND id=$3  ;', [status, updated_at, id]);
        return res.status(200).json("Estado actualizado satisfactoriamente");
        console.log(status);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('No se pudo actualizar estado ');
    }
});
exports.updateStatus = updateStatus;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const deleted_at = new Date();
    try {
        const response = yield database_1.pool.query('UPDATE task SET deleted_at = $1 WHERE  id=$2  ;', [deleted_at, id]);
        return res.status(200).json("Tarea Eliminado satisfactoriamente");
        console.log(status);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('No se pudo eliminar tarea ');
    }
});
exports.deleteTask = deleteTask;
