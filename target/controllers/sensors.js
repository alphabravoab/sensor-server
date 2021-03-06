"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const sensor_1 = require("../entities/sensor");
let SensorController = class SensorController {
    async giveValue(body) {
        console.log(body);
        const entity = sensor_1.default.create(body);
        await entity;
        const sensor = await entity.save();
        return sensor;
    }
    getSingleValue(id) {
        return sensor_1.default.findOneById(id);
    }
    allEvents() {
        return sensor_1.default.find();
    }
    remove(id) {
        return sensor_1.default.removeById(id);
    }
};
__decorate([
    routing_controllers_1.Post('/sensors'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_1.default]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "giveValue", null);
__decorate([
    routing_controllers_1.Get('/sensors/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SensorController.prototype, "getSingleValue", null);
__decorate([
    routing_controllers_1.Get('/sensors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SensorController.prototype, "allEvents", null);
__decorate([
    routing_controllers_1.Delete('/sensors/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SensorController.prototype, "remove", null);
SensorController = __decorate([
    routing_controllers_1.JsonController()
], SensorController);
exports.default = SensorController;
//# sourceMappingURL=sensors.js.map