import { LeadRecord } from "../types/interfaces";

import SearchResult from "./SearchResult";

export interface SearchResultListProps {
  query: string;
  filteredLeadData: LeadRecord[] | null;
  focusSearchResultIndex: number;
  searchResultClick: (record: LeadRecord) => void;
  searchResultMouseEnter: (record: LeadRecord) => void;
}

function SearchResults({
  query,
  filteredLeadData,
  focusSearchResultIndex,
  searchResultClick,
  searchResultMouseEnter,
}: SearchResultListProps) {
  let isFocus: boolean;

  const resultList = filteredLeadData
    ? filteredLeadData.slice(0, 10).map((record, index) => {
        if (focusSearchResultIndex === index) {
          isFocus = true;
        } else {
          isFocus = false;
        }

        return (
          <SearchResult
            key={record.id}
            record={record}
            query={query}
            isFocus={isFocus}
            searchResultClick={searchResultClick}
            searchResultMouseEnter={searchResultMouseEnter}
          />
        );
      })
    : [];

  return <ul className="SearchResults-ul">{resultList}</ul>;
}

export default SearchResults;
