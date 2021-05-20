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
    const newPlayer = new Player(name, ability, playerType)
    this.playerList.push(newPlayer)
  },

  
  
  )
}



}