// variable pour vérifier bon fonctionne script
let animationPlayer = 0
let yolo = 0
let stopDeadLoop = 0
let playerIsDead = 0
// for characteristics player

let playerName = "Anduin"
let playerHealth = 100
let playerStrenght = 50
let playerXp = 10
let playerId = 1


// for characteristics monster

let monsterName = "Orc"
let monsterHealth = 50
let monsterStrenght = 20
let monsterXp = 10
let monsterId = 2

let portraitPlayer = document.getElementById("portrait_player")
let portraitMonster = document.getElementById("portrait_monster")
let playerCharacter = document.getElementById("player")
let monsterCharacter = document.getElementById("monster")

// compte nom bre de monstre tué
let compteurDead = 0
let numberDead = document.createElement("p")


let compteurXp = playerXp

let numberXp = document.createElement("p")

portraitCharacter(monsterId)
readyCharacter(monsterId)
//
function random3 () {
  let number = Math.floor(Math.random()*3+2)
  return number
}
function random4 () {
  let number = Math.floor(Math.random()*10 +1)
  return number
}
function generatorMonster () {
  setTimeout(function() {
    let newMonster = random3()
    monster.id = newMonster
    if (newMonster === 3) {
      monster.name = "Araigné"
    } else if(newMonster === 2){
      monster.name = "Orc"
    } else {
      monster.name = "Naga"
    }
    let gameBackground = document.getElementById("carte")
    let newMap = random4()
    if (newMap <=3) {
      gameBackground.setAttribute("src", "images/background/background2.jpg")
    } else if (newMap <= 4){
      gameBackground.setAttribute("src", "images/background/background3.jpg")
    } else if (newMap === 7){
      gameBackground.setAttribute("src", "images/background/background4.jpg")
    } else {
      gameBackground.setAttribute("src", "images/background/background5.jpg")
    }
    resetCharacter(monster)
    readyCharacter(monster.id)
    portraitCharacter(monster.id)
    managementHealth ()
    consoleLogCarac ()
    compteurDead += 1
    compteurXp = compteurXp * 1.7
    numberDead.textContent = "Nombre de monstre tué : " + compteurDead
    document.getElementById("textWrite2").appendChild(numberDead)
    numberXp.textContent = "Nombre d'xp gagné " + compteurXp
    document.getElementById("textWrite2").appendChild(numberXp)
  }, 4000)
  deadVerif = 0
}
// RESET PERSONNAGE
function resetCharacter(target) {
  if (target === player) {
    player.health = 80
    player.strenght = 10
  } else {
    monster.health = 10
    monster.strenght = 10
  }
}

