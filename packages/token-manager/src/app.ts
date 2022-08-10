import { sum } from './utils/math';

function loadEnv(): void {
  const EXAMPLE_KEY = `${process.env.EXAMPLE_KEY}`;

  console.log({ EXAMPLE_KEY });
}

function start(): void {
  console.log('Hi', sum(1, 19));
  loadEnv();
}

export default start;
