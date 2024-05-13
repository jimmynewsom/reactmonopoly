


//I'll represent the board as a linear array with 40 elements / tiles
export class Monopoly {
  //board = new Array(40);


  constructor(players){
    this.players = players;
  }

  move(id, roll){
    //move player roll spaces
  }

  buy(property, player){
    //player buys a property
  }

  trade(){
    //players trade
  }




}

class Property {
  constructor(name, color, rents){
    this.name = name;
    this.color = color;
    this.rents = rents;
  }

  setOwner(owner){
    this.owner = owner;
  }
}

class Utility {

}

class Railroad {
  
}