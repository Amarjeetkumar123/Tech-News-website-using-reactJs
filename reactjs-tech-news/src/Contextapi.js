// Context
// App Provider
// Consumer --> lenghty --> removed by --> useContext hook --> to avoid "props drilling"
// useContext hook

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  query: "JavaScript",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [first, setfirst] = useState(second)

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "setLoading" });

    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      dispatch({
        type: "get_stories",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Remove  post
  const removePost = (post_id) => {
    dispatch({ type: "delete_post", payload: { post_id } });
  };

  //search
  const searchPost = (query) => {
    dispatch({ type: "SEARCH_QUERY", payload: { query } });
  };

  // pagination
  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE"});
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// creating custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
