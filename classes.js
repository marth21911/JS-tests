class Sundae{
    constructor(flavor, numScoops, sauce, toppings, whipped, container){
        this.flavor = flavor;
        this.numScoops = numScoops;
        this.sauce= sauce;
        this.toppings = toppings;
        this.whipped = whipped;
        this.container = container;
    }
}
const tinRoof = new Sundae("Vanilla", 2, "chocolate syrup", ["peanuts", "rainbowsprinkles"], true, "tall sundae glass");
console.log(tinRoof);
const clevlandBrownie = new Sundae("vanilla", 1, "hot fudge", ["pecans","sprinks", "brownie"], false, "small sugar cone");
console.log(clevlandBrownie)