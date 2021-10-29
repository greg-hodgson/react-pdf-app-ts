import { Record } from "../types/interfaces"

interface SearchResultsProps {
    query: string;
    data: Record[];
}

function SearchResults({ query, data }: SearchResultsProps) {
    
    const results = data.filter(record => record.fields["Name"].includes(query))
    const listItems = results.map(record => 
        <li>{record.fields["Name"]}</li>);

    return (

        <ul>
            {listItems}
        </ul>
    )
}

export default SearchResults