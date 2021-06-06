// import { samplePlayers } from "../sampledata/samplePlayer"
import { PlayerType } from '../type'
import { Player } from './Player.model'

export class BaseBallTeam {
  public name: string
  public playerList: Player[] = []
  public winningPoints: number
  public losingPoints: number
  public drawingPoints: number

  constructor(name: string, playerList: Player[]) {
    this.name = name
    this.winningPoints = 0
    this.losingPoints = 0
    this.drawingPoints = 0
    playerList.forEach((player) => {
      const newPlayer = new Player(
        player.name,
        player.ability,
        player.playerType
      )
      this.playerList.push(newPlayer)
    })
  }
}

/*
class GsPlayers {
  public name: string
  public ability: number
  public playerType: PlayerType



  constructor(name: string, ability: number, playerType: PlayerType){
    this.name = name
    this.ability = ability
    this.playerType = playerType
  }

 const gsplayers = ['aくん']
 const player = new this.player('aくん', 100, 'Pitcher')}
*/
