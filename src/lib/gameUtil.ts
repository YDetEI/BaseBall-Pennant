import { BaseBallTeam } from '../models/BaseBallTeam.model'
import { Player } from '../models/Player.model'

export class Game {
  public baseBallTeam1: BaseBallTeam
  public baseBallTeam2: BaseBallTeam

  constructor(baseBallTeam1: BaseBallTeam, baseBallTeam2: BaseBallTeam) {
    this.baseBallTeam1 = baseBallTeam1
    this.baseBallTeam2 = baseBallTeam2
    console.log(
      this.baseBallTeam1.name + ' vs ' + this.baseBallTeam2.name + 'するよ'
    )
  }

  /*
   ①野手９人のAbilityを抽出し、一回配列に入れる
   ②Pitcher5人からランダムで１人選び、そのAbilityを抽出し、①の配列に入れる
   */
  public createArray4Judge(): number[] {
    const hoge = this.baseBallTeam1.playerList.filter
    console.log(hoge)
    // const abilityList: number[] = [this.baseBallTeam1.playerList.player.ability]

    return [1, 2, 4]
  }

  /*
   ③配列の中身をすべて足す
   ④足した数に乱数（０.9〜１.１）をかける
   */
  public judge() {}

  //    judge(){
  //     console.log(
  //       (
  //       BaseBallTeam.Player.Catcher.Ability + BaseBallTeam.Player.First.Ability + BaseBallTeam.Player.Second.Ability +
  //       BaseBallTeam.Player.Third.Ability+ BaseBallTeam.Player.Short.Ability + BaseBallTeam.Player.Left.Ability +
  //       BaseBallTeam.Player.Center.Ability+ BaseBallTeam.Player.Right.Ability + BaseBallTeam.Player.DH.Ability）+

  //       /*
  //       var items = ['', '', '', '', ''];
  //       var random = Math.floor( Math.random() * items.length );
  //       console.log( items[random] );
  //       */

  // 　　　　　＊
  //     ( function getRandom(0.9, 1.1) {
  //       return Math.random() * (1.1 - 0.9) + 0.9;
  //     })

  //     )
  //   }
}
