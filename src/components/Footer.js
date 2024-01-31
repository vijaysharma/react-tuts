import { useContext } from "react";
import { Cntxt } from "../store/useContext/StrCntxt";
const Header = () => {
  const stCntxt = useContext(Cntxt);
  return (
    <div>
      This is the <code>{`\<Footer\>`}</code> Component. This is the contextAPI
      value: <strong>{stCntxt.value}</strong>
      <button onClick={() => stCntxt.fn("Changed from Footer Component!!")}>
        Change Context Value
      </button>
    </div>
  );
};

export default Header;
