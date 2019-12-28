var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function logProps(obj) {
        Object.keys(obj).forEach(function (key) {
            if (typeof obj[key] !== 'function') {
                console.log("Key: " + key + ", Value: " + obj[key]);
            }
        });
    }
    exports.logProps = logProps;
    function getIndentString(indent) {
        if (indent === void 0) { indent = 0; }
        var indentString = "";
        for (var i = 0; i < indent; i++) {
            indentString += " ";
        }
        return indentString;
    }
    function logPropsDeep(obj, indent) {
        if (indent === void 0) { indent = 0; }
        var indention = getIndentString(indent);
        for (var key in obj) {
            var value = obj[key];
            if (typeof value !== 'function') {
                if (typeof value === 'object') {
                    console.log(indention + "Key: " + key);
                    logPropsDeep(value, indent + 4);
                }
                else {
                    console.log(indention + "Key: " + key + ", Value: " + value);
                }
            }
        }
    }
    exports.logPropsDeep = logPropsDeep;
});
define("types/assertion", ["require", "exports", "utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vehicle = /** @class */ (function () {
        function Vehicle(type, speed) {
            this.type = type;
            this.speed = speed;
            this.printStats = this.printStats.bind(this);
        }
        Vehicle.prototype.printStats = function () {
            utils_1.logProps(this);
        };
        return Vehicle;
    }());
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(type, speed, model) {
            var _this = _super.call(this, type, speed) || this;
            _this.model = model;
            _this.printStats = _this.printStats.bind(_this);
            return _this;
        }
        Car.prototype.printStats = function () {
            utils_1.logProps(this);
        };
        return Car;
    }(Vehicle));
    var Bicycle = /** @class */ (function (_super) {
        __extends(Bicycle, _super);
        function Bicycle(type, speed, numOfGears) {
            var _this = _super.call(this, type, speed) || this;
            _this.numOfGears = numOfGears;
            _this.printStats = _this.printStats.bind(_this);
            return _this;
        }
        Bicycle.prototype.printStats = function () {
            utils_1.logProps(this);
        };
        return Bicycle;
    }(Vehicle));
    function assertion() {
        var car = new Car("Car", 150, "VW UP");
        var customCar = {
            type: "Car",
            speed: 150,
            model: "Ford Fiesta",
            printStats: function () { return console.log("custom car"); }
        };
        var bicycle = new Bicycle("Bicycle", 40, 7);
        var vehicle = new Vehicle("Boat", 300);
        if (car instanceof Car) { //true
            car.printStats();
        }
        if (customCar instanceof Car) { //false
            customCar.printStats();
        }
        if (bicycle instanceof Vehicle) { //true
            bicycle.printStats();
        }
        if ("speed" in customCar) { //true
            customCar.printStats();
        }
        if ("numOfGears" in vehicle) { //false
            console.log("This should not happen");
        }
    }
    exports.default = assertion;
});
define("app", ["require", "exports", "types/assertion"], function (require, exports, assertion_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    assertion_1.default();
});
define("access-types/indexed-access-type-keyof", ["require", "exports", "utils"], function (require, exports, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Repository = /** @class */ (function () {
        function Repository(entities) {
            this.entities = entities;
        }
        Repository.prototype.filterByKey = function (filterKey, filterValue) {
            return this.entities.filter(function (entity) { return entity[filterKey] === filterValue; });
        };
        Repository.prototype.filterByEntity = function (fn) {
            return this.entities.filter(fn);
        };
        return Repository;
    }());
    var run = function () {
        var profiles = [
            {
                name: "Nicholas",
                hasPremiumAccess: false,
                premiumPointsEarned: 20
            },
            {
                name: "Andreja",
                hasPremiumAccess: true,
                premiumPointsEarned: 100
            },
            {
                name: "Spartacus",
                hasPremiumAccess: true,
                premiumPointsEarned: 58
            }
        ];
        var repo = new Repository(profiles);
        var premiumProfiles = repo.filterByKey("hasPremiumAccess", true);
        premiumProfiles.forEach(function (userProfile) { return utils_2.logProps(userProfile); });
        var profilesBelowFifty = repo.filterByEntity(function (entity) { return entity.premiumPointsEarned < 50; });
        profilesBelowFifty.forEach(function (userProfile) { return utils_2.logProps(userProfile); });
    };
    exports.default = run;
});
define("access-types/indexed-access-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProductController = /** @class */ (function () {
        function ProductController() {
            this.products = [];
        }
        ProductController.prototype.createProduct = function (name, price, description, quality) {
            var newProduct = {
                name: name,
                price: price,
                description: description,
                status: "available",
                quality: quality
            };
            this.products.push(newProduct);
        };
        ProductController.prototype.getProductProperty = function (name, property) {
            var product = this.products.find(function (p) { return p.name === name; });
            if (product) {
                return product[property];
            }
            return undefined;
        };
        return ProductController;
    }());
    var indexedAccessTypes = function () {
        var controller = new ProductController();
        controller.createProduct("Shoe", 500, "Amazing shoes at low cost", "standard");
        controller.createProduct("T-shirt", 250, "Low quality t-shirt", "reused");
        controller.createProduct("Macbook", 10000, "Pay more for less", "premium");
        var description = controller.getProductProperty("Macbook", "description");
        console.log(description);
    };
    exports.default = indexedAccessTypes;
});
define("classes/automap", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Automap = /** @class */ (function () {
        function Automap(name, list) {
            this.name = name;
            this.list = list;
        }
        Automap.prototype.print = function () {
            console.log(this.name);
            this.list.forEach(function (element) {
                console.log(element);
            });
        };
        return Automap;
    }());
    function automap() {
        var automap = new Automap("Deus Vult", ["Crusades", "Jerusalem"]);
        automap.print();
    }
    exports.default = automap;
});
/**
 * Setting the strictFunctionTypes flag removes the possibility that
 * a wrong sub/super type could be passed in as a parameter.
 */
