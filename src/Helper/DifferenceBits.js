let DifferenceBits = (S1, S2) => {
  let Ans = 0;
  let L = S1.length;
  for (let i = 0; i < L; i++) Ans += S1[i] !== S2[i];

  return Ans;
};

export default DifferenceBits;
