/* eslint-disable react/prop-types */
import React, { useMemo } from "react";

interface Person {
  name: string;
  age: number;
}

interface RenderPeopleProps {
  message: string;
}

function createAndSortLargeArray(): Person[] {
  console.log("creating people");
  const array: Person[] = [];
  for (let i = 0; i < 100000; i += 1) {
    array.push({ name: `Person${i}`, age: i });
  }

  return array.sort((first, second) => (first.age < second.age ? -1 : 1));
}

const RenderPeople: React.FC<RenderPeopleProps> = props => {
  const largeArray: Person[] = useMemo(() => createAndSortLargeArray(), []);

  return (
    <div className="render-people">
      <h3>{props.message}</h3>
      {largeArray.map(person => (
        <div>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderPeople;
