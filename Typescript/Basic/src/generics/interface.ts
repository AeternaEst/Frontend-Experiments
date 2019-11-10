
interface Customer {
  id: string;
  name: string;
  age: number;
}

interface Repository<T, TID> {
  get: (id: TID) => T | undefined;
  getAll: () => T[];
  add: (customer: T) => void;
  remove: (id: TID) => T | undefined;
}

class CustomerRepository implements Repository<Customer, string> {
  private customers: Customer[];
  
  constructor() {
    this.customers = [
      {
        id: "ID1",
        name: "Generic Customer 1",
        age: 30
      },
      {
        id: "ID2",
        name: "Generic Customer 2",
        age: 40
      },
      {
        id: "ID3",
        name: "Generic Customer 3",
        age: 50
      }
    ]
  }

  get(id: string): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  getAll(): Customer[] {
    return this.customers;
  }

  add(customer: Customer): void {
    this.customers.push(customer);
  }

  remove(id: string): Customer | undefined {
    const customer = this.customers.find(customer => customer.id === id);
    const index = customer && this.customers.indexOf(customer);
    if(index) {
      const updatedCustomers = [...this.customers.slice(0, index), ...this.customers.slice(index + 1)];
      this.customers = updatedCustomers;
      return customer;
    }

    return undefined;
  }
}

function genericInterface(): void {
  const customerRepo = new CustomerRepository();
  const newCustomer: Customer = {
    id: "ID4",
    name: "Generic Customer 4",
    age: 60
  }

  customerRepo.add(newCustomer);

  const customer = customerRepo.get("ID4");
  if(customer) {
    console.log("Found Customer: ", customer.id);
  }

  const removedCustomer = customerRepo.remove("ID2");
  if(removedCustomer) {
    console.log("Removed Customer: ", removedCustomer.id)
  }

  const allCustomers = customerRepo.getAll();
  allCustomers.forEach(customer => console.log("Existing customer: ", customer.id));7
}

export default genericInterface;