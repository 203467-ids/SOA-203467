"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
class task {
    constructor(id, titulo, descripcion, estado, created_at, updated_at, deleted_at) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        // TODO document why this constructor is empty
    }
}
exports.task = task;
