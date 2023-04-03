import React from "react";

function Person({ person }) {
  return (
    <>
      <li>
        I am {person.name}, my id is {person.id} , i am {person.age} years old
        and i have experince in {person.experince}
      </li>
    </>
  );
}

export default Person;
