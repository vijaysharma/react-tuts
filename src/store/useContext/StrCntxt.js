import {createContext, useState } from "react";

// class StrCntxt extends Component {
//   static cntxtState = "Hello Context!!";
//   static get cntxtValue() {
//     return StrCntxt.cntxtState;
//   }
//   static set cntxtValue(nv) {
//     StrCntxt.cntxtState = nv;
//   }
//   static cntxt = createContext(StrCntxt.cntxtValue);
//
//   render() {
//     return (
//       <StrCntxt.cntxt.Provider value={StrCntxt.cntxtValue}>
//         {this.props.children}
//       </StrCntxt.cntxt.Provider>
//     );
//   }
// }

export const Cntxt = (() =>
  createContext("Context Value while creating this Contxet"))();

const StrCntxt = ({ children }) => {
  const [cntxtValue, setCntxtValue] = useState("Hello Context!!");
  return (
    <Cntxt.Provider value={{ value: cntxtValue, fn: setCntxtValue }}>
      {children}
    </Cntxt.Provider>
  );
};
export default StrCntxt;
