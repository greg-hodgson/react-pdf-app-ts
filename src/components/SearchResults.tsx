import { Record } from "../types/interfaces";
import replaceStringReact from "./replaceStringReact";
import "./FilterableTable.css";

interface SearchResultsProps {
  query: string;
  data: Record[];
}

function SearchResults({ query, data }: SearchResultsProps) {

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

  const results = data.filter(isFiltered);

  const listItems = results.map((record) => {

    recordName = record.fields["Name"];
    recordContact = record.fields["Contact Concat"];
    recordEmail =
      typeof record.fields["Email Reference"] === "string"
        ? record.fields["Email Reference"]
        : "";

    return (
    <li className="SearchResults-li" key={record.id}>
      <div>{replaceStringReact(recordName, query, "highlight")}</div>
      <div className="SearchResults-li-div-mid">
        {replaceStringReact(recordContact, query, "highlight")}
      </div>
      <div className="SearchResults-li-div-small">
        {replaceStringReact(recordEmail, query, "highlight")}
      </div>
    </li>
  )});

  return <ul className="SearchResults-ul">{listItems.slice(0, 10)}</ul>;
}

export default SearchResults;
