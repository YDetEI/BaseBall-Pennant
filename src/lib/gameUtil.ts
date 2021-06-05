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

  public judge() {
    const baseBallTeam1Result = this.calculateAbility(this.baseBallTeam1)
    const baseBallTeam2Result = this.calculateAbility(this.baseBallTeam2)

    const isTeam1Wins = baseBallTeam1Result > baseBallTeam2Result
    const isDraw = baseBallTeam1Result === baseBallTeam2Result

    if (isDraw) {
      console.log('draw')
    } else if (!isDraw && !isTeam1Wins) {
      console.log('team 2 wins')
    } else {
      console.log('team 1 wins')
    }
  }

  private calculateAbility(BaseBallTeam: BaseBallTeam): number {
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

    console.log(multipleRandom)
    return multipleRandom
  }
}
