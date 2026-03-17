import { useState } from "react"
import { GifList } from "./gifs/GifList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/gif.interface"

export function GifsApp() {
    const [previousSearches, setPreviousSearches] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])
    const handleTermClicked = (term: string) => {
        console.log(term)
    }
    const handleSearch = async (query: string) => {
        const newQuery = query.toLowerCase().trim()
        if (newQuery) {
            if (!previousSearches.includes(newQuery)) {
                setPreviousSearches([newQuery, ...previousSearches].splice(0, 8))
                const gifsResult = await getGifsByQuery(query)
                console.log(gifsResult)
                setGifs(gifsResult)
            }
        }
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto." />

            {/* Search */}
            <CustomSearchBar placeholder="Buscar gifs" btnText="Buscar" onQuery={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousSearches} onLabelClicked={(term: string) => handleTermClicked(term)} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}