define("compiler-flags/strict-function-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* Dissallowed with strictFunctionTypes. Must change request to MyRequest */
    var myHandler = function (request) {
        request.extraArg.toUpperCase();
        return null;
    };
    var dogFn = function (dog) {
        dog.run();
    };
    var runStrictFunctionTypes = function () {
        var r = {
            url: "www.google.com"
        };
        /* This causes an error with strictFunctionTypes */
        myHandler(r);
        var animal = {
            race: "Zebra"
        };
        /* This causes an error with strictFunctionTypes */
        dogFn(animal);
    };
    exports.default = runStrictFunctionTypes;
});
define("generics/constraints", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Human = /** @class */ (function () {
        function Human(name) {
            this.name = name;
        }
        return Human;
    }());
    var Lion = /** @class */ (function () {
        function Lion(race) {
            this.race = race;
        }
        Lion.prototype.attack = function () {
            console.log(this.race + " does a claw attack");
        };
        return Lion;
    }());
    var Rhino = /** @class */ (function () {
        function Rhino(race) {
            this.race = race;
        }
        Rhino.prototype.attack = function () {
            console.log(this.race + " does a impale attack");
        };
        return Rhino;
    }());
    var AnimalHabitat = /** @class */ (function () {
        function AnimalHabitat() {
            this.animals = [];
        }
        AnimalHabitat.prototype.addAnimal = function (animal) {
            this.animals.push(animal);
        };
        AnimalHabitat.prototype.animalAttacks = function () {
            this.animals.forEach(function (animal) { return animal.attack(); });
        };
        return AnimalHabitat;
    }());
    function constraints() {
        var lion = new Lion("lion");
        var rhino = new Rhino("rhino");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var human = new Human("Spartacus");
        var animalHabitat = new AnimalHabitat();
        animalHabitat.addAnimal(lion);
        animalHabitat.addAnimal(rhino);
        // Can't add human
        // animalHabitat.addAnimal(human);
        animalHabitat.animalAttacks();
    }
    exports.default = constraints;
});
define("generics/interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomerRepository = /** @class */ (function () {
        function CustomerRepository() {
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
            ];
        }
        CustomerRepository.prototype.get = function (id) {
            return this.customers.find(function (customer) { return customer.id === id; });
        };
        CustomerRepository.prototype.getAll = function () {
            return this.customers;
        };
        CustomerRepository.prototype.add = function (customer) {
            this.customers.push(customer);
        };
        CustomerRepository.prototype.remove = function (id) {
            var customer = this.customers.find(function (customer) { return customer.id === id; });
            var index = customer && this.customers.indexOf(customer);
            if (index) {
                var updatedCustomers = __spreadArrays(this.customers.slice(0, index), this.customers.slice(index + 1));
                this.customers = updatedCustomers;
                return customer;
            }
            return undefined;
        };
        return CustomerRepository;
    }());
    function genericInterface() {
        var customerRepo = new CustomerRepository();
        var newCustomer = {
            id: "ID4",
            name: "Generic Customer 4",
            age: 60
        };
        customerRepo.add(newCustomer);
        var customer = customerRepo.get("ID4");
        if (customer) {
            console.log("Found Customer: ", customer.id);
        }
        var removedCustomer = customerRepo.remove("ID2");
        if (removedCustomer) {
            console.log("Removed Customer: ", removedCustomer.id);
        }
        var allCustomers = customerRepo.getAll();
        allCustomers.forEach(function (customer) { return console.log("Existing customer: ", customer.id); });
        7;
    }
    exports.default = genericInterface;
});
define("generics/type-guards", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bank = /** @class */ (function () {
        function Bank(name, amountOfMoney) {
            this.name = name;
            this.amountOfMoney = amountOfMoney;
        }
        return Bank;
    }());
    var University = /** @class */ (function () {
        function University(name, address) {
            this.name = name;
            this.address = address;
        }
        return University;
    }());
    function isOfType(type, property) {
        return type[property] !== undefined;
    }
    exports.isOfType = isOfType;
    exports.ofType = function (type, property) { return type[property] !== undefined; };
    function genericTypeGuard() {
        var bank = new Bank("Danske Bank", 10000000);
        var university = new University("CBS", "Bredgade 18");
        if (isOfType(bank, "amountOfMoney")) {
            console.log(bank.name + " owns " + bank.amountOfMoney + " amount of money");
        }
        if (exports.ofType(university, "address")) {
            console.log(university.name + " are located on " + university.address);
        }
    }
    exports.default = genericTypeGuard;
});
/**
 * The 'declare' keyword is used when importing libraries that does not have
 * type declarations but you want to use them without typescript errors.
 * NOTE: $clamp is added in the webpack config as a global dependency
 */
