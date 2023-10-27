import type {FC} from "react";

const Categories:FC= () => {
    return (
        <div>
            <h3 className="  font-bold">Categories</h3>
          <div className="grid grid-cols-2 gap-4   mt-[10px] pl-[16px]">
            <h3 className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">Cardiology</h3>
            <p className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">(12)</p>
            <h3 className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">Neurology</h3>
            <p className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">(34)</p>
            <h3 className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">Pediatrician</h3>
            <p className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">(45)</p>
            <h3 className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">Psychology</h3>
            <p className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">(23)</p>
            <h3>Physician</h3>
            <p className="text-base font-normal cursor-pointer hover:text-[#06B6D4] transition-colors">(9)</p>
          </div>

        </div>

    )
}

export default Categories;