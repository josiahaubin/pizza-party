export default class Pizza {
  constructor(data) {
    //console.log("p")
    this.name = data.name
    this.toppings = data.toppings || []
  }

  getTemplate(index) {
    let template = `
      <div class="col-4">
        <h1>${this.name}</h1>
        <ul> `
    template += this.drawToppings(index)
    template += `
    </ul>
      <form onsubmit="app.controllers.pizzaController.addToppings(event, ${index})">
        <div class="form-group">
          <label for="toppings">Toppings</label>
          <input type="text" class="form-control" id="toppings" placeholder="Enter topping" required>
        </div>
        <button type="submit">+</button>
        </form>
        <button type="button" onclick="app.controllers.pizzaController.deletePizza(${index})">X</button>
      </div>
    `
    return template
  }

  drawToppings(index) {
    let toppingTemplate = ``

    this.toppings.forEach((t, topIndex) => {
      toppingTemplate += `<li> ${t} <span onclick="app.controllers.pizzaController.deleteTopping(${index}, ${topIndex})">X</span></li>`
    });

    return toppingTemplate
  }
}