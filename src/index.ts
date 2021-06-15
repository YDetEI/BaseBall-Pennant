import { join } from 'node:path'
import { Game } from './lib/gameUtil'
import { BaseBallTeam } from './models/BaseBallTeam.model'
import { Player } from './models/Player.model'
import {
  sampleGs,
  sampleTs,
  sampleDs,
  sampleSs,
  sampleBs,
  sampleCs,
  sampleFs,
  sampleHs,
  sampleEs,
  sampleOs,
  sampleLs,
  sampleMs,
} from './sampledata/samplePlayer'
//import { AbilityResult, BASEBALL_TEAMS } from './type'

const Gs = new BaseBallTeam('Gs', sampleGs)
const Ts = new BaseBallTeam('Ts', sampleTs)
const Ds = new BaseBallTeam('Ds', sampleDs)
const Ss = new BaseBallTeam('Ss', sampleSs)
const Bs = new BaseBallTeam('Bs', sampleBs)
const Cs = new BaseBallTeam('Cs', sampleCs)
const Fs = new BaseBallTeam('Fs', sampleFs)
const Hs = new BaseBallTeam('Hs', sampleHs)
const Es = new BaseBallTeam('Es', sampleEs)
const Os = new BaseBallTeam('Os', sampleOs)
const Ls = new BaseBallTeam('Ls', sampleLs)
const Ms = new BaseBallTeam('Ms', sampleMs)

const GsVsTs = new Game(Gs, Ts).judge()
const GsVsDs = new Game(Gs, Ds).judge()

/*
①全チームの配列を作る
②2チームずつ全ての組み合わせで戦わせる
（①の配列から2チーム抽出し戦わせ、過去に戦ったことのある組み合わせの場合戦わず次の抽出へ）
⓷１−１２位まで順位をつける
（ウイニングポイントが多い順に並べ替え、同順位が出たらルージングポイントが少ない順、それでも同じならランダム）
④完成
*/

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