define("keywords/declare", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runDeclare = function () {
        var targetDiv = document.getElementById("truncate");
        console.log(targetDiv);
        console.log($clamp);
        $clamp(targetDiv, { clamp: 2 });
    };
    exports.default = runDeclare;
});
define("mixins/mixins", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Base function for implementing the mixin pattern
     * @param derivedCtor This is your subclass implementing the base classes
     * @param baseCtors This is an array of your base classes with the properties you cant to transfer
     */
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    }
    var Print = /** @class */ (function () {
        function Print() {
        }
        Print.prototype.print = function () {
            console.log("printing...");
        };
        return Print;
    }());
    var Copy = /** @class */ (function () {
        function Copy() {
        }
        Copy.prototype.copy = function () {
            console.log("copying...");
        };
        return Copy;
    }());
    var Scan = /** @class */ (function () {
        function Scan() {
        }
        Scan.prototype.scan = function () {
            console.log("scanning...");
        };
        return Scan;
    }());
    var SuperPrinter = /** @class */ (function () {
        function SuperPrinter() {
        }
        return SuperPrinter;
    }());
    var BasicPrinter = /** @class */ (function () {
        function BasicPrinter() {
        }
        return BasicPrinter;
    }());
    function mixins() {
        applyMixins(SuperPrinter, [Print, Copy, Scan]);
        applyMixins(BasicPrinter, [Print]);
        var superPrinter = new SuperPrinter();
        var basicPrinter = new BasicPrinter();
        superPrinter.copy();
        superPrinter.scan();
        superPrinter.print();
        basicPrinter.print();
    }
    exports.default = mixins;
});
define("native-extensions/html-collection-extensions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HTMLCollection.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this.item(i));
        }
    };
    function runExtension() {
        var elements = document.getElementsByTagName("body");
        elements.forEach(function (element) { return console.log(element); });
    }
    exports.default = runExtension;
});
define("native-extensions/mouse-event-extensions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MouseEvent.prototype.logCordinates = function () {
        console.log("Clicked Cordinates: x: " + this.x + ", y: " + this.y);
    };
    var runExtension = function () {
        var body = document.body;
        body.addEventListener("click", function (e) { return e.logCordinates(); });
    };
    exports.default = runExtension;
});
define("native-extensions/string-extensions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * See index.d.ts in the folder root  for the definition.
     * Typescript will throw an error without the type definition file
     */
    String.prototype.toLower = function () {
        return this.toLowerCase();
    };
    function runExtension() {
        var convertedString = "Hello World".toLower();
        console.log(convertedString);
    }
    exports.default = runExtension;
});
define("type-declarations/typeDeclarations", ["require", "exports", "classnames"], function (require, exports, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function useTypeDeclarations() {
        var addCustomClass = true;
        var numbers = [1, 2, 3, 4];
        var classes = classnames_1.default("hello-world", {
            "custom": addCustomClass,
            "number": numbers.length > 5
        });
        console.log(classes);
    }
    exports.default = useTypeDeclarations;
});
define("types/casting", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dog = {
        name: "Skippy",
        age: 10,
        printFavoriteFood: function () { return console.log("Doggy bone"); },
    };
    var cat = {
        name: "Kitty",
        printFavoriteFood: function () { return console.log("Tuna"); }
    };
    function animals() {
        var anotherDog = cat;
        var anotherCat = dog;
        anotherDog.printFavoriteFood();
        anotherCat.printFavoriteFood();
    }
    exports.default = animals;
});
define("types/intersection-and-unions", ["require", "exports", "generics/type-guards"], function (require, exports, type_guards_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Loggable = /** @class */ (function () {
        function Loggable(instanceId) {
            this.instanceId = instanceId;
        }
        Loggable.prototype.print = function () {
            for (var key in this) {
                var value = this[key];
                if (typeof (value) !== "function") {
                    console.log(value);
                }
            }
        };
        return Loggable;
    }());
    function union(param) {
        if (type_guards_1.isOfType(param, "job")) {
            console.log("My name is " + param.name + ", i am " + param.age + " years old and i work as a " + param.job);
        }
        if (param instanceof (Loggable)) {
            param.print();
        }
    }
    function returnIntersection(human, loggable) {
        var intersectionType = __assign(__assign(__assign({}, human), loggable), { print: loggable.print });
        return intersectionType;
    }
    var receiveIntersection = function (combined) {
        console.log("Combined object: ");
        console.log("My name is " + combined.name + ", i am " + combined.age + " years old and i work as a " + combined.job);
        combined.print();
    };
    function run() {
        var human = {
            name: "Spartacus",
            age: 35,
            job: "gladiator"
        };
        var loggable = new Loggable("instance197456");
        union(human);
        union(loggable);
        var combined = returnIntersection(human, loggable);
        receiveIntersection(combined);
    }
    exports.default = run;
});
define("types/type-guards", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Orc = /** @class */ (function () {
        function Orc(name, hitpoints, damage) {
            this.name = name;
            this.hitpoints = hitpoints;
            this.damage = damage;
        }
        Orc.prototype.attack = function () {
            console.log(this.name + " attacks for " + this.damage);
        };
        return Orc;
    }());
    var Dragon = /** @class */ (function () {
        function Dragon(name, hitpoints, damage) {
            this.name = name;
            this.hitpoints = hitpoints;
            this.damage = damage;
        }
        Dragon.prototype.attack = function () {
            console.log(this.name + " attacks for " + this.damage);
        };
        Dragon.prototype.breatheFire = function () {
            console.log(this.name + " does a fire breath attack");
        };
        return Dragon;
    }());
    function isDragon(monster) {
        return monster.breatheFire !== undefined;
    }
    var MonsterController = /** @class */ (function () {
        function MonsterController() {
            this.monsters = [];
        }
        MonsterController.prototype.addMonster = function (monster) {
            this.monsters.push(monster);
        };
        MonsterController.prototype.monsterAttacks = function () {
            this.monsters.forEach(function (monster) {
                monster.attack();
                if (isDragon(monster)) {
                    monster.breatheFire();
                }
            });
        };
        return MonsterController;
    }());
    function typeGuards() {
        var orc = new Orc("Orc", 10, 3);
        var dragon = new Dragon("Dragon", 100, 15);
        var controller = new MonsterController();
        controller.addMonster(orc);
        controller.addMonster(dragon);
        controller.monsterAttacks();
    }
    exports.default = typeGuards;
});
define("types/typing-checking", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var log = function (person) { return console.log(person.name); };
    function typeChecking() {
        var person = { name: "Gannicus" };
        var animal = { name: "Simba" };
        var building = { name: "White House", size: 10 };
        var custom = {
            name: "Custom",
            doSomething: function () {
                console.log(this.name);
            }
        };
        log(person);
        log(animal);
        log(building);
        log(custom);
    }
    exports.default = typeChecking;
});
/**
 * Removes the union type between T and U. The properties not in the union are left.
 * This create a string union type
 */
