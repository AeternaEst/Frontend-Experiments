
type quality = "premium" | "standard" | "reused";

interface Product {
  name: string;
  price: number;
  description: string;
  status: "available" | "unavailable";
  quality: quality;
}

class ProductController {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  createProduct(name: string, price: number, description: string, quality: quality): void {
    const newProduct: Product = {
      name,
      price,
      description,
      status: "available",
      quality
    }

    this.products.push(newProduct);
  }

  getProductProperty<T extends keyof Product>(name: string, property: T): Product[T] | undefined {
    const product = this.products.find(p => p.name === name);
    if(product) {
      return product[property];
    }

    return undefined;
  }
}

const indexedAccessTypes = (): void => {
  const controller = new ProductController();
  controller.createProduct("Shoe", 500, "Amazing shoes at low cost", "standard");
  controller.createProduct("T-shirt", 250, "Low quality t-shirt", "reused");
  controller.createProduct("Macbook", 10000, "Pay more for less", "premium");

  const description = controller.getProductProperty("Macbook", "description");
  console.log(description);
}

export default indexedAccessTypes;

