//libraries
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useGetAirtableData } from "../customHooks/useGetAirtableData";
import { useFilter } from "../customHooks/useFilter";
//typing
import { LeadRecord, LineItemRecord } from "../types/interfaces";
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

  const [leadData, isLoadingLeadData]: [LeadRecord[], boolean] =
    useGetAirtableData(reactAppBaseID, "Lead");
  const [lineItemData, isLoadingLineItemData]: [LineItemRecord[], boolean] =
    useGetAirtableData(reactAppBaseID, "Quote Line Items");
  const [isDocVisible, setIsDocVisible] = useState(false);
  const [docRecord, setDocRecord] = useState<LeadRecord>({} as LeadRecord);
  const [filterQuery, setFilterQuery] = useState<string>("this won't show up");
  const [filteredLeadData] = useFilter(filterQuery, leadData);
  const [focusSearchResultIndex, setFocusSearchResultIndex] = useState(0);

  filteredLeadData.sort((a, b) => {
    return (
      (new Date(b.fields["Created"]) as any) -
      (new Date(a.fields["Created"]) as any)
    );
  });

  const onSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  useEffect(() => {
    setFocusSearchResultIndex(0);
  }, [filteredLeadData]);

  const focusSearchResultRecord = filteredLeadData[focusSearchResultIndex];

  // const filteredLineItemData: LineItemRecord[] = lineItemData.filter(
  //   (record) => {
  //     return record.fields["Lead"][0] === focusSearchResultRecord.id;
  //   }
  // );

  const searchBarOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case "ArrowDown":
        event.preventDefault();
        if (focusSearchResultIndex < filteredLeadData.slice(0, 10).length - 1) {
          setFocusSearchResultIndex(focusSearchResultIndex + 1);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (focusSearchResultIndex > 0) {
          setFocusSearchResultIndex(focusSearchResultIndex - 1);
        }
        break;
      case "Enter":
        if (focusSearchResultRecord && filteredLeadData.length > 0)
          searchResultClick(focusSearchResultRecord);
        break;
    }
  };

  function handleDocControlClick() {
    setIsDocVisible(false);
  }

  function searchResultClick(record: LeadRecord) {
    setDocRecord(record);
    setIsDocVisible(true);
  }

  function searchResultMouseEnter(record: LeadRecord) {
    const index = filteredLeadData.findIndex((el) => {
      return el.id === record.id;
    });
    setFocusSearchResultIndex(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Search-wrapper">
          <div className="App-logo"></div>
          {isLoadingLeadData || isLoadingLineItemData ? (
            <div className="loading">Loading Data...</div>
          ) : (
            <FilterableTable>
              <SearchBar
                onSearchBarChange={onSearchBarChange}
                searchBarOnKeyDown={searchBarOnKeyDown}
              />
              <SearchResultList
                query={filterQuery}
                filteredLeadData={filteredLeadData}
                focusSearchResultIndex={focusSearchResultIndex}
                searchResultClick={searchResultClick}
                searchResultMouseEnter={searchResultMouseEnter}
              />
            </FilterableTable>
          )}
        </div>

        {isDocVisible ? (
          <DocWrapper>
            <DocControl handleDocControlClick={handleDocControlClick} />
            <PDFViewer width="100%">
              <TestDocument record={docRecord} />
            </PDFViewer>
          </DocWrapper>
        ) : null}
      </header>
    </div>
  );
}

export default App;
