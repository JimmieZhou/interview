```js
const sleep = (fn, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn);
    }, delay);
  });
};
const say = (content) => {
  console.log(`say：${content}`);
};
async function autoplay() {
  await sleep(say("1"));
  await sleep(say("2"));
  await sleep(say("3"));
}
autoplay()
```