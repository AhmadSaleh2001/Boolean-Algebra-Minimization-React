let ConstructTerm = (Ans, Letters, PickedForAns) => {
  let FinalAns = "";
  for (let X of Ans) {
    let L = X.length;
    let MinAns = "";
    for (let i = 0; i < L; i++) {
      if (X[i] === "-") continue;
      MinAns += Letters[i];
      if (X[i] === "0") MinAns += "'";
    }
    if (!PickedForAns[MinAns]) {
      PickedForAns[MinAns] = 1;
      FinalAns += MinAns;
      FinalAns += " + ";
    }
  }
  return FinalAns;
};

export default ConstructTerm;
