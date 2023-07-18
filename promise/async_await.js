const wait = async (ms) => {
  return new Promise(
    (resolve) =>
      setTimeout(resolve, ms)
  );
};

async function messagesWithTimer(time){
  await wait(time);
  console.log("Message 1");
  await wait(time);
  console.log("Message 2");
  await wait(time);
  console.log("Message 3");
}
messagesWithTimer(1000);
console.log("Message final");
