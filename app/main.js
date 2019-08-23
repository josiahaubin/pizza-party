import PizzaController from "../controllers/PizzaController.js";


class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController()
    }
  }
}

window["app"] = new App()