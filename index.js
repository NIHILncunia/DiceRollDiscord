const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const prefix = config.prefix;

const dice = require('./dice');
const operate = require('./operate');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {

  if (!msg.content.startsWith(`${prefix}`)) {
    return;
  }

  if (msg.content.startsWith(`${prefix}diceroll`)) {
    msg.channel.send('https://thediceroll.github.io/');
  }

  if (msg.content.startsWith(`${prefix}help`)) {
    msg.channel.send(`\`\`\`존재하는 명령어는 다음과 같습니다.\n- - DiceRoll의 접두어입니다.\n-DiceRoll(diceroll) - DiceRoll 웹 링크를 보여줍니다.\n-help - 봇의 명령어를 보여줍니다.\n-roll nDn - 주사위를 굴립니다. ex) d20+4, 2d20+3d30+5\n-rmin - 주사위를 최소값으로 굴립니다.\n-rmax - 주사위를 최대값으로 굴립니다.\n-p - 더하기 연산을 합니다. ex) +p 1 5 => 6\n-m - 곱하기 연산을 합니다. ex) +p 5 3 => 15\n-s - 빼기 연산을 합니다. ex) +p 5 3 => 2\n-d - 나누기 연산을 합니다. ex) +p 5 3 => 1.66666666667\`\`\``);
  }

  if (msg.content.startsWith(`${prefix}roll`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${dice(message, 'normal')}`);
  }

  if (msg.content.startsWith(`${prefix}rmin`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${dice(message, 'minimum')}`);
  }

  if (msg.content.startsWith(`${prefix}rmax`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${dice(message, 'maximum')}`);
  }

  if (msg.content.startsWith(`${prefix}p`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${operate(message, 'add')}`);
  }

  if (msg.content.startsWith(`${prefix}m`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${operate(message, 'multi')}`);
  }

  if (msg.content.startsWith(`${prefix}s`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${operate(message, 'sub')}`);
  }

  if (msg.content.startsWith(`${prefix}d`)) {
    const message = msg.content;
    msg.channel.send(`${msg.author} ${operate(message, 'division')}`);
  }
});

client.login(config.token);