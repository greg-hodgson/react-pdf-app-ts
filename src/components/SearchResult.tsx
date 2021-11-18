import replaceStringReact from "./replaceStringReact";

import { LeadRecord } from "../types/interfaces";

interface SearchResultProps {
  record: LeadRecord;
  query: string;
  isFocus: boolean;
  searchResultClick: (record: LeadRecord) => void;
  searchResultMouseEnter: (record: LeadRecord) => void;
}

export default function SearchResult({
  record,
  query,
  isFocus,
  searchResultClick,
  searchResultMouseEnter,
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
      onMouseEnter={() => searchResultMouseEnter(record)}
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
