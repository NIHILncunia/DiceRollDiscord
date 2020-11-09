const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const dice = require('./dice');
const prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {

  if (!msg.content.startsWith(`${prefix}`)) {
    return;
  }

  if (msg.content.startsWith(`${prefix}DiceRoll`)) {
    msg.channel.send('https://thediceroll.github.io/');
  }

  if (msg.content.startsWith(`${prefix}diceroll`)) {
    msg.channel.send('https://thediceroll.github.io/');
  }

  if (msg.content.startsWith(`${prefix}help`)) {
    msg.channel.send(`\`\`\`존재하는 명령어는 다음과 같습니다.\n+ - DiceRoll의 접두어입니다.\n+DiceRoll(diceroll) - DiceRoll 웹 링크를 보여줍니다.\n+help - 봇의 명령어를 보여줍니다.\n+roll nDn - 주사위를 굴립니다. ex) d20+4, 2d20+3d30+5\n+rmin - 주사위를 최소값으로 굴립니다.\n+rmax - 주사위를 최대값으로 굴립니다.\`\`\``);
  }

  if (msg.content.startsWith(`${prefix}roll`)) {
    const message = msg.content;
    msg.channel.send(`${dice(message, 'normal')}`);
  }

  if (msg.content.startsWith(`${prefix}rmin`)) {
    const message = msg.content;
    msg.channel.send(`${dice(message, 'minimum')}`);
  }

  if (msg.content.startsWith(`${prefix}rmax`)) {
    const message = msg.content;
    msg.channel.send(`${dice(message, 'maximum')}`);
  }
});

client.login(config.token);