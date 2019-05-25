import readline from 'readline'

export default class AskForInput {
  constructor(){
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  ask(question) {
    this.rl.question(question, (answer) => {
      console.log(`That's a good answer: ${answer}`)
      this.rl.close();
    })
  }
}