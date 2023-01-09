// 1. Crie uma ProductInterface, que possua as seguintes propriedades:
// - id (number e readonly)
// - name (string)
// - price (number)
// - getFormattedPrice, método que retorne uma string contendo o price formatado (R$100, por exemplo))

interface ProductInterface {
  readonly id: number
  name: string
  price: number
  getFormattedPrice(): string
}

// 2. Crie uma classe chamada Product, que implemente a ProductInterface criada no exercício anterior

class Product implements ProductInterface {
  id: number
  name: string
  price: number
  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }
  getFormattedPrice(): string {
    return `R$${this.price}`
  }
}
const product = new Product(1, 'MacBook', 999)
console.log(product.getFormattedPrice())

// 3. Crie uma classe chamada Tshirt, que estenda a Product e que possua as seguintes propriedades:
// - size (number private)
// - color (string private)

class Tshirt extends Product {
  private size: number
  private color: string
  constructor(
    id: number,
    name: string,
    price: number,
    size: number,
    color: string
  ) {
    super(id, name, price)

    this.size = size
    this.color = color
  }
}

const tshirt = new Tshirt(1, 'camisa', 100, 40, 'black')
console.log(tshirt)