define("utility-types/exclude", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runExclude = function () {
        var name = "name";
        var onlyThree = 3;
        var age = "age";
        var personWithoutJob = {
            name: "Johnny",
            age: 25
        };
        console.log(name);
        console.log(onlyThree);
        console.log(age);
        console.log(personWithoutJob.name + " is " + personWithoutJob.age + " and dosen't have a job");
    };
    exports.default = runExclude;
});
/**
 * Extracts a property as a string. This is not the same as Pick,
 * since this only return properties as strings
 */
define("utility-types/extract", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runExtract = function () {
        var vehicle = "car";
        var vehicleType = "type";
        console.log(vehicle);
        console.log(vehicleType);
    };
    exports.default = runExtract;
});
/**
 * Removes undefined and null from a type
 */
define("utility-types/non-nullable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runNonNullable = function () {
        var phone = {
            model: "IPhone X",
            isSmartPhone: true
        };
        var nonNullablePhone = {
            model: "Samsung Galaxy 7",
            isSmartPhone: true
        };
        //phone = undefined;
        /* This should not be possible */
        //nonNullablePhone = null;
        console.log(phone);
        console.log(nonNullablePhone);
    };
    exports.default = runNonNullable;
});
/**
 * Parameters returns a tuple of the parameters of a function.
 * A common use case it to copy parameters from a similar function
 */
