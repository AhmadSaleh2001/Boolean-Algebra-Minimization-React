import NumberOfOnes from "./NumberOfOnes";
import BinaryToDecimal from "./BinaryToDecimal";
import DifferenceBits from "./DifferenceBits";
import GetEPI from "./GetEPI";
import GetPI from "./GetPI";
import ConstructTerm from "./ConstructTerm";
let QuineMcClusky = (BinaryArray, NumberOfLiterals) => {
  let Letters = [];
  let Cnt = 97;
  if (!isNaN(NumberOfLiterals)) {
    while (NumberOfLiterals--) {
      Letters.push(String.fromCharCode(Cnt++));
    }
  } else Letters = [...NumberOfLiterals];
  let Groups = [];
  let MainAns = [];
  for (var X of BinaryArray) {
    let NOnes = NumberOfOnes(X);
    if (!Groups[NOnes]) Groups[NOnes] = new Array();
    Groups[NOnes].push({ F: X, S: BinaryToDecimal(X) + "" });
  }
  while (1) {
    let MinGroups = [];
    let Picked = [];
    let SizeGroups = Groups.length;
    let Found = 0;
    for (let i = 0; i < SizeGroups - 1; i++) {
      let FirstArray = Groups[i];
      let SecondArray = Groups[i + 1];
      if (!FirstArray || !SecondArray) continue;
      let Size1 = FirstArray.length;
      let Size2 = SecondArray.length;
      for (let j = 0; j < Size1; j++) {
        for (let k = 0; k < Size2; k++) {
          let Diff = DifferenceBits(FirstArray[j].F, SecondArray[k].F);
          if (Diff === 1) {
            Picked[FirstArray[j].F] = Picked[SecondArray[k].F] = 1;
            let New = "";
            let MinL = FirstArray[j].F.length;
            for (let i = 0; i < MinL; i++) {
              if (FirstArray[j].F[i] === SecondArray[k].F[i])
                New += SecondArray[k].F[i];
              else New += "-";
            }
            if (!Picked[New]) {
              // console.log("New : " + New);
              Picked[New] = 1;
              let NOnes = NumberOfOnes(New);
              if (!MinGroups[NOnes]) MinGroups[NOnes] = new Array();
              MinGroups[NOnes].push({
                F: New,
                S: FirstArray[j].S + "," + SecondArray[k].S,
              });
              Found |= 1;
            }
          }
        }
      }
    }
    for (let i = 0; i < SizeGroups; i++) {
      if (!Groups[i]) continue;
      for (let X of Groups[i]) {
        if (!Picked[X.F]) {
          Picked[X.F] = 1;
          MainAns.push({ F: X.F, S: X.S });
        }
      }
    }
    // console.log(`##########  ##########`);
    Groups = [];
    Groups = MinGroups;
    // console.log(Groups);
    // console.log(MainAns);
    if (!Found) break;
  }
  let Frq = [];
  let Terms = [];
  for (let X of MainAns) {
    let MinArr = X.S.split(",");
    Terms.push(X.F);
    for (let X2 of MinArr) {
      if (!Frq[X2]) Frq[X2] = 0;
      Frq[X2]++;
    }
  }
  let FinalAns = "";
  let PickedForAns = [];
  Cnt = 1;
  while (1) {
    if (Cnt & 1) {
      let AnsEPI = GetEPI(Frq, MainAns);
      let Ans = AnsEPI.Ans;
      Frq = AnsEPI.Frq;
      if (!Ans.length) break;
      let Constructed = ConstructTerm(Ans, Letters, PickedForAns);
      FinalAns += Constructed;
    } else {
      let AnsEPI = GetPI(Frq, MainAns);
      let Ans = AnsEPI.Ans;
      Frq = AnsEPI.Frq;
      if (!Ans.length) break;
      let Constructed = ConstructTerm(Ans, Letters, PickedForAns);
      FinalAns += Constructed;
    }
    Cnt++;
  }

  return FinalAns;
};

export default QuineMcClusky;
