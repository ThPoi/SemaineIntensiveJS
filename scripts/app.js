let playerName = "Thomas"
let playerHealth = 100
let playerStrenght = 20
let playerXp = 10




let character = {
    // Initialise le character
    initCharacter: function (name, health, strenght, xp) {
        this.name = name
        this.healthth = health
        this.strenght = strenght
        this.xp = xp
    },
    // Attaque un character target
    combat: function (target) {
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
    }
};

let player = Object.create(character)
player.initCharacter(playerName, playerHealth, playerStrenght, playerXp)


























































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
