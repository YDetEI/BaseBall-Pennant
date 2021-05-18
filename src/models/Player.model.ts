import { BaseballTeam, PlayerType } from "../type"

export class Player {
  public name: string
  public ability: number
  public playerType: PlayerType
  

  constructor(name: string, ability: number, playerType: PlayerType){
    this.name = name
    this.ability = ability
    this.playerType = playerType
    console.log(`I am ${this.name} and Ability is ${this.ability}
    and PlayerType is ${this.playerType}. `)
  }
}










