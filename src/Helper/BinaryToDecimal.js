let BinaryToDecimal = (S) => {
  let Ans = 0;
  let Cnt = 1;
  let L = S.length;
  while (L--) {
    Ans += Cnt * (S[L] - "0");
    Cnt <<= 1;
  }

  return Ans;
};

export default BinaryToDecimal;
