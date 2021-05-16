import { Player } from "./Player.model"

export class BaseBallTeam {
  public name: string
  public players: Player[] = []
  // カプセル化

  constructor(name: string, playerList: Player[]){
    this.name = name
    //BaseBallTeamをインスタンス化するときに、Playerも同時にインスタンス化する処理
    //PlayerたちをPlayer.model.tsにあるクラスをインスタンス化して配列なりなんなりでこのBaseballインスタンスのプロパティにいれる処理
  }

}