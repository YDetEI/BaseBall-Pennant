import { BaseBallTeam } from "../models/BaseBallTeam.model";

export class game {
   baseBallTeam1: BaseBallTeam
   baseBallTeam2: BaseBallTeam

   constructor(baseBallTeam1: BaseBallTeam, baseBallTeam2: BaseBallTeam){
     this.baseBallTeam1 = BaseBallTeam
     this.baseBallTeam2 = BaseBallTeam
   }

   judge(){
       console.log(BaseBallTeam.Player.Catcher.Ability + BaseBallTeam.Player.First.Ability)

   }
}