// nouveau mo
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

      } else if (number <=9.5) {
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
        this.health *= 1.8
        if (this.health > 100) {
          this.health = 100
        }
        actionText = this.name + " s'est soigné !"
        healAnimation(this.id)
      } else if (number <2){
        actionText = "Echec du soin sur " + this.name
      } else {
        actionContent = this.name + " est déjà soigné !"
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
        actionText = "L'attaque spéciale de " + this.name + " se retourne contre lui !"
        dammageCharacter(this.id, this.id)
      } else if (number <=5) {
        target.health -= this.strenght * 2
        actionText = this.name + " fait une attaque spéciale sur " + target.name + " !"
        specialCharacter(this.id, target.id)

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

      if (number <=7) {
        this.strenght += this.strenght * 0.2
        actionText = this.name + " a réussi son augmentation de puissance"
        increaseAnimation(this.id)

      } else if (number <=8) {
        this.strenght += this.strenght * 0.5
        actionText = this.name + " a fait une augmentation critique de puissance"
        increaseAnimation(this.id)

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

      if (number <=7) {
        target.strenght -= target.strenght * 0.1
        actionText = this.name + " a réussi a enlever de la puissance a " + target.name
        decreaseAnimation(target.id)
      } else if (number <=8) {
        target.strenght -= target.strenght * 0.2
        actionText = this.name + " a réussit à enlever beaucoup de puissance a " + target.name
        decreaseAnimation(target.id)
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


function portraitCharacter(id) {
  if (id === 2) {
    portraitMonster.setAttribute("src", "images/barre_haut/portrait_ogre.png")
  } else if (id === 3) {
    portraitMonster.setAttribute("src", "images/barre_haut/portrait_spider.png")
  } else {
    console.log("Erreur, pas de portrait")
  }
}

function dammageGribs(id) {
  let dammage = document.createElement("img")
  dammage.setAttribute("src", "effect/dammage.gif")
  dammage.style.position = "absolute"
  dammage.style.width = "30" + "%"
  dammage.style.zIndex = "10"

  if (id === 1) {
    dammage.style.bottom = "45" + "%"
    dammage.style.left = "20" + "%"
    document.getElementById("game").appendChild(dammage)
  } else {
    dammage.style.bottom = "60" + "%"
    dammage.style.right = "20" + "%"
    document.getElementById("game").appendChild(dammage)
  }
  setTimeout(function test() {
    document.getElementById("game").removeChild(dammage)
  }, 0500);
}

function healAnimation(id) {
  let heal = document.createElement("img")
  heal.setAttribute("src", "effect/heal.gif")
  heal.style.position = "absolute"
  heal.style.width = "20" + "%"
  heal.style.zIndex = "10"

  if (id === 1) {
    heal.style.bottom = "30" + "%"
    heal.style.left = "25" + "%"
    document.getElementById("game").appendChild(heal)
  } else {
    heal.style.bottom = "50" + "%"
    heal.style.right = "25" + "%"
    document.getElementById("game").appendChild(heal)
  }
  setTimeout(function test() {
    document.getElementById("game").removeChild(heal)
  }, 0500);
}

function increaseAnimation(id) {
  let increase = document.createElement("img")
  increase.setAttribute("src", "effect/increase.gif")
  increase.style.position = "absolute"
  increase.style.width = "20" + "%"
  increase.style.zIndex = "10"

  if (id === 1) {
    increase.style.bottom = "35" + "%"
    increase.style.left = "23" + "%"
    document.getElementById("game").appendChild(increase)
  } else {
    increase.style.bottom = "50" + "%"
    increase.style.right = "27" + "%"
    document.getElementById("game").appendChild(increase)
  }
  setTimeout(function test() {
    document.getElementById("game").removeChild(increase)
  }, 0500);
}
function decreaseAnimation(id) {
  let decrease = document.createElement("img")
  decrease.setAttribute("src", "effect/decrease.gif")
  decrease.style.position = "absolute"
  decrease.style.width = "20" + "%"
  decrease.style.zIndex = "10"

  if (id === 1) {
    decrease.style.bottom = "30" + "%"
    decrease.style.left = "22" + "%"
    document.getElementById("game").appendChild(decrease)
  } else {
    decrease.style.bottom = "50" + "%"
    decrease.style.right = "27" + "%"
    document.getElementById("game").appendChild(decrease)
  }
  setTimeout(function test() {
    document.getElementById("game").removeChild(decrease)
  }, 0500);
}
function timeAfterDammage (id, adverseId) {
  setTimeout(function test() {
    readyCharacter(id)
    readyCharacter(adverseId)
  }, 1000);
}
function dammageCharacter(id, adverseId) {
  if (adverseId === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/anduin_injured.gif")

  } else if (adverseId === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_injured.gif")
  } else if (adverseId === 3) {
    monsterCharacter.setAttribute("src", "images/animation_character/spider/spider_injured.gif")
  } else if (adverseId === 4) {
    monsterCharacter.setAttribute("src", "images/animation_character/naga/naga_injured.gif")
  } else {
    console.log("Erreur, pas d'animation injured")
  }
  dammageGribs(adverseId)
  animationTrue = 1
  timeAfterDammage(id, adverseId)
}
function readyCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_ready.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_ready.gif")
    monsterCharacter.style.width = "25" + "%"
  } else if (id === 3) {
    monsterCharacter.setAttribute("src", "images/animation_character/spider/spider_ready.gif")
    monsterCharacter.style.width = "30" + "%"
  } else if (id === 4) {
    monsterCharacter.setAttribute("src", "images/animation_character/naga/naga_ready.gif")
  } else {
    console.log("Erreur, pas d'animation ready")
  }
}
function noCharacter(id) {
  setTimeout(function test() {
    if (id === 1) {
      playerCharacter.setAttribute("src", "images/static_character/tombe.png")
      playerIsDead = 1
      console.log(playerIsDead)

    } else {
      monsterCharacter.setAttribute("src", "images/static_character/tombe.png")

    }
  }, 1000);
}
function attacCharacter(id, adverseId) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/Anduin_attaque.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/Ogre_attaque.gif")
  } else if (id === 3) {
    monsterCharacter.setAttribute("src", "images/animation_character/spider/Spider_attaque.gif")
  } else if (id === 4) {
    monsterCharacter.setAttribute("src", "images/animation_character/naga/naga_attaque.gif")
  } else {
    console.log("Erreur, pas d'animation d'attaque")
  }
  dammageCharacter(id, adverseId)
}
function specialCharacter(id, adverseId) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/anduin_as.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/ogre_as.gif")
  } else if (id === 3) {
    monsterCharacter.setAttribute("src", "images/animation_character/spider/Spider_as.gif")
  } else if (id === 4) {
    monsterCharacter.setAttribute("src", "images/animation_character/naga/naga_attaque.gif")
  } else {
    console.log("Erreur")
  }
  console.log(id, adverseId)
  dammageCharacter(id, adverseId)
}
function deadCharacter(id) {
  if (id === 1) {
    playerCharacter.setAttribute("src", "images/animation_character/anduin/anduin_death.gif")
  } else if (id === 2) {
    monsterCharacter.setAttribute("src", "images/animation_character/ogre/ogre_death.gif")
  } else if (id === 3) {
    monsterCharacter.setAttribute("src", "images/animation_character/spider/spider_death.gif")
  } else if (id === 4) {
    monsterCharacter.setAttribute("src", "images/animation_character/naga/naga_death.gif")
  } else {
    console.log("Erreur")
  }
  setTimeout(function() {noCharacter(id);}, 1300)

}

