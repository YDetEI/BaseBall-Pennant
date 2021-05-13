import { BaseBallTeam } from "../models/BaseBallTeam.model";

export class game {
   baseBallTeam1: BaseBallTeam
   baseBallTeam2: BaseBallTeam

   constructor(baseBallTeam1: BaseBallTeam, baseBallTeam2: BaseBallTeam){
     this.baseBallTeam1 = BaseBallTeam
     this.baseBallTeam2 = BaseBallTeam
   }



   judge(){
       console.log(
         (
         BaseBallTeam.Player.Catcher.Ability + BaseBallTeam.Player.First.Ability + BaseBallTeam.Player.Second.Ability + 
         BaseBallTeam.Player.Third.Ability+ BaseBallTeam.Player.Short.Ability + BaseBallTeam.Player.Left.Ability +　
         BaseBallTeam.Player.Center.Ability+ BaseBallTeam.Player.Right.Ability + BaseBallTeam.Player.DH.Ability）+



         //Pitcher5人からランダムで１人選び、そのAbilityを抽出


　　　　　＊
        ( function getRandom(0.9, 1.1) {
          return Math.random() * (1.1 - 0.9) + 0.9;
        })








       )
   }
}


