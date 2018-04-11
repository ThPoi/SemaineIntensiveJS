// for characteristics player

let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 10
let playerRace = "Humain"
let playerXp = 10
let playerHeal = 10


// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 10
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

      let text = "COMBAT"
      let yo = ""

      let action = document.createElement("p")
      action.textContent = text

      let dead = document.createElement("p")
      dead.textContent = "Le monstre est déjà mort !"

      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      


    },

    special: function (target) {
      let number = Math.random()*2
      console.log(number)
      if (this.health >  0) {
        if (target.health > 0){
          if (number<1){
            target.health -= this.strenght +10
            console.log(this.name + " attaque " + target.name)
            console.log("Il reste " + target.health + " de point de vie à " + target.name)
          } else if (number>=1) {
            target.health -= this.strenght - 5
            console.log(this.name + " attaque " + target.name)
            console.log("Il reste " + target.health + " de point de vie à " + target.name)
          }
        } else {
          console.log(target.name + " est mort !")
        }
      } else {
        console.log(this.name + " est mort !")
      }
    },
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerRace, playerXp)


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterRace, monsterXp)

console.log(monster.description())


/// animation attac





// function utiliser pour animation player
function readyPlayer (){
  playerCharacter.setAttribute("src", "images/animation_character/Anduin_ready.gif")
}
function noPlayer (){
  playerCharacter.setAttribute("src", "images/static_character/tombe.png")

}
function attacPlayer () {
  playerCharacter.setAttribute("src", "images/animation_character/Anduin_attaque.gif")
  setTimeout(readyPlayer, 1000);
}
function specialPlayer () {
  playerCharacter.setAttribute("src", "images/animation_character/Anduin_as.gif")
  setTimeout(readyPlayer, 1000);
}
function deadPlayer () {
  playerCharacter.setAttribute("src", "images/animation_character/Anduin_death.gif")
  setTimeout(noPlayer, 2000);
}
// function utiliser pour animation monster
function readyMonster (){
  monsterCharacter.setAttribute("src", "images/animation_character/Ogre_ready.gif")
}
function noMonster (){
  monsterCharacter.setAttribute("src", "images/static_character/tombe.png")
}
function attacMonster () {
  monsterCharacter.setAttribute("src", "images/animation_character/Ogre_attaque.gif")
  setTimeout(readyMonster, 1000);
}
function deadMonster () {
  monsterCharacter.setAttribute("src", "images/animation_character/Ogre_death.gif")
  setTimeout(noMonster, 4000);
}


// scroll bas
function scrollHeight () {
  let element = document.getElementById("textWrite");
  element.scrollTop = element.scrollHeight;
}

//////// SORTS
let pvPlayer = document.querySelector("#pvPlayer")
let pvMonster =  document.querySelector("#pvMonster")

let playerCharacter = document.getElementById("player")
let monsterCharacter = document.getElementById("monster")
let attackClick = document.querySelector("#attaque")

  attackClick.addEventListener(
    'click',
    function attackClick(){
      player.fight(monster)
      if (monster.health > 0 && player.health > 0) {
        pvMonster.style.width = monster.health + '%'
        pvPlayer.style.width = player.health + '%'
      } else if (monster.health > 0 && player.health <= 0){
        pvPlayer.style.width = 0 + '%'
        deadPlayer()
        console.log("Player mort")
      } else {
        pvMonster.style.width = 0 + '%'
        deadMonster()
        console.log("Monstre mort")
      }
}
);

let specialClick = document.querySelector("#special")
  specialClick.addEventListener(
    'click',
    function specialClick(){
      player.special(monster)
      if (monster.health > 0 && player.health > 0) {
        pvPlayer.style.width = player.health + '%'
        pvMonster.style.width = monster.health + '%'
      } else if (monster.health > 0 && player.health <= 0){
        pvPlayer.style.width = 0 + '%'
        deadPlayer()
        console.log("Vous êtes mort")
      } else {
        pvMonster.style.width = 0 + '%'
        deadMonster()
        console.log("Bravo, le monstre est mort !")
      }
}
);
/*
let healClick = document.querySelector("#heal")
let time = 0
  healClick.addEventListener(
    'click',
    function healClick(){
      if (player.health <  100 && time <=2){
        player.health += 5
        pvPlayer.style.width = player.health + "%"
        time +=1
      } else if (time >2){
        console.log("Vous ne pouvez plus vous soignez")
      } else {
        console.log("Tu as déjà des points de vie au maximun !")
      }
    }
)
*/