// scroll bas
function scrollHeight () {
  let element = document.getElementById("textWrite");
  element.scrollTop = element.scrollHeight;
}

//////// SORTS
let pvPlayer = document.querySelector("#pvPlayer")
let pvMonster =  document.querySelector("#pvMonster")

// RAPPEL

let turnMonster = 0
let animationMonster = 0

let attackClick = document.querySelector("#attaque")
  attackClick.addEventListener(
    'click',
    function attackClick(){
      if (turnMonster === 0) {
        if (animationPlayer === 1) {
          setTimeout(function() {
            readyCharacter(this.id)
          }, 1000)
        } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 0 && player.health>0){
          player.fight(monster)
          turnMonster = 1
          animationMonster = 1
          stopDeadLoop = 1
          managementHealth ()
          turnForMonster ()
        } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 1 && player.health>0) {
          waitMonster()
        } else if (animationPlayer === 0 && monster.health<0 && animationMonster === 1) {
          deadStop()
        } else if (animationPlayer === 1 && monster.health>0 && animationMonster === 1 && player.health>0) {
          waitMonster()
        } else {
          deadStop()
          console.log("erreur attack")
        }
      } else {
        waitMonster()
      }
}
);

let careClick = document.querySelector("#heal")
careClick.addEventListener(
  'click',
  function healClick(){
    if (turnMonster === 0) {
      if (animationPlayer === 1) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 0 && player.health>0){
        player.care(monster)
        turnMonster = 1
        animationMonster = 1
        managementHealth ()
        turnForMonster ()
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else if (animationPlayer === 0 && monster.health<0 && animationMonster === 1) {
        deadStop()
      } else if (animationPlayer === 1 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else {
        deadStop()
        console.log("erreur attack")
      }
    } else {
      waitMonster()
    }
}
);

let specialClick = document.querySelector("#special")
specialClick.addEventListener(
  'click',
  function specialClick(){
    if (turnMonster === 0) {
      if (animationPlayer === 1) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 0 && player.health>0){
        player.special(monster)
        turnMonster = 1
        animationMonster = 1
        managementHealth ()
        turnForMonster ()
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else if (animationPlayer === 0 && monster.health<0 && animationMonster === 1) {
        deadStop()
      } else if (animationPlayer === 1 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else {
        deadStop()
        console.log("erreur attack")
      }
    } else {
      waitMonster()
    }
}
);
let increaseClick = document.querySelector("#increase")
increaseClick.addEventListener(
  'click',
  function increaseClick(){
    if (turnMonster === 0) {
      if (animationPlayer === 1) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 0 && player.health>0){
        player.increase(monster)
        turnMonster = 1
        animationMonster = 1
        managementHealth ()
        turnForMonster ()
      } else if (animationPlayer === 0 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else if (animationPlayer === 0 && monster.health<0 && animationMonster === 1) {
        deadStop()
      } else if (animationPlayer === 1 && monster.health>0 && animationMonster === 1 && player.health>0) {
        waitMonster()
      } else {
        deadStop()
        console.log("erreur attack")
      }
    } else {
      waitMonster()
    }
}
);
let decreaseClick = document.querySelector("#decrease")
decreaseClick.addEventListener(
  'click',
  function decreaseClick(){
    if (turnMonster === 0) {
      if (animationPlayer === 1) {
        setTimeout(function() {
          readyCharacter(this.id)
        }, 1000)
      } else if (monster.health>0 && animationMonster === 0){
        player.decrease(monster)
      } else if (monster.health>0 && animationMonster === 1) {
        waitMonster()
      } else if (monster.health<0 && animationMonster === 1) {
        deadStop()
      } else if (monster.health<0 && animationMonster === 0) {
        deadStop()
      }else {
        console.log("erreur attack")
      }
      managementHealth ()
      turnMonster = 1
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
    } else if (monster.health<=0 && player.health>0 && stopDeadLoop === 1) {
      pvMonster.style.width = 0 + '%'
      deadCharacter(monster.id)
      animationMonster = 1
      turnMonster = 1
      generatorMonster ()
      stopDeadLoop = 0
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
  let waitMonsterText = "Attendez que le monstre finisse de jouer ! Ou il va risque de vous attaquer une autre fois de suite  (et se sera bien fait !)"
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
          if (monster.health<=25 && monster.health>0) {
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
          if (monster.health<=25 && monster.health>0) {
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
          if (monster.health<=25 && monster.health>0) {
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
          if (monster.health<=25 && monster.health>0) {
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
            if (choice <= 9) {
              monster.increase(player)
            } else {
              monster.special(player)
            }
          }
        }
      }
      animationMonster = 0
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