define("utility-types/parameters-and-constructor-parameters", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dog = /** @class */ (function () {
        function Dog(name, age) {
            this.name = name;
            this.age = age;
        }
        return Dog;
    }());
    function createDog() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return new Dog(params[0], params[1]);
    }
    function createDogAsync() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(createDog.apply(void 0, params));
            }, 1000);
        });
    }
    function logDog() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log("The dog's name is " + params[0] + " and it is " + params[1] + " years old");
    }
    var runParameters = function () {
        var lassie = createDog("Lassie", 10);
        createDogAsync("King", 7).then(function (result) {
            logDog(result.name, result.age);
            logDog(lassie.name, lassie.age);
        });
    };
    exports.default = runParameters;
});
define("utility-types/partial-and-required", ["require", "exports", "utils"], function (require, exports, utils_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserRepository = /** @class */ (function () {
        function UserRepository() {
            this.users = [];
        }
        UserRepository.prototype.addUser = function (user) {
            this.users.push(user);
        };
        UserRepository.prototype.updateUser = function (user) {
            if ("id" in user) {
                var locatedUser = this.users.find(function (u) { return u.id === user.id; });
                if (locatedUser) {
                    locatedUser.name = user.name || locatedUser.name;
                    locatedUser.lastLogin = user.lastLogin || locatedUser.lastLogin;
                }
            }
            return undefined;
        };
        UserRepository.prototype.logRepository = function () {
            this.users.forEach(function (user) { return utils_3.logProps(user); });
        };
        return UserRepository;
    }());
    function runPartial() {
        var repository = new UserRepository();
        repository.addUser({ id: 1, name: "Dean Winchester", lastLogin: new Date() });
        repository.addUser({ id: 2, name: "Sam Winchester", lastLogin: new Date() });
        repository.addUser({ id: 3, name: "Castiel", lastLogin: new Date() });
        repository.updateUser({ id: 1, name: "Dean Winchester Modified" });
        repository.updateUser({ id: 2 });
        repository.updateUser({ id: 3, lastLogin: new Date(2018, 1, 1) });
        repository.logRepository();
    }
    exports.default = runPartial;
});
define("utility-types/pick-and-omit", ["require", "exports", "utils"], function (require, exports, utils_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runPick = function () {
        var simpleAccount = {
            balance: {
                withDecimals: 20.00,
                plainNumber: 20,
                formatted: "20.0 DKK"
            },
            iBan: "DK123456789"
        };
        var accountSettings = {
            allowOverdraft: true,
            isActive: false
        };
        utils_4.logPropsDeep(simpleAccount);
        utils_4.logProps(accountSettings);
    };
    exports.default = runPick;
});
/**
 * Returns a type that can no longer be modified
 */
