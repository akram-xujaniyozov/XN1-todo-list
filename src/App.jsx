import React from "react";
import { TodoList, Input } from "./components";

// Fragments
//<></>
// React.Fragment and Fragment

const App = () => {
  return (
    <div className="bg-blue-700 w-full h-screen flex items-center justify-center">
      <div className="bg-white w-[550px] px-4 py-5 rounded-lg flex flex-col gap-14">
        <Input />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
