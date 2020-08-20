var superagent = require('superagent');
var expect = require('expect');

const url = process.env.APP_URL;

if (!url) {
  throw new Error('Test process requires that env variable `APP_URL` is set');
}

console.log(`Running tests against environment ${url}`);

test('should be able to reverse a simple string', async () => {
  const res = await superagent.post(url).send('Hello');
  expect(res.text).toEqual('olleH');
});