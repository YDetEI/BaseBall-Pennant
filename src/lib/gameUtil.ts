import { BaseBallTeam } from '../models/BaseBallTeam.model'
import { Player } from '../models/Player.model'
import { BASEBALL_TEAMS1, BASEBALL_TEAMS2 } from '../type'

export class Game {
  public baseBallTeam1: BaseBallTeam
  public baseBallTeam2: BaseBallTeam

  constructor(baseBallTeam1: BaseBallTeam, baseBallTeam2: BaseBallTeam) {
    this.baseBallTeam1 = baseBallTeam1
    this.baseBallTeam2 = baseBallTeam2
    console.log(
      this.baseBallTeam1.name + ' vs ' + this.baseBallTeam2.name + ' PlayBall!'
    )

    // for (const t1 of BASEBALL_TEAMS1) {
    //   BASEBALL_TEAMS2.shift()
    //   for (const t2 of BASEBALL_TEAMS2) {
    //     console.log(t1 + ' vs ' + t2)
    //   }
    // }
  }

  public judge() {
    const baseBallTeam1Result = this.calculateAbility(this.baseBallTeam1)
    const baseBallTeam2Result = this.calculateAbility(this.baseBallTeam2)

    const isTeam1Wins = baseBallTeam1Result > baseBallTeam2Result
    const isDraw = baseBallTeam1Result === baseBallTeam2Result

    if (isDraw) {
      console.log('draw!')
      this.baseBallTeam1.drawingPoints += 1
      this.baseBallTeam2.drawingPoints += 1
    } else if (!isDraw && !isTeam1Wins) {
      this.baseBallTeam1.losingPoints += 1
      this.baseBallTeam2.winningPoints += 1

      console.log(this.baseBallTeam2.name + ' wins!')
    } else {
      console.log(this.baseBallTeam1.name + ' wins!')
      this.baseBallTeam2.losingPoints += 1
      //const win1 = this.baseBallTeam1.winningPoints + 1
      this.baseBallTeam1.winningPoints += 1
    }
    console.log(this.baseBallTeam1.winningPoints)
    console.log(this.baseBallTeam1.losingPoints)
    console.log(this.baseBallTeam1.drawingPoints)
  }

  // private setPoint(): number {
  //   const win1 = this.baseBallTeam1.winningPoints + 1
  //   const win2 = this.baseBallTeam2.winningPoints + 1
  //   const lose1 = this.baseBallTeam1.losingPoints + 1
  //   const lose2 = this.baseBallTeam2.losingPoints + 1
  //   const draw1 = this.baseBallTeam1.drawingPoints + 1
  //   const draw2 = this.baseBallTeam2.drawingPoints + 1
  // }

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

    //console.log(multipleRandom)
    return multipleRandom
  }
}

class Season {
  ranking() {
    const allWinningPoints = BaseBallTeam.winningPoints
    const allLosingpoints
    const tsStudy7
  }
}
