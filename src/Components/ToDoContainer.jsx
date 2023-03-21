import { useContext } from "react";
import { ToDoContext } from "../Context/ToDoContext";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
  const toDoContext = useContext(ToDoContext);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDoContext.toDoList.map((item) => {
          return <ToDoItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};
export default ToDoContainer;
