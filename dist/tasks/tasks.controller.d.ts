import { TasksService } from './tasks.service';
import { TaskStatus } from './task.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: number, user: User): Promise<Task>;
    deleteTask(id: number, user: User): Promise<void>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
}
