//Hooks
import { useEffect } from "react";

import "./Home.css";

//Components
import LeftSideBar from "../../components/LsideBar";

export default function Home() {
  useEffect(() => {
    console.log("make GET request to backend");
  });
  return <LeftSideBar />;
}
