"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskSchema = void 0;
const zod_1 = require("zod");
exports.createTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        titulo: zod_1.z
            .string()
            .min(1, { message: "Titulo no puede estar vacio!" }),
        descripcion: zod_1.z
            .string()
            .min(1, { message: "Descripcion no puede estar vacio" }),
    }),
});
