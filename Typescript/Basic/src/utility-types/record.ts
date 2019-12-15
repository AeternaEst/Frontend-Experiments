
/**
 * Record emulates Maps, but is a plain object behind the scenes
 * Use record when you need key/value pairs
 */
interface Product {
  id: string;
  price: number;
}

const runRecord = (): void => {
  const record: Record<string, number> = {
    "a": 1,
    "b": 2,
    "c": 3
  }
  const map = new Map<string, number>([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ])

  const recordA = record.a;
  console.log("record a ", recordA);
  const mapA = map.get("a");
  console.log("map a ", mapA);

  const products: Product[] = [
    {
      id: "product1",
      price: 10000
    },
    {
      id: "product2",
      price: 500
    },
    {
      id: "product3",
      price: 100
    },
  ];

  const carts: Record<string, Product[]> = {
    "cart1": products,
    "cart2": [products[0]]
  }

  const secondCart = carts.cart2
  console.log(secondCart);
}

export default runRecord;