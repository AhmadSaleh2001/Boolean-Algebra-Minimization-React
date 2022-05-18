let MaxIdx = (Frq, MainAns) => {
  let Size = MainAns.length;
  let Ans = 0;
  let Idx = -1;
  for (let i = 0; i < Size; i++) {
    let Sz = MainAns[i].S.length;
    let MinArr = MainAns[i].S.split(",");
    let Can = 0;
    for (let X of MinArr) {
      Can |= Frq[X] > 0;
    }
    if (Can && Sz > Ans) {
      Ans = Sz;
      Idx = i;
    }
  }

  return Idx;
};
let GetPI = (Frq, MainAns) => {
  let Ans = [];
  let Idx = MaxIdx(Frq, MainAns);
  while (~Idx) {
    Ans.push(MainAns[Idx].F);
    let MinArr = MainAns[Idx].S.split(",");
    for (let X of MinArr) Frq[X] = 0;
    Idx = MaxIdx(Frq, MainAns);
  }
  return { Frq, Ans };
};

export default GetPI;
