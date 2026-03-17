import { useEffect, useState } from "react";

interface Props {
    placeholder: string;
    btnText: string;
    onQuery: (query: string) => void
}

export function CustomSearchBar({ placeholder = "Buscar", btnText, onQuery }: Props) {
    const [query, setQuery] = useState('')
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query)
        }, 1100)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [query, onQuery])
    const handleSearch = () => {
        onQuery(query)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') { handleSearch() }
    }


    return (
        <div className="search-container">
            <input type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>{btnText}</button>
        </div>
    )
}