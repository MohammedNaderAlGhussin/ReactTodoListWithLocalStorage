import React, { createContext, useEffect, useState } from "react";

export const ToDoContext = createContext({
  toDoList: [],
  setToDoList: (value) => {},
  filteredToDo: [],
  setFilteredToDo: (value) => {},
});
export const ToDoContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(window.localStorage.getItem("todos"))
  );
  const [filteredToDo, setFilteredToDo] = useState([]);

  const saveLocalTodos = () => {
    window.localStorage.setItem("todos", JSON.stringify(toDoList));
  };

  useEffect(() => {
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDoList]);
  return (
    <ToDoContext.Provider
      value={{
        toDoList: toDoList,
        setToDoList: setToDoList,
        filteredToDo: filteredToDo,
        setFilteredToDo: setFilteredToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
