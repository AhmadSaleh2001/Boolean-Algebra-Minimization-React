import { useLocation } from "react-router-dom";
let GetCurrLocation = () => {
  const Loc = useLocation();
  return Loc.pathname;
};

export default GetCurrLocation;
