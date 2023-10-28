import type { FC } from "react";

const Categories: FC = () => {
  return (
    <div>
      <h3 className="  font-bold">Categories</h3>
      <div>
        {Array.from({ length: 10 }).map(( _, idn: number ) =>(
        <div 
        key={idn}
        className="flex justify-between mt-[10px] pl-[16px] cursor-pointer hover:text-[#06B6D4] transition-colors">
          <h3 className="text-base font-normal ">Cardiology</h3>
          <p className="text-base font-normal ">(12)</p>
        </div>
         ))}
      </div>
    </div>

  )
}

export default Categories;