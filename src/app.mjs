import AskForInput from './readline';
import automation from './automation';

const question = new AskForInput();

const query = question.ask('Name of artist or band lyrics you are looking for: ');

query.then((answer) => {
  console.log(`Looking for ${answer} lyrics`);
  automation(answer);
})

