import { dataContext } from "../context/contextProvider";
import { useState, useContext, useEffect } from "react";
import SearchImageTemplates from "../components/searchImageTemplates";
import SearchItemTemplates from "../components/searchItemTemplates";
import { fetchData } from "../context/api";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";
import HomeFooter from "../components/homeFooter";
function SearchPage() {
  const [result, setResult] = useState();
  const { query, index } = useParams();
  const { searchImage } = useContext(dataContext);
  let queryValue = query.split("+").join(" ");
  const fetchSearchResult = () => {
    let payload = { q: queryValue, start: index };
    if (searchImage) payload = { ...payload, searchType: "image" };
    fetchData(payload).then((response) => setResult(response));
  };
  useEffect(() => {
    fetchSearchResult();
  }, [query, index, searchImage]);

  if (!result) return;
  console.log(result);
  let { items, searchInformation, queries } = result;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SearchHeader />
        <main className="grow">
          <div className="text-sm text-[#75747a] ml-48 mt-5">
            <p className="ml-4 my-2">
              About {searchInformation.formattedTotalResults} result in
              {searchInformation.formattedSearchTime} for {queryValue}
            </p>
          </div>
          <div className="">
            {searchImage
              ? items.map((item, index) => (
                  <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                    <SearchImageTemplates data={item} key={index} />
                  </div>
                ))
              : items.map((item, index) => (
                  <SearchItemTemplates data={item} key={index} />
                ))}
          </div>
        </main>
        <HomeFooter></HomeFooter>
      </div>
    </>
  );
}
export default SearchPage;
