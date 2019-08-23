export default class Pizza {
  constructor(data) {
    //console.log("p")
    this.name = data.name
    this.toppings = data.toppings
  }

  get Template() {
    return `
      <div class="col-4">
        <h1>${this.name}</h1>
      </div>
    `
  }
}