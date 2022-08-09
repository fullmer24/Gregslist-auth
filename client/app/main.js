import { AuthController } from './Controllers/AuthController.js'
import { CarsController } from './Controllers/CarsController.js';
import { HousesController } from './Controllers/HouseController.js';

class App {
  authController = new AuthController();
  carsController = new CarsController();
  housesController = new HousesController();
}

// @ts-ignore
window.app = new App()
