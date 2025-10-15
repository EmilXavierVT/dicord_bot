import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

// 🧁 Add this block
const CUPCAKE_COMMAND = {
  name: 'cupcake',
  description: 'Get a cupcake link!',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};


const FRIDAY_COMMAND = {
  name: 'erdetfredag',
  description: 'Get a friday link!',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [TEST_COMMAND, CHALLENGE_COMMAND, CUPCAKE_COMMAND, FRIDAY_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
