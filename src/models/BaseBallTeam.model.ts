// import { samplePlayers } from "../sampledata/samplePlayer"
import { PlayerType } from "../type"
import { Player } from "./Player.model"

export class BaseBallTeam {
  public name: string
  public playerList: Player[] = []
  // カプセル化

  /*
  constructor(name: string, players: string[]){
    this.name = name
    // this.players = players
    //BaseBallTeamをインスタンス化するときに、Playerも同時にインスタンス化する処理
    //PlayerたちをPlayer.model.tsにあるクラスをインスタンス化して配列なりなんなりでこのBaseballインスタンスのプロパティにいれる処理
  }
*/

  constructor(name: string, playerList: Player[]) {
    this.name = name
    playerList.forEach(player => {
      const newPlayer = new Player(player.name, player.ability, player.playerType)
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