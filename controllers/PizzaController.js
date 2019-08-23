import PizzaService from "../services/PizzaService.js";

let _pizzaService = new PizzaService()

function _draw() {
  let template = ``
  let pizza = _pizzaService.Pizza

  pizza.forEach((p, index) =>
    template += p.getTemplate(index)
  )

  document.getElementById('pizza').innerHTML = template
}

export default class PizzaController {
  constructor() {
    //console.log("pc")
  }

  createPizza(event) {
    event.preventDefault()

    let form = event.target

    let newPizza = {
      name: form.name.value
    }

    _pizzaService.createPizza(newPizza)
    _draw()
  }

  addToppings(event, index) {
    event.preventDefault()

    let form = event.target

    let newTopping = form.toppings.value

    _pizzaService.addToppings(newTopping, index)
    _draw()
  }
}