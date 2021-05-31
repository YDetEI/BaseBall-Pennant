/*const get0ability = this.baseBallTeam1.playerList[0].ability*/
/*const player = 配列.filter((player) => playerType !== 'Pitcher')*/
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
  // public createArray4Judge(): number[] {
  public createArray4Judge() {
    const getFielderAbility = this.baseBallTeam1.playerList
      .filter((player) => player.playerType !== 'Pitcher')
      .map((player) => player.ability)

    const getPitcherAbility = this.baseBallTeam1.playerList
      .filter((player) => player.playerType === 'Pitcher')
      .map((player) => player.ability)

    const chooseRandomPitcherAbility =
      getPitcherAbility[Math.floor(Math.random() * getPitcherAbility.length)]

    console.log(getFielderAbility)
    console.log(getPitcherAbility)
    console.log(chooseRandomPitcherAbility)
  }

  //if gusu return
  //else not gusu continue
  //console.log(gusu)
  // const getAbility1 = this.baseBallTeam1.playerList.map((player: Player) => {
  //   const currentPlayerType =
  //   console.log(currentPlayerType)
  //   // const isPitcher: boolean =
  //   //if 投手でない場合、returnする。
  //   // 投手でない場合はcontinueする。
  // })

  // if(条件式){
  //   処理
  // } else if (条件式) {
  //   処理
  // } else {
  //   処理
  // }
  /*
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const gusu = numbers.filter((x) => x % 2 === 0)
*/
  /* if (this.baseBallTeam1.playerList[].playerType ===
'Catcher', 'First', 'Second', 'Third', 'Short', 'Left', 'Center', 'Right', 'DH')
return this.baseBallTeam1.playerList[].ability
else ;
}
*/
  /*
    const get0ability: number[] = [this.baseBallTeam1.playerList[0].ability]
    const get1ability: number[] = [this.baseBallTeam1.playerList[1].ability]
    const get2ability: number[] = [this.baseBallTeam1.playerList[2].ability]
    const get3ability: number[] = [this.baseBallTeam1.playerList[3].ability]
    const get4ability: number[] = [this.baseBallTeam1.playerList[4].ability]
    const get5ability: number[] = [this.baseBallTeam1.playerList[5].ability]
    const get6ability: number[] = [this.baseBallTeam1.playerList[6].ability]
    const get7ability: number[] = [this.baseBallTeam1.playerList[7].ability]
    const get8ability: number[] = [this.baseBallTeam1.playerList[8].ability]

    console.log(
      this.baseBallTeam1.playerList[0].ability +
        this.baseBallTeam1.playerList[1].ability
    )
    const map1 = array1.map(x => x * 2);

console.log(map1);
*/

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
