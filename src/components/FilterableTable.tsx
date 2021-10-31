import "./FilterableTable.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Record } from "../types/interfaces";
import { useState } from "react";

interface FilterableTableProps {
  data: Record[];
}

function FilterableTable({ data }: FilterableTableProps) {
  const [filterQuery, setFilterQuery] = useState<string>("this won't show up");

  const onSearchChange = (input: string) => {
    setFilterQuery(input);
  };

  return (
    <div className="FilterableTable-header">
      <SearchBar onSearchChange={onSearchChange} />
      <SearchResults query={filterQuery} data={data} />
    </div>
  );
}

export default FilterableTable;
