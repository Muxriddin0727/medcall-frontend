import { useSearchParams } from "react-router-dom";

type getParams =
  | "category"
  | "user_id"
  | "sort"
  | "type"
  | "range-min"
  | "range-max";

export const useAppSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "DERMATOLOGIST";
  const user_id = searchParams.get("user_id") ?? "1";

  const type = searchParams.get("type") ?? "all-doctors";

  const setParams = (shouldUpdate: object) =>
    setSearchParams({
      category,

      type,

      ...shouldUpdate,
    });

  const getParams = (key: getParams) => {
    switch (key) {
      case "category":
        return category;
      case "user_id":
        return user_id;

      case "type":
        return type;
    }
  };
  return { getParams, setParams };
};
