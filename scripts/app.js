// variable pour vérifier bon fonctionne script
let animationTrue = 0
let deadVerif = 0
let yolo = 0
// for characteristics player

let playerName = "Anduin"
let playerHealth = 100
let playerStrenght = 5
let playerXp = 10
let playerId = 1


// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 100
let monsterStrenght = 10
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
        attacCharacter(this.id, target.id)

      } else if (number <=9) {
        target.health -= this.strenght * 1.3
        actionText = this.name + " fait une attaque critique sur " + target.name + " !"
        attacCharacter(this.id, target.id)

      } else {
        actionText = this.name + " a raté son attaque sur " + target.name + " !"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      consoleLogCarac()

    },
    care: function(target) {
      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action
      let number = Math.random()*2
      if (number<=1) {
        this.health *= target.strenght * 1
        if (this.health > 100) {
          this.health = 100
        }
        actionText = this.name + " s'est soigné !"
      } else if (number <2){
        actionText = "Echec du soin sur" + this.name
      } else {
        actionContent = this.name + "est déjà soigné !"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      consoleLogCarac()
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

      if (number <=2) {
        this.health -= this.strenght * 1.5
        actionText = "L'attaque spéciale de " + this.name + "se retourne contre lui !"
        dammageCharacter(this.id, target.Id)
      } else if (number <=5) {
        target.health -= this.strenght * 1.5
        actionText = this.name + " fait une attaque spéciale sur " + target.name + " !"
        specialCharacter(this.id, target.Id)

      } else {
        actionText = this.name + " ne réussit pas son attaque spéciale sur "+ target.name

      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      consoleLogCarac()

    },
    increase: function(target) {
      let combatText = "COMBAT"
      let combat = document.createElement("p")
      combat.textContent = combatText
      document.getElementById("textWrite").appendChild(combat)
      scrollHeight ()

      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action

      let number = Math.random()*10

      if (number <=5) {
        console.log("5")
        this.strenght += this.strenght * 0.2
        actionText = this.name + " a réussi son augmentation de puissance"


      } else if (number <=6) {
        this.strenght += this.strenght * 0.5
        actionText = this.name + " a fait une augmentation critique de puissance"


      } else {
        actionText = this.name + " a raté son augmentation de puissance"
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      consoleLogCarac()

    },
    decrease: function(target) {
      let combatText = "COMBAT"
      let combat = document.createElement("p")
      combat.textContent = combatText
      document.getElementById("textWrite").appendChild(combat)
      scrollHeight ()

      let actionText = ""
      let action = document.createElement("p")
      action.textContent = action

      let number = Math.random()*10

      if (number <=5) {
        target.strenght -= target.strenght * 0.1
        actionText = this.name + " a réussi a enlever de la puissance a " + target.name

      } else if (number <=6) {
        target.strenght -= target.strenght * 0.2
        actionText = this.name + " a réussit à enlever beaucoup de puissance a " + target.name

      } else {
        actionText = this.name + " n'a pas réussit à enlever de la puissance à " + target.name
      }
      action.textContent = actionText
      document.getElementById("textWrite").appendChild(action)
      scrollHeight ()
      consoleLogCarac()

    },
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerXp, playerId)


console.log(player.description())

let monster = Object.create(character)
monster.initCharacter(monsterName, monsterHealth, monsterStrenght, monsterXp, monsterId)

console.log(monster.description())


// function animation character
/*
function dammage(id) {
  let dammage = document.createElement("img")
  dammage.setAttribute("src", "effect/dammage_animation.gif")
  dammage.style.position = "absolute"
  dammage.style.width = "100" + "%"
  dammage.style.zIndex = "10"

  if (id === 1) {
    dammage.style.bottom = "-30" + "%"
    dammage.style.left = "70" + "%"
    document.getElementById("textWrite").appendChild(dammage)
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_ready.gif")
  } else {
    console.log("Erreur, pas d'animation ready")
  }
}
*/
function timeAfterDammage (id, adverseId) {
  setTimeout(function test() {
    yolo = 1
    readyCharacter(id)
    readyCharacter(adverseId)
    animationTrue = 0;
  }, 1000);
}
function dammageCharacter(id, adverseId) {
  if (adverseId === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/anduin_injured.gif")
  } else if (adverseId === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_ready.gif")
  } else {
    console.log("Erreur, pas d'animation ready")
  }
  animationTrue = 1
  timeAfterDammage(id, adverseId)
}
function readyCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_ready.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_ready.gif")
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
function attacCharacter(id, adverseId) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_attaque.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_attaque.gif")
  } else {
    console.log("Erreur, pas d'animation d'attaque")
  }
  dammageCharacter(id, adverseId)
}
function specialCharacter(id, adverseId) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_as.gif")
  } else if (id === 2) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_as.gif")
  } else {
    console.log("Erreur")
  }
  dammageCharacter(id, adverseId)
}
function deadCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_death.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_death.gif")
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

