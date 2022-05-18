let NumberOfOnes = (N) => {
  let Ans = 0;
  for (let i = 0; i < N.length; i++) Ans += N[i] === "1";

  return Ans;
};

export default NumberOfOnes;
