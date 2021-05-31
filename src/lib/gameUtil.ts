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
  public calculateAbility(BaseBallTeam: BaseBallTeam): number {
    const fielderAbility = BaseBallTeam.playerList
      .filter((player) => player.playerType !== 'Pitcher')
      .map((player) => player.ability)

    const pitcherAbility = BaseBallTeam.playerList
      .filter((player) => player.playerType === 'Pitcher')
      .map((player) => player.ability)

    const randomPitcherAbility =
      pitcherAbility[Math.floor(Math.random() * pitcherAbility.length)]

    const sumFielderAbility = fielderAbility.reduce(function (sum, element) {
      return sum + element
    }, 0)

    const sumPlayerAbility = randomPitcherAbility + sumFielderAbility
    const randomNumber = (Math.floor(Math.random() * 20) + 90) / 100
    const multipleRandom = sumPlayerAbility * randomNumber

    // console.log(fielderAbility)
    // console.log(pitcherAbility)
    // console.log(randomPitcherAbility)
    // console.log(sumFielderAbility)
    // console.log(sumPlayerAbility)
    // console.log(randomNumber)
    console.log(multipleRandom)
    return multipleRandom
  }

  /*
  ③配列の中身をすべて足す
  ④足した数に乱数（０.9〜１.１）をかける
  */
  public judge() {}
}
