//libraries
import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import useGetAirtableData from "../hooks/useGetAirtableData";
//typing
import { Record, DocRecord } from "../types/interfaces";
//styling
import "./App.css";
//components
import TestDocument from "./QuoteDocument";
import DocWrapper from "./DocWrapper";
import FilterableTable from "./FilterableTable";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import DocControl from "./DocControl";
//media

type ProcessEnv = string;

function App() {

  const reactAppBaseID: ProcessEnv = process.env.REACT_APP_BASE_ID as string;

  const data = useGetAirtableData(reactAppBaseID, "Lead");

  const [docData, setDocData] = useState<DocRecord>({
    showDoc: false,
    record: null,
  });

  const [filterQuery, setFilterQuery] = useState<string>("this won't show up");

  const onSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  function handleDocControlClick() {
    setDocData({ showDoc: false, record: docData.record });
  }

  function searchResultClick(record: Record) {
    if (docData.showDoc && record === docData.record) {
      setDocData({ showDoc: false, record: record });
    } else {
      setDocData({ showDoc: true, record: record });
    }
  }

  const [focusSearchResult, setFocusSearchResult] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div className="Search-wrapper">
          <div className="App-logo"></div>
          <FilterableTable>
            <SearchBar onSearchBarChange={onSearchBarChange} />
            <SearchResultList
              query={filterQuery}
              data={data}
              focusSearchResult={focusSearchResult}
              searchResultClick={searchResultClick}
            />
          </FilterableTable>
        </div>

        {docData.showDoc ? (
          <DocWrapper>
            <DocControl handleDocControlClick={handleDocControlClick} />
            <PDFViewer width="100%">
              <TestDocument record={docData.record} />
            </PDFViewer>
          </DocWrapper>
        ) : null}
      </header>
    </div>
  );
}

export default App;