// RAPPEL

let turnMonster = 0

let attackClick = document.querySelector("#attaque")
  attackClick.addEventListener(
    'click',
    function attackClick(){
      console.log(turnMonster)
      if (turnMonster === 0) {
        if (animationTrue === 1 && deadVerif === 0) {
          setTimeout(function() {
            readyCharacter(this.id)
          }, 1000)
        } else if (animationTrue === 0 && deadVerif === 0){
          player.fight
          (monster)
        } else if (deadVerif === 1) {
          deadStop()
        } else {
          console.log("erreur attack")
        }
        turnMonster = 1
        managementHealth ()
        turnForMonster ()
      } else {
        waitMonster()
      }
}
);

let careClick = document.querySelector("#heal")
careClick.addEventListener(
  'click',
  function healClick(){
    console.log(turnMonster)
    if (turnMonster === 0) {
      if (animationTrue === 1 && deadVerif === 0) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationTrue === 0 && deadVerif === 0){
        player.care(monster)
      } else if (deadVerif === 1) {
        deadStop()
      } else {
        console.log("erreur attack")
      }
      turnMonster = 1
      managementHealth ()
      turnForMonster ()
    } else {
      waitMonster()
    }
}
);

let specialClick = document.querySelector("#special")
specialClick.addEventListener(
  'click',
  function specialClick(){
    console.log(turnMonster)
    if (turnMonster === 0) {
      if (animationTrue === 1 && deadVerif === 0) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationTrue === 0 && deadVerif === 0){
        player.special(monster)
      } else if (deadVerif === 1) {
        deadStop()
      } else {
        console.log("erreur attack")
      }
      turnMonster = 1
      managementHealth ()
      turnForMonster ()
    } else {
      waitMonster()
    }
}
);
let increaseClick = document.querySelector("#increase")
increaseClick.addEventListener(
  'click',
  function increaseClick(){
    console.log(turnMonster)
    if (turnMonster === 0) {
      if (animationTrue === 1 && deadVerif === 0) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationTrue === 0 && deadVerif === 0){
        player.increase(monster)
      } else if (deadVerif === 1) {
        deadStop()
      } else {
        console.log("erreur attack")
      }
      turnMonster = 1
      managementHealth ()
      turnForMonster ()
    } else {
      waitMonster()
    }
}
);
let decreaseClick = document.querySelector("#decrease")
decreaseClick.addEventListener(
  'click',
  function decreaseClick(){
    console.log(turnMonster)
    if (turnMonster === 0) {
      if (animationTrue === 1 && deadVerif === 0) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationTrue === 0 && deadVerif === 0){
        player.decrease(monster)
      } else if (deadVerif === 1) {
        deadStop()
      } else {
        console.log("erreur attack")
      }
      turnMonster = 1
      managementHealth ()
      turnForMonster ()
    } else {
      waitMonster()
    }
}
);







