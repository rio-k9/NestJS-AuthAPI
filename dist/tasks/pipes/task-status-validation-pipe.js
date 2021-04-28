"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_enum_1 = require("../task.enum");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            task_enum_1.TaskStatus.OPEN,
            task_enum_1.TaskStatus.IN_PROGRESS,
            task_enum_1.TaskStatus.DONE,
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        return this.allowedStatuses.includes(status);
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation-pipe.js.map