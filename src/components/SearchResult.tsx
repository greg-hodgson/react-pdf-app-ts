import replaceStringReact from "./replaceStringReact";
import { SearchResultListProps } from "./SearchResultList";
import { Record } from "../types/interfaces";

interface SearchResultProps extends SearchResultListProps {
  record: Record;
  query: string;
  isFocus: boolean;
  focusSearchResult: number;
  searchResultClick: (record: Record) => void;
}

export default function SearchResult({
  record,
  query,
  isFocus,
  searchResultClick,
}: SearchResultProps) {
  const recordName = record.fields["Name"];
  const recordContact = record.fields["Contact Concat"];
  const recordEmail =
    typeof record.fields["Email Reference"] === "string"
      ? record.fields["Email Reference"]
      : "";

  const liClass = isFocus ? "Focus" : "";

  return (
    <li
      className={`SearchResults-li ${liClass}`}
      onClick={() => searchResultClick(record)}
    >
      <div>
        {replaceStringReact(recordName, query, "SearchResults-highlight")}
      </div>
      <div className="SearchResults-li-div-mid">
        {replaceStringReact(recordContact, query, "SearchResults-highlight")}
      </div>
      <div className="SearchResults-li-div-small">
        {replaceStringReact(recordEmail, query, "SearchResults-highlight")}
      </div>
    </li>
  );
}
