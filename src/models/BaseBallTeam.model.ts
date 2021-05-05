export class BaseBallTeam {
  public name: string

  constructor(name: string){
      this.name = name
  }

  public hello(){
      console.log("チーム名は"+ this.name)
  }

}