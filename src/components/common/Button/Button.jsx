import { useContext } from "react";
import { AppContext } from "../../../provider/provider";
import s from "./Button.module.scss";

export default function Button({ name, handleClick }) {
  // const { isClicked, setIsClicked } = useContext(AppContext);

  return (
    <button onClick={handleClick} className={s.btn}>
      {name}
    </button>
  );
}
