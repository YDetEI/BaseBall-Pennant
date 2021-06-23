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
const GsvsSs = new Game(Gs, Ss).judge()
const GsvsBs = new Game(Gs, Bs).judge()
const GsvsCs = new Game(Gs, Cs).judge()
const GsvsFs = new Game(Gs, Fs).judge()
const GsvsHs = new Game(Gs, Hs).judge()
const GsvsEs = new Game(Gs, Es).judge()
const GsvsOs = new Game(Gs, Os).judge()
const GsvsLs = new Game(Gs, Ls).judge()
const GsvsMs = new Game(Gs, Ms).judge()
const TsvsDs = new Game(Ts, Ds).judge()
const TsvsSs = new Game(Ts, Ss).judge()
const TsvsBs = new Game(Ts, Bs).judge()
const TsvsCs = new Game(Ts, Cs).judge()
const TsvsFs = new Game(Ts, Fs).judge()
const TsvsHs = new Game(Ts, Hs).judge()
const TsvsEs = new Game(Ts, Es).judge()
const TsvsOs = new Game(Ts, Os).judge()
const TsvsLs = new Game(Ts, Ls).judge()
const TsvsMs = new Game(Ts, Ms).judge()
const DsvsSs = new Game(Ds, Ss).judge()
const DsvsBs = new Game(Ds, Bs).judge()
const DsvsCs = new Game(Ds, Cs).judge()
const DsvsFs = new Game(Ds, Fs).judge()
const DsvsHs = new Game(Ds, Hs).judge()
const DsvsEs = new Game(Ds, Es).judge()
const DsvsOs = new Game(Ds, Os).judge()
const DsvsLs = new Game(Ds, Ls).judge()
const DsvsMs = new Game(Ds, Ms).judge()
const SsvsBs = new Game(Ss, Bs).judge()
const SsvsCs = new Game(Ss, Cs).judge()
const SsvsFs = new Game(Ss, Fs).judge()
const SsvsHs = new Game(Ss, Hs).judge()
const SsvsEs = new Game(Ss, Es).judge()
const SsvsOs = new Game(Ss, Os).judge()
const SsvsLs = new Game(Ss, Ls).judge()
const SsvsMs = new Game(Ss, Ms).judge()
const BsvsCs = new Game(Bs, Cs).judge()
const BsvsFs = new Game(Bs, Fs).judge()
const BsvsHs = new Game(Bs, Hs).judge()
const BsvsEs = new Game(Bs, Es).judge()
const BsvsOs = new Game(Bs, Os).judge()
const BsvsLs = new Game(Bs, Ls).judge()
const BsvsMs = new Game(Bs, Ms).judge()
const CsvsFs = new Game(Cs, Fs).judge()
const CsvsHs = new Game(Cs, Hs).judge()
const CsvsEs = new Game(Cs, Es).judge()
const CsvsOs = new Game(Cs, Os).judge()
const CsvsLs = new Game(Cs, Ls).judge()
const CsvsMs = new Game(Cs, Ms).judge()
const FsvsHs = new Game(Fs, Hs).judge()
const FsvsEs = new Game(Fs, Es).judge()
const FsvsOs = new Game(Fs, Os).judge()
const FsvsLs = new Game(Fs, Ls).judge()
const FsvsMs = new Game(Fs, Ms).judge()
const HsvsEs = new Game(Hs, Es).judge()
const HsvsOs = new Game(Hs, Os).judge()
const HsvsLs = new Game(Hs, Ls).judge()
const HsvsMs = new Game(Hs, Ms).judge()
const EsvsOs = new Game(Es, Os).judge()
const EsvsLs = new Game(Es, Ls).judge()
const EsvsMs = new Game(Es, Ms).judge()
const OsvsLs = new Game(Os, Ls).judge()
const OsvsMs = new Game(Os, Ms).judge()
const LsvsMs = new Game(Ls, Ms).judge()

/*
①全チームの配列を作る
②2チームずつ全ての組み合わせで戦わせる
（①の配列から2チーム抽出し戦わせ、過去に戦ったことのある組み合わせの場合戦わず次の抽出へ）
foreach?
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
