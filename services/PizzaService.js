import Pizza from "../model/Pizza.js";

let _state = {
  pizzas: []
}

export default class PizzaService {
  constructor() {
    //console.log("ps")
  }

  createPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza))
  }

  addToppings(newTopping, index) {
    _state.pizzas[index].toppings.push(newTopping)
  }

  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }
}