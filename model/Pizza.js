export default class Pizza {
  constructor(data) {
    //console.log("p")
    this.name = data.name
    this.toppings = data.toppings
  }

  getTemplate(index) {
    let template = `
      <div class="col-4">
        <h1>${this.name}</h1>
      <form onsubmit="app.controllers.pizzaController.addToppings(event, ${index})">
        <div class="form-group">
          <label for="toppings">Toppings</label>
          <input type="text" class="form-control" id="toppings" placeholder="Enter topping">
        </div>
      </form>
      </div>
    `

    return template
  }
}