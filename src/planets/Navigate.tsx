import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Navigate() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mercury");
  },[]);

  return <></>;
}

export default Navigate;
