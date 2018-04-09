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
damage = 20
pv =  document.querySelector("#pvPlayer1")
attac = document.querySelector("#attac")
  attac.addEventListener(
    'click',
    function attac(){
  pv.style.width= damage + "%"
}
)
