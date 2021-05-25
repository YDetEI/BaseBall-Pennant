import { Player } from "../models/Player.model"
import { PlayerType } from "../type"


export const samplePlayers: Player[] =[{ name: 'GsCatcher',
ability: 70,
playerType: 'Catcher'
},
{ name: 'GsFirst',
ability: 70,
playerType: 'First'
}]

export const sampleYokohama: Player[] =[{ name: 'YokohamaCatcher',
ability: 70,
playerType: 'Catcher'
},
{ name: 'YokohamaFirst',
ability: 70,
playerType: 'First'
}]




/*


{ name: 'GsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Gs'
},
{ name: 'GsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Gs'
},
{ name: 'GsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Gs'
},
{ name: 'GsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Gs'
},
{ name: 'GsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Gs'
},
{ name: 'GsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Gs'
},
{ name: 'GsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Gs'
},
{ name: 'GsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Gs'
},
{ name: 'GsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Gs'
},
{ name: 'GsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Gs'
},
{ name: 'GsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Gs'
},
{ name: 'GsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Gs'
},
{ name: 'GsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Gs'
},
{ name: 'GsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Gs'
},


{ name: 'TsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Ts'
},
{ name: 'TsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Ts'
},
{ name: 'TsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Ts'
},
{ name: 'TsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Ts'
},
{ name: 'TsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Ts'
},
{ name: 'TsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Ts'
},
{ name: 'TsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Ts'
},
{ name: 'TsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Ts'
},
{ name: 'TsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Ts'
},
{ name: 'TsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Ts'
},
{ name: 'TsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Ts'
},
{ name: 'TsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Ts'
},
{ name: 'TsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Ts'
},
{ name: 'TsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Ts'
},


{ name: 'DsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Ds'
},
{ name: 'DsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Ds'
},
{ name: 'DsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Ds'
},
{ name: 'DsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Ds'
},
{ name: 'DsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Ds'
},
{ name: 'DsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Ds'
},
{ name: 'DsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Ds'
},
{ name: 'DsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Ds'
},
{ name: 'DsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Ds'
},
{ name: 'DsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Ds'
},
{ name: 'DsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Ds'
},
{ name: 'DsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Ds'
},
{ name: 'DsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Ds'
},
{ name: 'DsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Ds'
},


{ name: 'BsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Bs'
},
{ name: 'BsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Bs'
},
{ name: 'BsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Bs'
},
{ name: 'BsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Bs'
},
{ name: 'BsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Bs'
},
{ name: 'BsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Bs'
},
{ name: 'BsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Bs'
},
{ name: 'BsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Bs'
},
{ name: 'BsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Bs'
},
{ name: 'BsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Bs'
},
{ name: 'BsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Bs'
},
{ name: 'BsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Bs'
},
{ name: 'BsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Bs'
},
{ name: 'BsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Bs'
},


{ name: 'SsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Ss'
},
{ name: 'SsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Ss'
},
{ name: 'SsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Ss'
},
{ name: 'SsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Ss'
},
{ name: 'SsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Ss'
},
{ name: 'SsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Ss'
},
{ name: 'SsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Ss'
},
{ name: 'SsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Ss'
},
{ name: 'SsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Ss'
},
{ name: 'SsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Ss'
},
{ name: 'SsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Ss'
},
{ name: 'SsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Ss'
},
{ name: 'SsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Ss'
},
{ name: 'SsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Ss'
},


{ name: 'CsCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 'Cs'
},
{ name: 'CsFirst',
ability: 70,
playerType: 'First',
affiliation: 'Cs'
},
{ name: 'CsSecond',
ability: 70,
playerType: 'Second',
affiliation: 'Cs'
},
{ name: 'CsThird',
ability: 70,
playerType: 'Third',
affiliation: 'Cs'
},
{ name: 'CsShort',
ability: 70,
playerType: 'Short',
affiliation: 'Cs'
},
{ name: 'CsLeft',
ability: 70,
playerType: 'Left',
affiliation: 'Cs'
},
{ name: 'CsCenter',
ability: 70,
playerType: 'Center',
affiliation: 'Cs'
},
{ name: 'CsRight',
ability: 70,
playerType: 'Right',
affiliation: 'Cs'
},
{ name: 'CsDH',
ability: 70,
playerType: 'DH',
affiliation: 'Cs'
},
{ name: 'CsPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 'Cs'
},
{ name: 'CsPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 'Cs'
},
{ name: 'CsPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 'Cs'
},
{ name: 'CsPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 'Cs'
},
{ name: 'CsPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 'Cs'
},

*/





/*

{ name: 'sCatcher',
ability: 70,
playerType: 'Catcher',
affiliation: 's'
},
{ name: 'sFirst',
ability: 70,
playerType: 'First',
affiliation: 's'
},
{ name: 'sSecond',
ability: 70,
playerType: 'Second',
affiliation: 's'
},
{ name: 'sThird',
ability: 70,
playerType: 'Third',
affiliation: 's'
},
{ name: 'sShort',
ability: 70,
playerType: 'Short',
affiliation: 's'
},
{ name: 'sLeft',
ability: 70,
playerType: 'Left',
affiliation: 's'
},
{ name: 'sCenter',
ability: 70,
playerType: 'Center',
affiliation: 's'
},
{ name: 'sRight',
ability: 70,
playerType: 'Right',
affiliation: 's'
},
{ name: 'sDH',
ability: 70,
playerType: 'DH',
affiliation: 's'
},
{ name: 'sPitcher1',
ability: 80,
playerType: 'Pitcher',
affiliation: 's'
},
{ name: 'sPitcher2',
ability: 75,
playerType: 'Pitcher',
affiliation: 's'
},
{ name: 'sPitcher3',
ability: 70,
playerType: 'Pitcher',
affiliation: 's'
},
{ name: 'sPitcher4',
ability: 65,
playerType: 'Pitcher',
affiliation: 's'
},
{ name: 'sPitcher5',
ability: 60,
playerType: 'Pitcher',
affiliation: 's'
},

*/
