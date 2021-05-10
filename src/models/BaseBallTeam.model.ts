import { Player } from "./Player.model"


const playerList2: Player[] = [
  
  /*
  { name: 'Darvish',
  ability: 9999,
  playerType: 'Pitcher',
  affiliation: 'Gs'
  }
  */

]



export class BaseBallTeam {
  public name: string
  public players: Player[] = []
  // カプセル化

  constructor(name: string, playerList: Player[]){
      this.name = name
      playerList2.forEach(player => {
        console.log(player)
        // const name = player.name
        // const ability = player.ability
        // const playerType = player.playerType
        // const belong = player.affiliation
        // this.players.push(new Player(name, ability, playerType, belong))
      })
      console.log(this)
  }



  public hello(){
      // console.log("チーム名は"+ this.name)
      // this.players.forEach(p => {
      //   console.log(p)
      // })
  }

}