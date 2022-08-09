import { AuthController } from './Controllers/AuthController.js'
import { CarsController } from './Controllers/CarsController.js';

class App {
  authController = new AuthController();
  carsController = new CarsController()
}

// @ts-ignore
window.app = new App()
