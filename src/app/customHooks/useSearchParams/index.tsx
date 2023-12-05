import { useSearchParams } from "react-router-dom";

type getParams = "category" |"user_id"| "sort" | "type" | "range-min" | "range-max";

export const useAppSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "DENTIST";
  const user_id = searchParams.get("user_id")?? "1";
  const sort = searchParams.get("sort") ?? "default-sorting";
  const type = searchParams.get("type") ?? "all-doctors";
  const range_min = searchParams.get("range-min") ?? "0";
  const range_max = searchParams.get("range-max") ?? "1000";

  const setParams = (shouldUpdate: object) =>
    setSearchParams({
      category,
      sort,
      type,
      range_min,
      range_max,
      ...shouldUpdate,
    });

  const getParams = (key: getParams) => {
    switch (key) {
      case "category":
        return category;
      case "user_id":
        return user_id;
      case "sort":
        return sort;
      case "type":
        return type;
      case "range-min":
        return range_min;
      case "range-max":
        return range_max;
    }
  };
  return { getParams, setParams };
};
