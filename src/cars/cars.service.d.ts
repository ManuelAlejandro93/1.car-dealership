import { SingleCarInterface } from '../interfaces';
export declare class CarService {
    private readonly _cars;
    get cars(): SingleCarInterface[];
    findAll(): SingleCarInterface[];
}
