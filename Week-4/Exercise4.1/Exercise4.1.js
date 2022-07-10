const getNumber = (ms) =>
  new Promise((resolve, reject) => {
    const randomValue = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomValue % 5 === 0) {
        reject(`Reject Promise for Number: ${randomValue}`);
      } else {
        resolve(`Resolve Promise for Number: ${randomValue}`);
      }
    }, ms);
  });

getNumber(2000).then(console.log).catch(console.log);
