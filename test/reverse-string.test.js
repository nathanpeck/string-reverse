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

test('should be able to reverse a longer string', async () => {
  const res = await superagent.post(url).send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  expect(res.text).toEqual(".murobal tse di mina tillom tnuresed aiciffo iuq apluc ni tnus ,tnediorp non tatadipuc taceacco tnis ruetpecxE .rutairap allun taiguf ue erolod mullic esse tilev etatpulov ni tiredneherper ni rolod eruri etua siuD .tauqesnoc odommoc ae xe piuqila tu isin sirobal ocmallu noitaticrexe durtson siuq ,mainev minim da mine tU .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL");
});

// Testing a deliberately failing test
test('failing test', async () => {
  const res = await superagent.post(url).send("hey");
  expect(res.text).toEqual("hey");
});