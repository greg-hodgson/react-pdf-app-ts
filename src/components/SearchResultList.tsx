import { Record } from "../types/interfaces";

import SearchResult from "./SearchResult";

export interface SearchResultListProps {
  query: string;
  data?: Record[];
  focusSearchResult: number;
  searchResultClick: (record: Record) => void;
}

function SearchResults({
  query,
  data,
  focusSearchResult,
  searchResultClick,
}: SearchResultListProps) {
  let recordName: string;
  let recordContact: string;
  let recordEmail: string;

  const isFiltered = (record: Record) => {
    recordName = record.fields["Name"].toLowerCase();
    recordContact = record.fields["Contact Concat"].toLowerCase();
    recordEmail =
      typeof record.fields["Email Reference"] === "string"
        ? record.fields["Email Reference"].toLowerCase()
        : "";

    if (query) {
      return (
        recordName.includes(query.toLowerCase()) ||
        recordContact.includes(query.toLowerCase()) ||
        recordEmail.includes(query.toLowerCase())
      );
    }
  };

  const results = data ? data.filter(isFiltered) : [];

  let isFocus: boolean;

  const listItems = results.map((record, index) => {
    if (focusSearchResult === index) {
      isFocus = true
    } else {
      isFocus = false
    }
    
    return (
      <SearchResult
        key={record.id}
        record={record}
        query={query}
        isFocus={isFocus}
        focusSearchResult={focusSearchResult}
        searchResultClick={searchResultClick}
      />
    );
  });

  return <ul className="SearchResults-ul">{listItems.slice(0, 10)}</ul>;
}

export default SearchResults;
