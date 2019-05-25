import readline from 'readline';

export default class AskForInput {
  constructor(){
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  ask(question) {
    this.rl.setPrompt(question);
    this.rl.prompt();

    return new Promise(resolve => {
        this.rl.on('line', (userInput) => {
            this.answer = userInput;
            this.rl.close();
        });
        this.rl.on('close', () => {
          resolve(this.answer);
      });
    })
  }
}