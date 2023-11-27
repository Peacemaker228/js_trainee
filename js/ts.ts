export {};

function sleep(delay: number, fn: () => void) {
  return new Promise((res) => {
    setTimeout(() => res(fn()), delay);
  });
}

const first = () => sleep(1000, () => console.log('first'));
const second = () => sleep(500, () => console.log('second'));
const third = () => sleep(250, () => console.log('third'));

function asyncCreator() {
  let isLoading = false;
  const queue: Array<() => Promise<unknown>> = [];

  const awaited = async (
    fn: () => Promise<unknown>,
    fromRecursion?: boolean,
  ) => {
    if (!fromRecursion) {
      queue.push(fn);
    }

    if (isLoading) return;

    isLoading = true;

    await fn();

    queue.shift();
    isLoading = false;

    if (queue.length) {
      await awaited(queue[0], true);
    }
  };

  return { awaited };
}

const { awaited } = asyncCreator();

awaited(first);
awaited(second);
awaited(third);
