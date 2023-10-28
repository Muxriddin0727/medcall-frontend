import type { FC } from "react";
import Blog from "./Card";
import { blog_data, intro_data } from "../../../../lib";

const Posts: FC = () => {
  return (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {blog_data.map((value) => (
        <div key={value.id}>
          <Blog
              {...value}            
           
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;

{
  /* <div >
         <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
        
         {Array.from({ length: 9 }).map(() => (
          <Blog  {...value}/>
        ))}
      </div>
    </div> */
}
