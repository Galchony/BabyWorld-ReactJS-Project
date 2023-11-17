import { useEffect } from "react";

export default function Logout({ onClick, navigate }) {
  onClick();
  useEffect(() => {
    navigate("/");
  },[]);
}
