import { Input, InputRef, Skeleton, Collapse, CollapseProps, Button } from "antd";
import { FC, KeyboardEvent,  useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAxios } from "../../../customHooks/useAxios";
import { Blog } from "../../../../types/blogs";
import { sweetFailureProvider } from "../../../../lib/sweetAlert";
import {DownOutlined, LeftOutlined} from "@ant-design/icons";
import { useReduxDispatch } from "../../../hooks";

const Search: FC = () => {
  const axios = useAxios();
  const ref = useRef<InputRef>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const clearSearch = () => {
    setSearchParams({ search: '' });
    setResults(null);
  };
  
  const onSearch = async (value: string) => {
    setSearchParams({ search: value });
    setIsLoading(true);
  
    try {
      const response = await axios({
        url: `/client/search?search=${encodeURIComponent(value)}`,
      });
      console.log("resonse.data",response.data); // Add this line
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Skeleton active />;
  }
  
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === "Enter" || e?.keyCode === 13) {
      onSearch(e.currentTarget.value);
    }
  };

  if (results && results.length === 0) {
    sweetFailureProvider("Could not find anything");
  }


  return (
    <div className="flex flex-col items-center mt-[30px]">
      <h3 className="font-bold text-[30px]">Specialist Speaks</h3>
      <Input.Search
        ref={ref}
        defaultValue={searchParams.get("search") ?? ""}
        size="large"
        placeholder="Search..."
        className="w-[60%] mt-[20px]"
        onSearch={onSearch}
        onPressEnter={onPressEnter}
        
      />
      {results && results.length > 0 && (
  <LeftOutlined className="w-[60%] mt-4 text-cyan-500" onClick={clearSearch} />
)}
      
      
       {results && results.map((result, index) => {
      const items: CollapseProps['items'] = [
        {
          key: index.toString(),
          label: result.blog_title,
          children: 
          <h2><span className="font-bold text-xs">{result.blog_description}</span><br/>{result.blog_content}</h2>,
          
          extra: <DownOutlined 
          className="text-cyan-500"/>
        },
      ];
      return <Collapse 
      className="w-[60%] mt-[20px]"
      items={items} />;
    })}
  </div>
  );
};

export default Search;
