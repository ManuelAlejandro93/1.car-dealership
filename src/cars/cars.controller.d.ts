import { CarService } from './cars.service';
import type { SingleCarInterface } from '../interfaces';
import { CreateCarDTO } from './dto';
export declare class CarsController {
    private readonly carService;
    constructor(carService: CarService);
    getAllCars(): SingleCarInterface[];
    findOneById(incoming_uuid: string): SingleCarInterface;
    createCar(createCarDTO: CreateCarDTO): CreateCarDTO;
    updateCar(carId: number): {
        status: string;
        carId: number;
    };
    replaceFullCar(carId: number): {
        status: string;
        carId: number;
    };
    deleteCar(carId: number): {
        status: string;
        carId: number;
    };
}
