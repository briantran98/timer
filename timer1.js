const functionRunner = (cb) => {
  const input = process.argv.slice(2);
  for (const data of input) {
    if (Number(input) && input > 0) {
      setTimeout(()=> {
        cb();
      }, data*1000)
    }
  }
}
const alarm = () => {
  process.stdout.write('\x07');
}
functionRunner(alarm);