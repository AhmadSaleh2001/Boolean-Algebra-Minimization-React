import { useState } from "react";
import DecimalToBinary from "../Helper/DecimalToBinary";
import QuineMcClusky from "../Helper/QuineMcClusky";
import Modal from "../components/Modal";
let MinTerm = () => {
  let [NumberOfLiterals, SetNumberOfLiterals] = useState(0);
  let [Ans, SetAns] = useState("");
  let [MinTerms, SetMinTerms] = useState("");
  let [Error, SetError] = useState(false);
  let [MessageError, SetMessageError] = useState("");
  let ChangeStateError = () => {
    SetError(!Error);
  };
  let Solve = () => {
    let Arr = MinTerms.split(",");
    if (!MinTerms.length) {
      SetAns("No Need Circut => Answer Function Is 0");
      return;
    }
    let CheckIfCorrectMinTerm = (X) => {
      let L = X.length;
      for (let i = 0; i < L; i++) {
        if (X[i] === "-") continue;
        if (X[i] === " ") {
          SetMessageError("Please No Spaces Between MinTerms :)");
          return 0;
        }
        if (!(X[i] >= "0" && X <= "9")) {
          SetMessageError("Please Enter Only Numbers");
          return 0;
        }
      }
      let Num = parseInt(X);
      if (Num < 0 || Num > Math.pow(2, NumberOfLiterals) - 1) {
        SetMessageError(
          `Please ... Each MinTerm Must Be Between 0 And ${
            Math.pow(2, NumberOfLiterals) - 1
          }`
        );
        return 0;
      }
      return 1;
    };

    for (let X of Arr) {
      if (!CheckIfCorrectMinTerm(X)) {
        SetError(!Error);
        return;
      }
    }
    let BinaryArray = [];
    for (let X of Arr) BinaryArray.push(DecimalToBinary(X, NumberOfLiterals));

    let TAns = QuineMcClusky(BinaryArray, NumberOfLiterals);

    if (TAns === " + ") {
      SetAns("No Need Circut => Answer Function Is 1");
      return;
    }
    SetAns(TAns.substring(0, TAns.length - 2));
  };
  return (
    <div className="MinTerms">
      <div className="container">
        {Error && (
          <Modal Message={MessageError} ChangeStateError={ChangeStateError} />
        )}
        <h1>MinTerms</h1>
        <div className="Item">
          <label htmlFor="">Enter Number Of Literals</label>
          <input
            type="number"
            value={NumberOfLiterals}
            onChange={(E) => SetNumberOfLiterals(E.target.value)}
          />
        </div>

        {NumberOfLiterals > 0 && (
          <div className="Item">
            <label htmlFor="">Enter Min Terms : </label>
            <textarea
              rows="3"
              cols="50"
              value={MinTerms}
              onChange={(E) => SetMinTerms(E.target.value)}
            ></textarea>
            <button onClick={() => Solve()}>Solve</button>
          </div>
        )}

        {NumberOfLiterals > 0 && (
          <div className="Item">
            <h3>Ans : {Ans}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinTerm;
