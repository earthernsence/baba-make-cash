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
if (game.cash >= 10) {
document.getElementById("upgrade1").style.display = 'block';
} else {
document.getElementById("upgrade1").style.display = 'none';
}

function purchaseUpgrade(id) {
 if (game.upgradesPurchased.includes("upgrade1")) {
  game.cash = game.cash - 10
}
}


function moreCash() {
game.cash = game.cash.add(1)
if (game.upgradesPurchased.includes("upgrade1")) {
  game.cash = game.cash.add(2)
}
}


setInterval(update, 10)
