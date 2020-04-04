/* global Decimal*/

let game

function reset() {
  
  game = {
    cash: new Decimal(0),
    upgradeCost: [10, 100, 500, 1000],
    upgradesPurchased: [],
  }
}

reset()

function update() {
  document.getElementById("cash_number").innerHTML = game.cash
}

  if (screen.width < 900 || window.innerWidth < 900) {
    document.getElementById('cash').style.position = "absolute"
    document.getElementById('cash').style.top = "400px"
    document.getElementById('cash').style.width = "97%"
  }
  else {
    document.getElementById('cash').style.position = "relative"
    document.getElementById('cash').style.top = "0px"
    document.getElementById('cash').style.width = "600px"
  }

update()

//defining upgrades showing as none or some
function checkIfCanShowUpgrade() {
if (game.cash >= 10) {
document.getElementById("upgrade1").style="display:block";
} else {
   document.getElementById("upgrade1").style="display:none"
}
}
//end 

//how purchasing upgrades works. checks array and then subtracts cost and sets upgrade as not showing.
function purchaseUpgrade(id) {
  game.upgradesPurchased.push(id); //used because it doesnt work by itself in html?
 if (game.upgradesPurchased.includes("upgrade1")) {
  game.cash = game.cash - 10;
document.getElementById("upgrade1").style="display:none";
}
}
//end

//how CPC is calculated.
function moreCash() {
if (game.upgradesPurchased.length == 0) {
game.cash = game.cash.add(1)
} else if (game.upgradesPurchased.includes("upgrade1")) {
game.cash = game.cash.add(2)
}
}
//end

//running functions 
setInterval(update, 10)
setInterval(checkIfCanShowUpgrade, 10)
