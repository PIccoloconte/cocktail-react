import { useEffect, useState } from "react";
import axios from "axios";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
//type mi serve solamente come valore per passare uno o l'altro link
//query è il mio valore di input della searchbar nel caso di homeScreen.js che avrà come vaolre base "negroni" passato da context.js
//singleCicktailsScreen.js passerà invece l'id e il "type = true"
const useFetch = (query, type = false) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const url = type ? singleUrl : searchUrl;

  useEffect(() => {
    //qunado query viene modificato , lo use effect esegue di nuovo la funzione al suo interno
    (async (query) => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}${query}`);
        setData(response.data);
        setCount(response.data.drinks.length);
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(query);
  }, [query, url]);

  return { isLoading, data, isError, count };
};

export default useFetch;
