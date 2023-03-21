import { Fragment } from "react";
import "./resources/style.css";
import Form from "./Components/Form";
import ToDoContainer from "./Components/ToDoContainer";

function App() {
  return (
    <Fragment>
      <header>
        <h1>Nader's Todo List</h1>
      </header>
      <Form />
      <ToDoContainer />
    </Fragment>
  );
}

export default App;
