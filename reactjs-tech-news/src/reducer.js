const reducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "get_stories":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "delete_post":
      return {
        ...state,
        hits: state.hits.filter(
          (currElem) => currElem.objectID !== action.payload.post_id
        ),
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload.query,
      };

    case "PREV_PAGE":
      let page_num = state.page-1;
      if (page_num <= 0) {
        page_num = 0;
      }
      return {
        ...state,
        page: page_num,
      };
    case "NEXT_PAGE":
      let page_next = state.page+1;
      if (page_next >= state.nbPages) {
        page_next = 0;
      }
      return {
        ...state,
        page: page_next,
      };
  }
};

export default reducer;
