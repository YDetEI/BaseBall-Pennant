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

    import { result1 } from '../lib/index.ts'

    // console.log(fielderAbility)
    // console.log(pitcherAbility)
    // console.log(randomPitcherAbility)
    // console.log(sumFielderAbility)
    // console.log(sumPlayerAbility)
    // console.log(randomNumber)
    console.log(multipleRandom)
    return multipleRandom
  }

  public judge() {
    //   const battle =
    //   if (result1 > result2){
    //     console.log(
    //       this.baseBallTeam1.name + 'の勝利！'
    //       this.baseBallTeam2.name + 'の敗北！'
    //       )
    //   }
    //   else {
    // }
  }
}
