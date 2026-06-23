"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const adapters_1 = require("../adapters");
let CarService = class CarService {
    _cars = [
        {
            uuid: 'b749f1ee-1f07-418c-8928-5d4b331eac17',
            brand: 'Chevrolet',
            model: 'Camaro',
        },
        {
            uuid: adapters_1.UuidAdapter.getANewUUID(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            uuid: adapters_1.UuidAdapter.getANewUUID(),
            brand: 'Suzuki',
            model: 'Jimmy',
        },
    ];
    get cars() {
        return this._cars;
    }
    findAll() {
        return this._cars;
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)()
], CarService);
//# sourceMappingURL=cars.service.js.map