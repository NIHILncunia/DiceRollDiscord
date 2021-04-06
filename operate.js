module.exports = (message, type) => {
  const values = message.split(' ');

  while (values.includes('-p')) {
    if (values.indexOf('-p') != -1) {
      values.splice(values.indexOf('-p'), 1);
    }
  }

  while (values.includes('-m')) {
    if (values.indexOf('-m') != -1) {
      values.splice(values.indexOf('-m'), 1);
    }
  }

  while (values.includes('-s')) {
    if (values.indexOf('-s') != -1) {
      values.splice(values.indexOf('-s'), 1);
    }
  }

  while (values.includes('-d')) {
    if (values.indexOf('-d') != -1) {
      values.splice(values.indexOf('-d'), 1);
    }
  }

  const first = Number(values[0]);
  const second = Number(values[1]);
  let result;

  switch (type) {
    case 'add':
      result = `결과: ***${first + second}*** (${first} + ${second})`;
      break;
    case 'multi':
      result = `결과: ***${first * second}*** (${first} × ${second})`;
      break;
    case 'sub':
      result = `결과: ***${first - second}*** (${first} - ${second})`;
      break;
    case 'division':
      result = `결과: ***${first / second}*** (${first} ÷ ${second})`;
      break;
  }

  return result;
};