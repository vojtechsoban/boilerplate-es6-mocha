/**
 *
 * @param X
 * @param Y
 * @returns {*}
 */

export function solution(X, Y) {
  return X + Y;
}


export function sumOddNumbers(...params) {
  return params.filter((number => number % 2 === 1)).reduce((acc, value) => acc + value, 0)
}
