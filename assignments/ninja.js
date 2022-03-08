class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        }
    showStats() {
        console.log(this.name,this.health,this.speed,this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log ("You're underage Guinevere!");
    }
}
const guin = new Ninja("Guinevere",100);
class Sensei extends Ninja{
    constructor(name){
        super(name, 200,10,10)
        this.wisdom = 10
    }
    speakWisdom() {
        this.drinkSake, console.log("A turd in your pants is worth 3 in the pot.")
    }
}
const zoe = new Sensei("Zoe");
zoe.speakWisdom();
console.log(guin)
guin.sayName();
guin.showStats();
guin.drinkSake();
guin.showStats();
guin.drinkSake();
guin.drinkSake();
guin.drinkSake();
guin.drinkSake();
guin.showStats();