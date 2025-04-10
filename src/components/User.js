import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(5);

  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>

      <h1>{name}</h1>
      <h2>Contact: 1234567890</h2>
      <h3>Address: Pune, Maharashtra</h3>
      <h3>Bio: Software Engineer</h3>
      <h3>Hobbies: Coding, Reading, Traveling</h3>
      <h3>Skills: React, Node.js, Express, MongoDB</h3>
    </div>
  );
};
export default User;
