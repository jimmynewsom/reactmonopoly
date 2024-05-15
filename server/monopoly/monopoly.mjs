import fs from 'fs';
import { parse } from 'csv-parse';


class Property {
  houses = 0; //houses = -1 means mortgaged

  //type can be property, railroad, or utility
  constructor(name, type, price, rents, mortgageValue, color){
    this.name = name;
    this.type = type;
    this.price = price;
    this.rents = rents;
    this.mortgageValue = mortgageValue;
    this.color = color;
  }

  setOwner(owner){
    this.owner = owner;
  }

  calculateRent(numRailRoads, numUtilities, roll, monopoly){
    //mortgaged properties don't collect rent
    if(this.houses == -1)
      return 0;
    //25 for 1 railroad, 50 for 2, 100 for 3, 200 for 4
    else if(this.type == "railroad"){
      if(numRailRoads == 1)
        return 25;
      else if(numRailRoads == 2)
        return 50;
      else if(numRailRoads == 3)
        return 100;
      else
        return 200;
    }
    //4 * roll for 1 utility, 10 * roll for 2
    else if(this.type == "utility"){
      if(numUtilities == 1)
        return roll * 4;
      else
        return roll * 10;
    }
    //if the player has all properties of 1 color but no houses collect double rent
    else if(houses == 0 && monopoly)
      return rents[0] * 2;
    //otherwise collect normal rent
    else
      return rents[houses];
  }

  mortgage(){
    this.mortgage
  }
}


let standardProperties;
const propertyMap = new Map();

//these should maybe be synchronous instead of async, since I need them to initialize at start up. but it's not that important
// fs.readFile("./standardProperties.csv", function (err, fileData) {
//   parse(fileData, {columns: false, trim: true}, function(err, rows) {
//     standardProperties = rows;

//     standardProperties.forEach((row, i) => {
//       //the first row is just the names of the columns
//       if(i!==0){
//         //each row is [0] Name, [1] Price, [2] PricePerHouse, [3] Rent, [4] Rent(1 House), [5] Rent(2 Houses), [6] Rent(3 Houses)
//         //  [7] Rent(4 Houses), [8] Rent(Hotel), [9] Mortgage
//         let property = new Property(row[0], "property", row[1], row[9], row[4], row[5], row[6], row[7], row[8], row[9]);
//         cardMap.set(row[0], card);
//       }
//     });
//   });
// });



class Player {
  location = 0; // -1 = jail
  properties = [];
  cash = 1500;
  GOOJF = 0; //Get Out Of Jail Free

  constructor(id, name){
    this.id = id;  
    this.name = name;
  }

  setToken(token){
    this.token = token;
  }
}



//I'll represent the board as a linear array with 40 elements / tiles
export class Monopoly {
  //board = new Array(40);


  constructor(players){
    this.players = players;
  }

  move(playerID, roll){
    //move player roll spaces
  }

  buy(playerID, property){
    //player buys a property
  }

  //Details objects specify what players are trading
  //looks like Details()
  trade(p1ID, p1Details, p2ID, p2Details){
    //players trade
  }




}

