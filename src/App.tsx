import React, { useState } from "react";

const App = () => {
  interface newObject {
    name: string;
    age: number;
  }
  const arr = [1, 2, 3, 4, 5];
  const [items, setItems] = useState<Array<number>>(arr);
  const user: newObject = {
    name: "Chris",
    age: 46,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <ul>
        {items.map((item)=><li>{item}</li>)}
      </ul>
    </>
  );
};

export default App;
