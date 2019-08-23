import Pizza from "../model/Pizza.js";

let _state = {
  pizzas: []
}

export default class PizzaService {
  createPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza))
  }
  constructor() {
    //console.log("ps")
  }

  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }
}