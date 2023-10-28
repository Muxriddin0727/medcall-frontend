import type { FC } from "react";
import Headers from "./Headers";
import Card from "./Card";

const Mapping: FC = () => {
  return (
    <div className="w-full ml-4">
      <Headers />
      <div className="grid grid-cols-3 grid-flow-row gap-4 my-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {Array.from({ length: 15 }).map(() => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Mapping;
