import { useGetCat } from "./useGetCat";

export const Cat = () => {
  const {data, isLoading, refetch} = useGetCat();
  return(
    <div>
      <h1>{catData?.fact}</h1>
    </div>
  );
};