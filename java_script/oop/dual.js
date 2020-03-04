class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }
        else {
            throw new error('Target must be a unit!');
        }
    }
}
class Effect extends Card {
    constructor(name, cost, mag, stat, text) {
        super(name, cost);
        this.mag = mag;
        this.stat = stat;
        this.text = text;
    }
    cast(target) {
        if (target instanceof Unit) {
            if (this.stat == 'resilience') {
                target.res += this.mag;
            }
            else {
                target.power += this.mag;
            }
        }
        else {
            throw new error('Target must be a unit!');
        }
    }
}
const red_belt_ninja = new Unit('Red Belt Ninja', 3,3,4)
const black_belt_ninja = new Unit('Black Belt Ninja', 4,5,4)
const hard_algorithm = new Effect('Hard Algorithm',2,3,'resilience',"Increase target's resilience by 3")
const unhandled_promise_rejection = new Effect('Unhandled Promise Rejection',1,-2,'resilience',"Reduce target's resilience by 2")
const pair_programming = new Effect('Pair Programming',3,2,'power',"increase target's power by 2")

