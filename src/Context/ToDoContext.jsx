import React, { createContext, useEffect, useState } from "react";

export const ToDoContext = createContext({
  toDoList: [],
  setToDoList: (value) => {},
});
export const ToDoContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(window.localStorage.getItem("todos"))
  );

  const saveLocalTodos = () => {
    if (window.localStorage.getItem("todos") === null) {
      window.localStorage.setItem("todos", []);
    } else {
      window.localStorage.setItem("todos", JSON.stringify(toDoList));
    }
  };

  useEffect(() => {
    saveLocalTodos();
    // getLocalTods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDoList]);
  return (
    <ToDoContext.Provider
      value={{
        toDoList: toDoList,
        setToDoList: setToDoList,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
