import { Game } from './lib/gameUtil'
import { BaseBallTeam } from './models/BaseBallTeam.model'
import { Player } from './models/Player.model'
import { sampleGs, sampleTs, sampleDs } from './sampledata/samplePlayer'
//import { AbilityResult, BASEBALL_TEAMS } from './type'

const Gs = new BaseBallTeam('Gs', sampleGs)
const Ts = new BaseBallTeam('Ts', sampleTs)
const Ds = new BaseBallTeam('Ds', sampleDs)

const GsVsTs = new Game(Gs, Ts).judge()
const GsVsDs = new Game(Gs, Ds).judge()

/*
const GsResult: AbilityResult = { teamName: 'Gs', result: 438 }
console.log(GsResult.result)
console.log(GsResult.teamName)
//for test
// const team1 = GsVsTs.baseBallTeam1
// const team2 = GsVsTs.baseBallTeam2

// const judge = GsVsTs.judge()
// function addNumber(a: number, b:number) {
//   return a + b
// }

// const addNumbers = (a: number, b: number) => {
//   console.log(a + b)
//   return 'hello'
// }

// addNumbers(2, 2)
// console.log(addNumbers(1, 1))
/*
const Gs = new BaseBallTeam("Gs", samplePlayers)
const Hanshin = new BaseBallTeam("Hanshin", samplePlayers)
const ヤンキース = new BaseBallTeam("ヤンキース", samplePlayers)
const Yokohamas = new BaseBallTeam("Yokohamas", sampleYokohama)

const GsVsHanshin = new Game(Gs, Hanshin)
*/
