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

constructor(name: string, playerList: string[])
{
  this.name = name


  

  playerList.forEach(name => {
    const newPlayer = new Player(name, 15, 'Pitcher')

    
    this.playerList.push(newPlayer)
  },

  
  
  )
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