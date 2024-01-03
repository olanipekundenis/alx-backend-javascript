export default function taskBlock(trueOrFalse) {
  const task = false;
  const  task2 = true;

  /* eslint-disable vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-disable vars */

  return [task, task2];
}
