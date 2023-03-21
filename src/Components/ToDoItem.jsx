import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ToDoContext } from "../Context/ToDoContext";
const ToDoItem = ({ item }) => {
  const toDoContext = useContext(ToDoContext);

  const onDeleteToDoHandler = () => {
    const newToDoArr = toDoContext.toDoList.filter(
      (element) => element.id !== item.id
    );
    toDoContext.setToDoList(newToDoArr);
  };

  const onDeleteHandler = () => {
    onDeleteToDoHandler();
  };

  const onCompleteToDoHandler = () => {
    const newToDoArr = toDoContext.toDoList.map((element) => {
      if (element.id === item.id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    });
    toDoContext.setToDoList(newToDoArr);
    console.log(newToDoArr);
    console.log("====", toDoContext.filteredToDo);
  };
  const onCompleteHandler = () => {
    // setComplete(!complete);
    onCompleteToDoHandler();
  };
  return (
    <div className={`todo ${item.completed ? "completed" : ""}`}>
      <li className="todo-item">{item.title}</li>
      <button onClick={onCompleteHandler} className="complete-btn" type="">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button onClick={onDeleteHandler} className="trash-btn" type="">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
export default ToDoItem;
