import { Game } from './lib/gameUtil'
import { BaseBallTeam } from './models/BaseBallTeam.model'
import { Player } from './models/Player.model'
import { sampleGs, sampleTs, sampleDs } from './sampledata/samplePlayer'
import { BASEBALL_TEAMS } from './type'

const Gs = new BaseBallTeam('Gs', sampleGs)
const Ts = new BaseBallTeam('Ts', sampleTs)
const Ds = new BaseBallTeam('Ds', sampleDs)

const GsVsTs = new Game(Gs, Ts)
const GsVsDs = new Game(Gs, Ds)

//for test
const team1 = GsVsTs.baseBallTeam1
const team2 = GsVsTs.baseBallTeam2

const result1 = GsVsTs.calculateAbility(team1)
const result2 = GsVsTs.calculateAbility(team2)
/*
// function addNumber(a: number, b:number) {
//   return a + b
// }

const addNumbers = (a: number, b: number) => {
  console.log(a + b)
  return a + b
}

console.log(addNumbers(1, 1))
/*
const Gs = new BaseBallTeam("Gs", samplePlayers)
const Hanshin = new BaseBallTeam("Hanshin", samplePlayers)
const ヤンキース = new BaseBallTeam("ヤンキース", samplePlayers)
const Yokohamas = new BaseBallTeam("Yokohamas", sampleYokohama)

const GsVsHanshin = new Game(Gs, Hanshin)
*/
