import { useParams } from "react-router-dom";
import HomeFooter from "../components/homeFooter";
import SearchHeader from "../components/SearchHeader";
import SearchResult from "../components/searchresult";
import { useState, useContext, useEffect } from "react";
import { dataContext } from "../context/contextProvider";
import Loading from "../components/loadingSpinner";
import { fetchData } from "../context/api";
function SearchPage() {
  const [result, setResult] = useState([]);
  const { query, index } = useParams();
  const { searchImage } = useContext(dataContext);
  const fetchSearchResult = () => {
    const payload = { q: query, start: index };
    if (searchImage) payload.searchType = "images";
    fetchData(payload).then((result) => setResult(result));
  };
  useEffect(() => {
    fetchSearchResult();
  }, [query, index, searchImage]);

  console.log(result);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SearchHeader />
        <main className="grow">
          {result == [] ? <Loading /> : <SearchResult result={result} />}
        </main>
        <HomeFooter></HomeFooter>
      </div>
    </>
  );
}
export default SearchPage;
