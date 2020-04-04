/* global Decimal*/

let game

function reset() {
  
  game = {
    cash: new Decimal(0),
  }
}

reset()

function update() {
  document.getElementById("cash_number").innerHTML = game.cash
  
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
}

update()







function more_cash() {
  game.cash = game.cash.add(1)
}

setInterval(update, 10)
