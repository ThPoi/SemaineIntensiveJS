// for characteristics player

let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 15
let playerRace = "Humain"
let playerXp = 10
let playerHeal = 10


// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 100
let monsterStrenght = 10
let monsterRace = "Orc"
let monsterXp = 10

let character = {
    // Initialise le character
    initCharacter: function (name, health, strenght, race, xp, heal) {
        this.name = name
        this.health = health
        this.strenght = strenght
        this.race = race
        this.xp = xp
        this.heal = heal
    },
    // Attaque un character target
    description: function () {
      let description = this.name + " a " + this.health + "points de vie " + this.strenght + " points de force et appartient à la race " + this.race + " et a " + this.xp + " points d'xp"
      return description
    },
    fight: function (target) {
      if (this.health >  0) {
        if (target.health > 0){
          target.health -= this.strenght
          console.log(this.name + " attaque " + target.name)
          console.log("Il reste " + target.health + " de point de vie à " + target.name)
        } else {
          console.log(target.name + " est mort !")
        }
      } else {
        console.log(this.name + " est mort")
      }
    },

    special: function (target) {
      let number = Math.random()*2
      if (this.health >  0) {
        if (target.health > 0){
          target.health -= this.strenght * number
          console.log(this.name + " attaque " + target.name)
          console.log("Il reste " + target.health + " de point de vie à " + target.name)
        } else {
          console.log(target.name + " est mort !")
        }
      } else {
        console.log(this.name + " est mort")
      }
    },
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerRace, playerXp)


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterRace, monsterXp)

console.log(monster.description())


// Les sorts
let pvPlayer = document.querySelector("#pvPlayer")
let pvMonster =  document.querySelector("#pvMonster")

let attackClick = document.querySelector("#attaque")
  attackClick.addEventListener(
    'click',
    function attackClick(){
      if (monster.health > 0) {
        player.fight(monster)
        pvMonster.style.width = monster.health + '%'
        monster.fight(player);
        pvPlayer.style.width = player.health + '%'
      } else {
        pvMonster.style.width = 0 + '%'
        window.alert("Bravo, le monstre est mort !")
      }
}
)

let specialClick = document.querySelector("#special")
  specialClick.addEventListener(
    'click',
    function specialClick(){
      if (monster.health > 0) {
        player.special(monster)
        pvMonster.style.width = monster.health + '%'
        monster.special(player);
        pvPlayer.style.width = player.health + '%'
      } else {
        pvMonster.style.width = 0 + '%'
        window.alert("Bravo, le monstre est mort !")
      }
}
)

let healClick = document.querySelector("#heal")
  healClick.addEventListener(
    'click',
    function healClick(){
      if (player.health <  100){
        player.health += 5
        console.log(player.health)
        pvPlayer.style.width= player.health + "%"
      }else {
        window.alert("Tu es entièrement soigner")
        }
    }
)
