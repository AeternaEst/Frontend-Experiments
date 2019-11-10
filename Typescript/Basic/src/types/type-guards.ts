interface Monster {
  name: string;
  hitpoints: number;
  damage: number;
  attack: () => void;
}

class Orc implements Monster {
  constructor(public name: string, public hitpoints: number, public damage: number) {}

  attack(): void {
    console.log(`${this.name} attacks for ${this.damage}`);
  }
}

class Dragon implements Monster {
  constructor(public name: string, public hitpoints: number, public damage: number) {}

  attack(): void {
    console.log(`${this.name} attacks for ${this.damage}`);
  }

  breatheFire(): void {
    console.log(`${this.name} does a fire breath attack`);
  }
}

function isDragon(monster: Monster): monster is Dragon {
  return (monster as Dragon).breatheFire !== undefined; 
}

class MonsterController {
  private monsters: Monster[];

  constructor() {
    this.monsters = [];
  }

  addMonster(monster: Monster): void {
    this.monsters.push(monster);
  }

  monsterAttacks(): void {
    this.monsters.forEach(monster => {
      monster.attack();

      if(isDragon(monster)) {
        monster.breatheFire();
      }
    });
  }
}

function typeGuards(): void {
  const orc = new Orc("Orc", 10, 3);
  const dragon = new Dragon("Dragon", 100, 15);

  const controller = new MonsterController();
  controller.addMonster(orc);
  controller.addMonster(dragon);

  controller.monsterAttacks();
}

export default typeGuards;

