import { useEffect, useState } from "react";
import { LeadRecord } from "../types/interfaces";

export function useFilter(filterQuery: string, data: LeadRecord[]) {
  const [filteredData, setFilteredData] = useState<LeadRecord[]>([]);
  
  useEffect(() => {
    if (filterQuery.length > 0) { 
    setFilteredData(
      data.filter((el) => {
        const recordName = el.fields["Name"].toLowerCase();
        const recordContact = el.fields["Contact Concat"].toLowerCase();
        const recordEmail =
          typeof el.fields["Email Reference"] === "string"
            ? el.fields["Email Reference"].toLowerCase()
            : "";
        return (
          recordName.includes(filterQuery.toLowerCase()) ||
          recordContact.includes(filterQuery.toLowerCase()) ||
          recordEmail.includes(filterQuery.toLowerCase())
        );
      })
    )} else {
      setFilteredData([])
    };
  }, [filterQuery, data]);
  
  return [filteredData];
}
