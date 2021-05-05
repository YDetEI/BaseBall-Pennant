class BaseBallTeam {
  name: string

  constructor(name: string){
      this.name = name
  }

  hello(){
      console.log("チーム名は"+ this.name)
  }

}

class Fielder{
  name: string
  ability: number

  constructor(name:string, ability:number){
      this.name = name
      this.ability = ability
  }
}

class Pitcher{
  name: string
  ability: number

  constructor(name:string, ability:number){
      this.name = name
      this.ability = ability
  }
}

console.log("-------------------")

const ジョイアンツ = new BaseBallTeam("ジョイアンツ")
ジョイアンツ.hello();

const ティガース = new BaseBallTeam("ティガース")
ティガース.hello();