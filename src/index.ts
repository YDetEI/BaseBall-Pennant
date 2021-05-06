import { BaseBallTeam } from "./models/BaseBallTeam.model"
import { Player } from "./models/Player.model"
import { BASEBALL_TEAMS } from "./type"



console.log("-------------------------------------------------------------------------------")

const baseballTeams: BaseBallTeam[] = []

BASEBALL_TEAMS.forEach(team => {
  baseballTeams.push(new BaseBallTeam(team))
})


baseballTeams.forEach(team => {
  team.hello()
})

/*
const gs = baseballTeams[0]
gs.hello()

const ts = baseballTeams[1]
ts.hello()

const Ichiro = new Player('イチロー', 4, 'Fielder')
const Darvish = new Player('ダルビッシュ', 9999, 'Pitcher')
*/
