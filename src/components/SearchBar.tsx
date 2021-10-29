
interface SearchBarProps {
    onSearchChange: (input: string) => void
}

function SearchBar({ onSearchChange }: SearchBarProps) {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value)
    }

    return (
        <input onChange={handleOnChange} placeholder="Search something..." />
    );
}

export default SearchBar