define("utility-types/readonly", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createReadonlyAnimal(animal) {
        return animal;
    }
    function runReadonly() {
        var lion = {
            species: "lion",
            name: "Leo"
        };
        lion.name = "Louis";
        console.log(lion.name);
        var readonlyLion = createReadonlyAnimal(lion);
        //No longer allowed to update variables
        // readonlyLion.name = "Updated";
        console.log(readonlyLion.name);
    }
    exports.default = runReadonly;
});
define("utility-types/record", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runRecord = function () {
        var record = {
            "a": 1,
            "b": 2,
            "c": 3
        };
        var map = new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3]
        ]);
        var recordA = record.a;
        console.log("record a ", recordA);
        var mapA = map.get("a");
        console.log("map a ", mapA);
        var products = [
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
        var carts = {
            "cart1": products,
            "cart2": [products[0]]
        };
        var secondCart = carts.cart2;
        console.log(secondCart);
    };
    exports.default = runRecord;
});
/**
 * ReturnType is used to extract the return type from a function
 * InstanceType is used to extract the type created by a constructor function
 */
define("utility-types/return-and-instance-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Building = /** @class */ (function () {
        function Building(squareFeet) {
            this.squareFeet = squareFeet;
        }
        return Building;
    }());
    function findLargestBuilding(buildings) {
        var copy = __spreadArrays(buildings);
        return copy.sort(function (first, second) { return first.squareFeet < second.squareFeet ? -1 : 1; })[buildings.length - 1];
    }
    function logBuilding(building) {
        console.log("The building is " + building.squareFeet + " square feet");
    }
    var runReturnAndInstanceType = function () {
        var buildings = [
            {
                squareFeet: 10
            },
            {
                squareFeet: 50
            },
            {
                squareFeet: 100
            }
        ];
        var largestBuilding = findLargestBuilding(buildings);
        logBuilding(largestBuilding);
        var house = {
            squareFeet: 90,
            address: "Secret Adress 40x"
        };
        logBuilding(house);
        console.log("The address is " + house.address);
    };
    exports.default = runReturnAndInstanceType;
});
//# sourceMappingURL=typescript.js.map