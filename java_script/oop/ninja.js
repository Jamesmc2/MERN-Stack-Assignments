class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log('This ninjas name is '+this.name)
    }

    showStats() {
        console.log('Name: '+this.name+', Strength: '+this.strength+', Speed: '+this.speed+', Health: '+this.health)
    }

    drinkSake() {
        this.health+=10;
        console.log('Gulp! Your ninja now has '+this.health+' health')
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

