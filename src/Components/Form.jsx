import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";
// import Select from "./Select";

const Form = () => {
  const toDoContext = useContext(ToDoContext);
  const [textInput, setTextInput] = useState("");

  const toDoListHandler = () => {
    const obj = {
      id: Date.now(),
      title: textInput,
      completed: false,
    };
    toDoContext.setToDoList((prevToDo) => {
      return [...prevToDo, obj];
    });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (checkData()) {
      toDoListHandler();
      clear();
    }
  };

  const checkData = () => {
    if (textInput !== "") {
      return true;
    } else {
      alert("Enter A value");
      return false;
    }
  };
  const clear = () => {
    setTextInput("");
  };
  return (
    <form onSubmit={onsubmitHandler}>
      <input
        type="text"
        className="todo-input"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button className="todo-button" type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      {/* <Select /> */}
    </form>
  );
};
export default Form;
