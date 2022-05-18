let DecimalToBinary = (N, NumberOfLiterals) => {
  let Ans = "";
  while (N) {
    Ans += (N % 2) + "";
    N = Math.floor(N / 2);
  }
  while (Ans.length < NumberOfLiterals) Ans += "0";
  Ans = Ans.split("").reverse().join("");
  return Ans;
};

export default DecimalToBinary;
