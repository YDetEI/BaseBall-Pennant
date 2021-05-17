import { BaseBallTeam } from "./models/BaseBallTeam.model"
import { Player } from "./models/Player.model"
import { BASEBALL_TEAMS } from "./type"




const list: number[] = [1, 2, 3]
const books: string[] = ['教科書', '漫画']
console.log(books)
books.push('小説')
console.log(books)

// console.log(list)

console.log("-------------------------------------------------------------------------------")


class Human {
  public gender:string
  public JapaneseList: Japanese[] = []

  constructor(gender: string, nameList: string[]){
    this.gender = gender
    nameList.forEach(name => {
      const newJapanese = new Japanese(name)
      this.JapaneseList.push(newJapanese)
    })
  }
}

class Japanese {
  public name: string

  constructor(name: string){
    this.name = name
  }

  hello(){
    console.log(`I am ${this.name}`)
  }
}

const myFriends = ['こうちゃん', 'みっつ', 'MAX']
const human = new Human('male', myFriends)
console.log(human.JapaneseList)
human.JapaneseList.forEach(japanese => japanese.hello())






// const baseballTeams: BaseBallTeam[] = []

// BASEBALL_TEAMS.forEach(team => {
//   baseballTeams.push(new BaseBallTeam(team))
// })


// baseballTeams.forEach(team => {
//   team.hello()
// })

/*
const gs = baseballTeams[0]
gs.hello()

const ts = baseballTeams[1]
ts.hello()

const Ichiro = new Player('イチロー', 4, 'Right')
*/




const playerList: Player[] = [
  { name: 'だるびっしゅ',
    ability: 9999,
    playerType: 'Pitcher',
    affiliation: 'Gs'
  },
  { name: 'じろう',
    ability: 99,
    playerType: 'Pitcher',
    affiliation: 'Gs'
  }
]

// const Gs = new BaseBallTeam('Gs', playerList)
//Gs.hello()


// const Darvish = new Player('ダルビッシュ', 9999, 'Pitcher', 'Gs')

