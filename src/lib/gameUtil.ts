import { BaseBallTeam } from "../models/BaseBallTeam.model";

export class game {
   baseBallTeam1: BaseBallTeam
   baseBallTeam2: BaseBallTeam

   constructor(baseBallTeam1: BaseBallTeam, baseBallTeam2: BaseBallTeam){
     this.baseBallTeam1 = BaseBallTeam
     this.baseBallTeam2 = BaseBallTeam
   }

   /*
   ①野手９人のAbilityを抽出し、全て足す
   ②Pitcher5人からランダムで１人選び、そのAbilityを抽出し、①に足す
   ③　②に乱数（０.9〜１.１）をかける
   */


   judge(){
       console.log(
         (
         BaseBallTeam.Player.Catcher.Ability + BaseBallTeam.Player.First.Ability + BaseBallTeam.Player.Second.Ability + 
         BaseBallTeam.Player.Third.Ability+ BaseBallTeam.Player.Short.Ability + BaseBallTeam.Player.Left.Ability +　
         BaseBallTeam.Player.Center.Ability+ BaseBallTeam.Player.Right.Ability + BaseBallTeam.Player.DH.Ability）+



         
         /*
         var items = ['', '', '', '', ''];
         var random = Math.floor( Math.random() * items.length );
         console.log( items[random] );
         */


　　　　　＊
        ( function getRandom(0.9, 1.1) {
          return Math.random() * (1.1 - 0.9) + 0.9;
        })








       )
   }
}


