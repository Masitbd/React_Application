import React, { useState } from "react";

const HookDemo = () => {
  const [name, setName] = useState({
    country: "Bangladesh",
  });
  return (
    <div>
      <h1>{name.country}</h1>
      <button onClick={() => setName({ country: "USA" })}>Change</button>
    </div>
  );
};

export default HookDemo;
