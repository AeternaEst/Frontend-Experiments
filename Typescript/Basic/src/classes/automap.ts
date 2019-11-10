
class Automap {
  constructor(private name: string, private list: string[]) {}

  print(): void {
    console.log(this.name);
    this.list.forEach(element => {
      console.log(element);
    });
  }
}

function automap(): void {
  const automap = new Automap("Deus Vult", ["Crusades", "Jerusalem"]);

  automap.print();
}

export default automap;