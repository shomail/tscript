/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let oneAgo = 0;
  let twoAgo = 1;
  while (true) {
    let nextValue = twoAgo + oneAgo;
    yield nextValue;
    // yield last + lastlast;
    twoAgo = oneAgo;
    oneAgo = nextValue;
  }
}
