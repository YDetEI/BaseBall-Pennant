import { BaseBallTeam } from "./models/BaseBallTeam.model"
import { Player } from "./models/Player.model"
import { BASEBALL_TEAMS } from "./type"



console.log("-------------------")

const baseballTeams: BaseBallTeam[] = []

BASEBALL_TEAMS.forEach(team => {
  baseballTeams.push(new BaseBallTeam(team))
})


baseballTeams.forEach(team => {
  team.hello()
})

const tigers = baseballTeams[0]
tigers.hello()

const Ichiro = new Player('イチロー', 10000000000, 'Fielder')

// const giants = new BaseBallTeam(BASEBALL_TEAMS[0])
// giants.hello();

// const ティガース = new BaseBallTeam("ティガース")
// ティガース.hello();