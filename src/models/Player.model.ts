import { BaseballTeam, PlayerType } from "../type"

export class Player {
  public name: string
  public ability: number
  public playerType: PlayerType
  public affiliation: BaseballTeam

  constructor(name: string, ability: number, playerType: PlayerType, affiliation: BaseballTeam){
    this.name = name
    this.ability = ability
    this.playerType = playerType
    this.affiliation = affiliation
    console.log(`I am ${this.name} and Ability is ${this.ability}
    and PlayerType is ${this.playerType} and ${this.affiliation}. `)
  }
}










