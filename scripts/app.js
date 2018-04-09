// for characteristics player

let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 20
let playerRace = "Humain"
let playerXp = 10

// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 100
let monsterStrenght = 20
let monsterRace = "Orc"
let monsterXp = 10



let character = {
    // Initialise le character
    initCharacter: function (name, health, strenght, race, xp) {
        this.name = name
        this.health = health
        this.strenght = strenght
        this.race = race
        this.xp = xp
    },
    // Attaque un character target
    description: function () {
      let description = this.name + " a " + this.health + " points de vie " + this.strenght + " points de force et appartient à la race " + this.race + " et a " + this.xp + " points d'xp"
      return description
    },
    fight: function (target) {
        if (this.health > 0) {
            let dammage = this.strenght;
            console.log(this.name + " attaque " + target.name + " et lui fait " + dammage + " points de dégâts");
            target.health = target.health - dammage;
            if (target.health > 0) {
                console.log(target.name + " a encore " + target.health + " points de vie");
            } else {
                target.health = 0;
                console.log(target.name + " est mort ! Bravo");
            }
        } else {
            console.log(this.name + "est mort...");
        }
    },
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerRace, playerXp)

player.combat = function(monster) {
  this.fight(monster)
  if (monster.health === 0) {
    console.log(this.name + " a tué " + monster.name + " et gagne " + monster.xp + " expérience")
    this.xp += monster.xp
  }
}


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterRace, monsterXp)

console.log(monster.description())


monster.fight(player);

player.combat(monster);

console.log(player.description());





//////// PARTIE LEO SABLONG
let pv =  document.querySelector("#pvPlayer1")
let attack = document.querySelector("#attaque")
let howMuchPv = monsterHealth
let damage = playerStrenght
  attack.addEventListener(
    'click',
    function attack(){
    howMuchPv -= damage
  pv.style.width= howMuchPv + 'px'
}
)
heal = document.querySelector("#heal")
  heal.addEventListener(
    'click',
    function attack(){
   howMuchPv = howMuchPv + 20
  pv.style.width= howMuchPv + "px"
}
)

console.log(howMuchPv);
