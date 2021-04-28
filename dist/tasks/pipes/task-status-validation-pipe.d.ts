import { PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.enum';
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: TaskStatus[];
    transform(value: string): string;
    private isStatusValid;
}
