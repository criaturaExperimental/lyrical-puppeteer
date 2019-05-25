import AskForInput from './readline';
import automation from './automation';
import queryAdapter from './adapters/queryAdapter';

const question = new AskForInput();

const query = question.ask('Name of artist or band lyrics you are looking for: ');

query.then((answer) => {
  answer = queryAdapter(answer);
  console.log(answer);
  automation(answer);
})

