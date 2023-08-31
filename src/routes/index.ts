import {Router} from 'express'
import {getTasks, getTaskbyId, createTask, updateStatus, deleteTask} from '../controllers/index.controller'
const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskbyId);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateStatus);
router.delete('/tasks/:id', deleteTask);
export default router;