import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Task.TASK_TABLE_NAME,
  paranoid: true,
})
export class Task extends Model {
  public static TASK_TABLE_NAME = "task" as string;
  public static TASK_ID = "id" as string;
  public static TASK_TITULO = "titulo" as string;
  public static TASK_DESCRIPCION = "descripcion" as string;
  public static TASK_ESTADO = "estado" as unknown as boolean;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Task.TASK_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: Task.TASK_TITULO,
  })
  titulo!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: Task.TASK_DESCRIPCION,
  })
  descripcion!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  estado!: boolean;

 
  
}