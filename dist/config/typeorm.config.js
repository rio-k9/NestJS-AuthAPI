"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'logitech',
    database: 'nestjs',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map