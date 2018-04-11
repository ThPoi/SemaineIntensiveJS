// variable pour vérifier bon fonctionne script
let animationTrue = 0
let deadVerif = 0
// for characteristics player

let playerName = "Anduin"
let playerHealth = 100
let playerStrenght = 10
let playerXp = 10
let playerId = 1


// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 100
let monsterStrenght = 15
let monsterXp = 10
let monsterId = 2

let character = {
    // Initialise le character
    initCharacter: function (name, health, strenght, xp, id) {
        this.name = name
        this.health = health
        this.strenght = strenght
        this.xp = xp
        this.id = id
    },
    // Attaque un character target
    description: function () {
      let description = this.name + " a " + this.health + "points de vie " + this.strenght + " points de force et appartient à la race " + this.race + " et a " + this.xp + " points d'xp"
      return description
    },
    fight: function (target) {
      let combatText = "COMBAT"

      let combat = document.createElement("p")
      combat.textContent = combatText
      document.getElementById("textWrite").appendChild(combat)
      scrollHeight ()

      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action

      let number = Math.random()*10

      if (number <=8) {
        target.health -= this.strenght
        actionText = this.name + " attaque " + target.name
        attacCharacter(this.id)

      } else if (number <=9) {
        target.health -= this.strenght * 1.5
        actionText = this.name + " fait une attaque critique sur " + target.name + " !"
        attacCharacter(this.id)

      } else {
        actionText = this.name + " a raté son attaque sur " + target.name + " !"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()

    },
    care: function(target) {
      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action
      let number = Math.random()*2
      if (number<1) {
        this.health += target.strenght*2
        if (this.health > 100) {
          this.health = 100
        }
        actionText = this.name + " s'est soigné !"
      } else if (number <=2){
        actionText = "Echec du soin"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
    },
    special: function (target) {
      let combatText = "COMBAT"

      let combat = document.createElement("p")
      combat.textContent = combatText
      document.getElementById("textWrite").appendChild(combat)
      scrollHeight ()

      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action

      let number = Math.random()*10

      if (number <=6) {
        actionText = this.name + " ne réussit pas son attaque spéciale sur "+ target.name

      } else if (number <=7) {
        target.health -= this.strenght * 4
        actionText = this.name + " fait une attaque spéciale sur " + target.name + " !"
        specialCharacter(this.id)

      } else {
        this.health -= this.strenght * 2
        actionText = "L'attaque spéciale de " + this.name + "se retourne contre lui !"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()

    },
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerXp, playerId)


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterXp, monsterId)

console.log(monster.description())


// function animation character
function readyCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/Anduin_ready.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/Ogre_ready.gif")
  } else {
    console.log("Erreur, pas d'animation ready")
  }
}
function noCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/static_character/tombe.png")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/static_character/tombe.png")
  } else {
    console.log("Erreur")
  }
}
function attacCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/Anduin_attaque.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/Ogre_attaque.gif")
  } else {
    console.log("Erreur, pas d'animation d'attaque")
  }
  animationTrue = 1
  setTimeout(function() {
    readyCharacter(id)
    animationTrue = 0;
  }, 1000)
}
function specialCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/Anduin_as.gif")
  } else if (id === 2) {
    console.log("Erreur")
  } else {
    console.log("Erreur")
  }
  animationTrue = 1
  setTimeout(function() {
    readyCharacter(id)
    animationTrue = 0;
  }, 1000)

}
function deadCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/Anduin_death.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/Ogre_death.gif")
  } else {
    console.log("Erreur")
  }
  setTimeout(function() {noCharacter(id);}, 3000)

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
      if (animationTrue === 1 && deadVerif === 0) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)

      } else if (animationTrue === 0 && deadVerif === 0){
        player.fight(monster)
      } else if (deadVerif === 1) {
        deadStop()
      } else {
        console.log("erreur")
      }
      managementHealth ()
}
);

let healClick = document.querySelector("#heal")
healClick.addEventListener(
  'click',
  function healClick(){
    if (player.health === 100) {
      let healMessage = document.createElement("p")
      healMessage.textContent = "Vous êtes déjà soigné !"
      document.getElementById("textWrite").appendChild(healMessage)
      scrollHeight ()
    } else if (player.health < 100) {
      player.care(monster)
    }
    managementHealth ()
}
);
let specialClick = document.querySelector("#special")

specialClick.addEventListener(
  'click',
  function specialClick(){
    if (animationTrue === 1 && deadVerif === 0) {
      setTimeout(function() {
        specialCharacter(this.id)
      }, 1000)

    } else if (animationTrue === 0 && deadVerif === 0){
      player.special(monster)
    } else if (deadVerif === 1) {
      deadStop()
    } else {
      console.log("erreur")
    }
    managementHealth ()
}
);





// function divers
// gestion vie
function managementHealth () {
  if (monster.health > 0 && player.health > 0) {
    pvMonster.style.width = monster.health + '%'
    pvPlayer.style.width = player.health + '%'
  } else if (monster.health > 0 && player.health <= 0){
    pvPlayer.style.width = 0 + '%'
    deadCharacter(player.id)
    let deadText = "Vous êtes mort !"
    let dead = document.createElement("p")
    dead.textContent = deadText
    document.getElementById("textWrite").appendChild(dead)
    console.log("Player mort")
  } else if (deadVerif === 0) {
    deadVerif = 1
    pvMonster.style.width = 0 + '%'
    deadCharacter(monster.id)
  } else if(monster.health<=0){
    console.log("Monstre mort")
  } else {
    console.log("Error life")
  }
}
//gestion mort
function deadStop() {
  let deadText = "Le monstre est mort, inutile d'attaquer !"
  let dead = document.createElement("p")
  dead.textContent = deadText
  document.getElementById("textWrite").appendChild(dead)
  scrollHeight ()
}
// fonction hasard
// trois tiers


// pile face
