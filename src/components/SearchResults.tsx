import { Record } from "../types/interfaces";
import "./FilterableTable.css";

interface SearchResultsProps {
  query: string;
  data: Record[];
}

function SearchResults({ query, data }: SearchResultsProps) {

    // const search = (list, searchPara)
  const results = data.filter((record) =>
    query
      ? record.fields["Name"].toLowerCase().includes(query.toLowerCase()) ||
        record.fields["Company concat"]
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        record.fields["Contact Concat"]
          .toLowerCase()
          .includes(query.toLowerCase()) 
        // record.fields["Email Reference"]
        //   .toLowerCase()
        //   .includes(query.toLowerCase())
      : false
  );

  const listItems = results.map((record) => (
    <li className="SearchResults-li" key={record.id}>
      <div>{record.fields["Name"]}</div>
      <div className="SearchResults-li-div-mid">{record.fields["Company concat"]}</div>
    </li>
  ));

  return <ul className="SearchResults-ul">{listItems.slice(0, 10)}</ul>;
}

export default SearchResults;
