function* moviePartGenerator() {
  try {
    yield firstHalf();
    yield interval();
    yield SecondHalf();
  } catch (e) {
    console.log(e.message);
  }
}

function firstHalf() {
  return console.log("Enjoy opening sequence...");
}

function interval() {
  return console.log("Enjoy your popcorn...");
}

function SecondHalf() {
  return console.log("Enjoy climax...");
}

console.log("\n***** Generator *****\n");
const part = moviePartGenerator();
part.next();
part.next();
part.next();

async function moviePartAsynAwait() {
  try {
    await firstHalf();
    await interval();
    await SecondHalf();
  } catch (e) {
    console.log(e.message);
  }
}

console.log("\n***** Async/Await *****\n");
moviePartAsynAwait();
