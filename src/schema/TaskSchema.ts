import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    titulo: z
      .string()
      .min(1, { message: "Titulo no puede estar vacio!" }),
    descripcion: z
      .string()
      .min(1, { message: "Descripcion no puede estar vacio" }),
  }),
});

