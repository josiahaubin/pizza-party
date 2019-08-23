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

  deleteTopping(index, topIndex) {
    _state.pizzas[index].toppings.splice(topIndex, 1)
  }

  deletePizza(index) {
    _state.pizzas.splice(index, 1)
  }

  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }
}