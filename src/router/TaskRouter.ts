import BaseRoutes from "./base/BaseRouter";
import TaskController from "../controller/TaskController";
import validate from "../helper/validate";
import { createTaskSchema} from "../schema/TaskSchema";

class TaskRouter extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createTaskSchema),TaskController.create);
    this.router.patch("/:id",TaskController.update);
    this.router.delete("/:id", TaskController.delete);
    this.router.get("", TaskController.findAll);
    this.router.get("/:id", TaskController.findById);
  }
}

export default new TaskRouter().router