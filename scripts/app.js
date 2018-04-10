// for characteristics player

let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 10
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
    fightPlayer: function (target) {
      let text = "COMBAT"
      let yo = ""

      let action = document.createElement("p")
      action.textContent = text

      let dead = document.createElement("p")
      dead.textContent = "Le monstre est déjà mort !"

      document.getElementById("textWrite").appendChild(action)
      if (target.health > 0) {
        // CHOICE USER
        let choicePlayer = window.prompt("pierre, feuille, ciseaux !")
        choicePlayer =choicePlayer.toLowerCase()
        let affichageChoicePlayer= document.createElement("p")
        affichageChoicePlayer.textContent = "Vous avez choisi " + choicePlayer
        document.getElementById("textWrite").appendChild(affichageChoicePlayer)

        // CHOICE TARGET
        let choiceTarget = Math.random()
        if (choiceTarget < 0.34){
          choiceTarget = "pierre"
        } else if (choiceTarget <=0.66) {
          choiceTarget = "feuille"
        } else {
          choiceTarget = "ciseaux"
        }
        console.log("Le monstre a choisit " + choiceTarget)

        // COMPARAISON
        let affichageChoiceTarget = document.createElement("p")
        affichageChoiceTarget.textContent = target.name + " a choisit " + choiceTarget
        document.getElementById("textWrite").appendChild(affichageChoiceTarget)

        let affichageResult = document.createElement("p")

        let winnerFight
        let looserFight
        if (choicePlayer === choiceTarget) {
          affichageResult.textContent = "Egalité, personne n'a attaqué !"
          document.getElementById("textWrite").appendChild(affichageResult)
          return false
        } else if (choicePlayer === "pierre" && choiceTarget === "ciseaux") {
          winnerFight = this.name
          looserFight = target.name
          target.health -= this.strenght
          attacPlayer()
        } else if (choicePlayer === "pierre" && choiceTarget === "feuille") {
          winnerFight = target.name
          looserFight = this.name
          this.health -= target.strenght
          attacMonster()
        } else if (choicePlayer === "ciseaux" && choiceTarget === "pierre") {
          winnerFight = target.name
          looserFight = this.name
          this.health -= target.strenght
          attacPlayer()
        } else if (choicePlayer === "ciseaux" && choiceTarget === "feuille") {
          winnerFight = this.name
          looserFight = target.name
          target.health -= this.Strenght
          attacMonster()
        } else if (choicePlayer === "feuille" && choiceTarget === "ciseaux") {
          winnerFight = target.name
          looserFight = this.name
          this.health -= target.strenght
          attacMonster()
        } else if (choicePlayer === "feuille" && choiceTarget === "pierre") {
          winnerFight = this.name
          looserFight = target.name
          target.health -= this.strenght
          attacPlayer()
        }
        affichageResult.textContent = winnerFight + " attaque " + looserFight
        document.getElementById("textWrite").appendChild(affichageResult)


      } else {
        document.getElementById("textWrite").appendChild(dead)
      }

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



//////// SORTS
let pvPlayer = document.querySelector("#pvPlayer")
let pvMonster =  document.querySelector("#pvMonster")

let playerCharacter = document.getElementById("player")
let monsterCharacter = document.getElementById("monster")

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
  setTimeout(noMonster, 2000);
}
let attackClick = document.querySelector("#attaque")
  attackClick.addEventListener(
    'click',
    function attackClick(){
      player.fightPlayer(monster)
      if (monster.health > 0 && player.health > 0) {
        pvMonster.style.width = monster.health + '%'
        pvPlayer.style.width = player.health + '%'
      } else if (monster.health > 0 && player.health <= 0){
        pvPlayer.style.width = 0 + '%'
        deadPlayer()
        console.log("Vous êtes mort")
      } else {
        pvMonster.style.width = 0 + '%'
        console.log("Bravo, le monstre est mort !")
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

        console.log("Vous êtes mort")
      } else {
        pvMonster.style.width = 0 + '%'
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
