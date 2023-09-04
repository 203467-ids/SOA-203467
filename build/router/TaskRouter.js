"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const TaskController_1 = __importDefault(require("../controller/TaskController"));
const validate_1 = __importDefault(require("../helper/validate"));
const TaskSchema_1 = require("../schema/TaskSchema");
class TaskRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(TaskSchema_1.createTaskSchema), TaskController_1.default.create);
        this.router.patch("/:id", TaskController_1.default.update);
        this.router.delete("/:id", TaskController_1.default.delete);
        this.router.get("", TaskController_1.default.findAll);
        this.router.get("/:id", TaskController_1.default.findById);
    }
}
exports.default = new TaskRouter().router;
