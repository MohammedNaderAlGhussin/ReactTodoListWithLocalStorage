import { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";

const Select = () => {
  const toDoContext = useContext(ToDoContext);
  const [status, setStatus] = useState("all");
  // const statuss = useRef();

  const filterHandler = () => {
    if (status === "completed") {
      const completedTodos = toDoContext.toDoList.filter(
        (toDo) => toDo.completed === true
      );
      toDoContext.setFilteredToDo(completedTodos);
    } else if (status === "uncompleted") {
      const unCompletedTodos = toDoContext.toDoList.filter(
        (toDo) => toDo.completed === false
      );
      toDoContext.setFilteredToDo(unCompletedTodos);
    } else {
      toDoContext.setFilteredToDo(toDoContext.toDoList);
    }
  };
  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  const onSelectHandler = (e) => {
    setStatus(e.target.value);
    console.log(status);

    // setStatus(e.target.value);
    // if (e.target.value !== "All") {
    //   const completedTodos = toDoContext.toDoList.filter(
    //     (ele) => ele.completed === true
    //   );
    //   toDoContext.setFilteredToDo(completedTodos);
    //   const unCompletedTodos = toDoContext.toDoList.filter(
    //     (ele) => ele.completed === false
    //   );
    //   toDoContext.setFilteredToDo(unCompletedTodos);
    // }
    // toDoContext.setFilteredToDo(toDoContext.toDoList);
    // switch (e.target.value) {
    //   case "completed":
    //     const completedTodos = toDoContext.toDoList.filter(
    //       (toDo) => toDo.completed === true
    //     );
    //     toDoContext.setFilteredToDo(completedTodos);
    //     break;
    //   case "uncompleted":
    //     const unCompletedTodos = toDoContext.toDoList.filter(
    //       (toDo) => toDo.completed === false
    //     );
    //     toDoContext.setFilteredToDo(unCompletedTodos);
    //     break;
    //   default:
    //     toDoContext.setFilteredToDo(toDoContext.toDoList);
    //     break;
    // }
    // console.log(toDoContext.toDoList);
    // console.log("###########");

    // console.log(toDoContext.filteredToDo);
  };
  return (
    <div className="select">
      <select
        // ref={statuss}

        onChange={onSelectHandler}
        name="todos"
        className="filter-todo"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
export default Select;
