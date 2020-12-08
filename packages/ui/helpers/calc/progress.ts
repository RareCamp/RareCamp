export const progress = (setCoins) => () => {
  return setCoins((i: number) => i + 1);
};
