// for characteristics player

let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 20
let playerRace = "Humain"
let playerXp = 10

// for characteristics monster

let monsterName = "Monstre"
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
    description: function () {
      let description = this.name + " a " + this.health + " points de vie " + this.strenght + " points de force et appartient à la race " + this.race + " et a " + this.xp + " points d'xp"
      return description
    },
    // ajouter
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

player.fight = function(monster) {
  
}


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterRace, monsterXp)

console.log(monster.description())





















































//////// PARTIE LEO SABLONG
pv =  document.querySelector("#pvPlayer1")
attack = document.querySelector("#attack")
howMuchPv = pv.offsetWidth
damage = 40
howMuchPv -= damage
  attack.addEventListener(
    'click',
    function attack(){
  pv.style.width= howMuchPv + 'px'
}
)
howMuchPv = pv.offsetWidth
howMuchHeal = howMuchPv + 20
heal = document.querySelector("#heal")
  heal.addEventListener(
    'click',
    function attack(){
  pv.style.width= howMuchHeal + "px"
}
)

console.log(howMuchPv);
