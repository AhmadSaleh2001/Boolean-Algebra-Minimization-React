let GetEPI = (Frq, MainAns) => {
  let Ans = [];
  let Size = MainAns.length;
  for (let i = 0; i < Size; i++) {
    let MinArr = MainAns[i].S.split(",");
    let Found = 0;
    for (let X2 of MinArr) {
      if (Frq[X2] === 1) {
        Found = 1;
        break;
      }
    }
    if (Found) {
      for (let X2 of MinArr) Frq[X2] = 0;
      Ans.push(MainAns[i].F);
      i = 0;
    }
  }

  return { Ans, Frq };
};

export default GetEPI;
