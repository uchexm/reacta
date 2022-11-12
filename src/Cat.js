import { useGetCat } from "./useGetCat";

export const Cat = () => {
  const {data, isLoading, refetch} = useGetCat();
  if(isLoading)return<h1>loading...</h1>
  return(
    <div>
      <button onClick={refetch}>refetch</button>
      <h1>{catData?.fact}</h1>
    </div>
  );
};