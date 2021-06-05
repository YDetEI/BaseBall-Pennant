// import { BaseBallTeam } from './models/BaseBallTeam.model'

export type BaseballTeam =
  | 'Gs'
  | 'Ts'
  | 'Ds'
  | 'Ss'
  | 'Bs'
  | 'Cs'
  | 'Fs'
  | 'Hs'
  | 'Es'
  | 'Os'
  | 'Ls'
  | 'Ms'

export const BASEBALL_TEAMS: BaseballTeam[] = [
  'Gs',
  'Ts',
  'Ds',
  'Ss',
  'Bs',
  'Cs',
  'Fs',
  'Hs',
  'Es',
  'Os',
  'Ls',
  'Ms',
]

export type PlayerType =
  | 'Pitcher'
  | 'Catcher'
  | 'First'
  | 'Second'
  | 'Third'
  | 'Short'
  | 'Left'
  | 'Center'
  | 'Right'
  | 'DH'

export type AbilityResult = {
  teamName: BaseballTeam
  result: number
}
