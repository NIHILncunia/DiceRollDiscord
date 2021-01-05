module.exports = (message, type) => {
  
  const values = message.split(' ');

  // 비어있는 원소가 있으면 없애버린다.
  while (values.includes('+roll')) {
    if (values.indexOf('+roll') != -1) {
      values.splice(values.indexOf('+roll'), 1);
    }
  }

  while (values.includes('+rmin')) {
    if (values.indexOf('+rmin') != -1) {
      values.splice(values.indexOf('+rmin'), 1);
    }
  }

  while (values.includes('+rmax')) {
    if (values.indexOf('+rmax') != -1) {
      values.splice(values.indexOf('+rmax'), 1);
    }
  }

  // 배열이 비어있으면 실행하지 않는다.
  if (values.length == 0) {
    return '에러 1: 값이 비었습니다. 도움말을 참고하세요.';
  }
  
  // 숫자를 입력하지 않으면 실행하지 않는다.
  if (values.indexOf('d' || 'ㅇ') != -1) {
    if (values.indexOf('1' || '2' || '3' || '4') == -1) {
      return '에러 2: 숫자를 같이 입력하세요.';
    } else if (values.indexOf('5' || '6' || '7') == -1) {
      return '에러 2: 숫자를 같이 입력하세요.';
    } else if (values.indexOf('8' || '9' || '0') == -1) {
      return '에러 2: 숫자를 같이 입력하세요.';
    }
  }
  
  // D를 두개 적으면 실행하지 않는다.
  if (values.includes('DD' && 'dd')) {
    return '에러 3: D는 하나만 입력하고 숫자를 입력해야 합니다.';
  }

  let value;

  let dice;
  let mod;
  let roll;
  let rollBox = [];
  let totalRolls = [];
  let resultBox = [];
  let allResult = [];

  for (let i = 0; i <= values.length - 1; i++) {
    // 더할 값을 정확하게 입력하지 않으면 실행하지 않는다.
    if (values[i].indexOf('+') == values[i].length - 1) {
      return '에러 5: 더할 값을 정확히 입력해야 합니다.';
    }

    const dicesString = /\w+(?=[D])/i;
    const suffixString = /(?<=d)[0-9.]+/i;
    
    if (values[i].match(/[dㅇ]/gi) != -1) {
      value = values[i].replace(/[dㅇ]/gi, 'D');
    }

    const diceOne = value.split('+');

    while (diceOne.includes('')) {
      if (diceOne.indexOf('') != -1) {
        diceOne.splice(diceOne.indexOf(''), 1);
      }
    }

    // +를 두개 이상 입력하면 실행하지 않는다.
    if (diceOne.indexOf('++') != - 1) {
      return '에러 6: +는 하나만 입력하고 숫자를 입력해야 합니다.';
    }

    for (let j = 0; j <= diceOne.length - 1; j++) {
      if (diceOne[j].indexOf('D') == diceOne[j].length - 1) {
        return '에러 4: D 뒤에 숫자를 입력해야합니다.';
      } else if (diceOne[j].indexOf('DD') != - 1) {
        return '에러 3: D는 하나만 입력하고 숫자를 입력해야 합니다.';
      }

      if (diceOne[j].includes('D')) {
        dice = diceOne[j];

        const dicesArray = dice.match(dicesString);
        let dices = dicesArray ? Number(dicesArray[0]) : 1;

        const suffixArray = dice.match(suffixString);
        let suffix = Number(suffixArray[0]);

        for (let r = 0; r < dices; r++) {
          if (type == 'maximum') {
            roll = suffix;
          } else if (type == 'minimum') {
            roll = 1;
          } else if (type == 'normal') {
            roll = Math.ceil(Math.random() * suffix);
          }

          rollBox.push(roll);
        }

        const total = rollBox.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0);

        if (rollBox.length === 1) {
          const rollResult = `${total}`;
          resultBox.push(rollResult);
        } else {
          const rollResult = `${rollBox.join('+')}=${total}`;
          resultBox.push(rollResult);
        }

        totalRolls.push(total);
        rollBox = [];

      } else {
        mod = diceOne[j];

        const rollResult = `${mod}`;
        resultBox.push(rollResult);

        totalRolls.push(mod);
      }
    }
  }

  const totalDice = totalRolls.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0);

  return `결과: **${totalDice}** (${resultBox.join(',  ')})`;
}