import { Game } from "./lib/gameUtil"
import { BaseBallTeam } from "./models/BaseBallTeam.model"
import { Player } from "./models/Player.model"
import { sampleGs, sampleTs } from "./sampledata/samplePlayer"
import { BASEBALL_TEAMS } from "./type"


const Gs = new BaseBallTeam("Gs", sampleGs)
const Ts = new BaseBallTeam("Ts", sampleTs)


/*
const Gs = new BaseBallTeam("Gs", samplePlayers)
const Hanshin = new BaseBallTeam("Hanshin", samplePlayers)
const ヤンキース = new BaseBallTeam("ヤンキース", samplePlayers)
const Yokohamas = new BaseBallTeam("Yokohamas", sampleYokohama)

const GsVsHanshin = new Game(Gs, Hanshin)
*/