// function divers
// gestion vie
function managementHealth () {
  setTimeout(function(){
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
  }, 1000);

}
//gestion mort
function deadStop() {
  let deadText = "Le monstre est mort, inutile d'attaquer !"
  let dead = document.createElement("p")
  dead.textContent = deadText
  document.getElementById("textWrite").appendChild(dead)
  scrollHeight ()
}
// attendre monster
function waitMonster() {
  let waitMonsterText = "Attendez que le monstre finisse de jouer ! Soyez galant !"
  let waitMonster = document.createElement("p")
  waitMonster.textContent = waitMonsterText
  document.getElementById("textWrite").appendChild(waitMonster)
  scrollHeight ()
}
// possibilité jusqu'a 10
function tenChoice () {
  let number = Math.floor(Math.random()*10+1)
  return number
}
//  BOT monster
function turnForMonster () {
  setTimeout(
    function turn(){
      let choice
      if (monster.health <=100) {
        choice = tenChoice ()
        // SI PLAYER A - de 25 TOUS LES CHOIX
        if (player.health<=25) {
          // SI MONSTRE - de 25
          if (monster.health<=25) {
            if (choice <= 8) {
              monster.care(player)
            } else if (choice <= 9){
              monster.fight(player)
            } else {
              monster.decrease(player)
            }
            // SI MONSTRE A - de 50
          } else if (monster.health<=50) {
            if (choice <= 5) {
              monster.care(player)
            } else if (choice <= 7){
              monster.fight(player)
            } else if (choice <= 8){
              monster.special(player)
            } else {
              monster.decrease(player)
            }
          } else if (monster.health<=90) {
            if (choice <= 4) {
              monster.special(player)
            } else if (choice <= 9){
              monster.fight(player)
            } else {
              monster.care(player)
            }
          } else if (monster.health<=100) {
            if (choice <= 9) {
              monster.special(player)
            } else {
              monster.fight(player)
            }
          }
          // SI PLAYER A 50
        } else if (player.healt<=50) {
          // SI MONSTRE A - de 25
          if (monster.health<=25) {
            if (choice <= 7) {
              monster.care(player)
            } else if (choice <= 8){
              monster.fight(player)
            } else {
              monster.decrease(player)
            }
            // SI MONSTRE A - de 50
          } else if (monster.health<=50) {
            if (choice <= 5) {
              monster.care(player)
            } else if (choice <= 7){
              monster.fight(player)
            } else if (choice <= 8){
              monster.special(player)
            } else {
              monster.increase(player)
            }
            // SI MONSTRE A - de 90
          } else if (monster.health<=90) {
            if (choice <= 3) {
              monster.speciale(player)
            } else if (choice <= 7){
              monster.fight(player)
            } else if (choice <= 8){
              monster.decrease(player)
            } else {
              monster.care(player)
            }
          } else if (monster.health<=100) {
            if (choice <= 1) {
              monster.increase(player)
            } else if (choice <= 8){
              monster.special(player)
            } else {
              monster.fight(player)
            }
          }
          // SI PLAYER A -90
        } else if (player.health<=90) {
          // SI MONSTRE A - de 25
          if (monster.health<=25) {
            if (choice <= 8) {
              monster.care(player)
            } else if (choice <= 8){
              monster.fight(player)
            } else {
              monster.decrease(player)
            }
            // SI MONSTRE A - de 50
          } else if (monster.health<=50) {
            if (choice <= 5) {
              monster.care(player)
            } else if (choice <= 7){
              monster.fight(player)
            } else if (choice <= 8){
              monster.special(player)
            } else {
              monster.decrease(player)
            }
            // SI MONSTRE A - de 90
          } else if (monster.health<=90) {
            if (choice <= 5) {
              monster.fight(player)
            } else if (choice <= 8){
              monster.special(player)
            } else if (choice <= 9){
              monster.care(player)
            } else {
              monster.decrease(player)
            }
          } else if (monster.health<=100) {
            if (choice <= 5) {
              monster.increase(player)
            } else {
              monster.special(player)
            }
          }
          // SI PLAYER A - DE 100
        } else if (player.health<=100) {
          // SI MONSTRE A - de 25
          if (monster.health<=25) {
            if (choice <= 2) {
              monster.fight(player)
            } else {
              monster.care(player)
            }
            // SI MONSTRE A - de 50
          } else if (monster.health<=50) {
            if (choice <= 5) {
              monster.care(player)
            } else if (choice <= 9){
              monster.fight(player)
            } else {
              monster.special(player)
            }
            // SI MONSTRE A - de 90
          } else if (monster.health<=90) {
            if (choice <= 3) {
              monster.special(player)
            } else if (choice <= 7){
              monster.fight(player)
            } else {
              monster.care(player)
            }
          } else if (monster.health<=100) {
            if (choice <= 5) {
              monster.increase(player)
            } else {
              monster.special(player)
            }
          }
        }
      }
      else  {
        console.log("Erreur, monster n'a plus de vie")
      }
      turnMonster = 0
      managementHealth ()

  }, 1000);

}



// CONSOLE LOG character
function consoleLogCarac (){
  console.log("CARACTERISTIQUES")
  console.log(monster.name)
  console.log("Force : " + monster.strenght)
  console.log("Santé : " + monster.health)
  console.log(player.name)
  console.log("Force : " + player.strenght)
  console.log("Santé : " +player.health)
}

consoleLogCarac()
