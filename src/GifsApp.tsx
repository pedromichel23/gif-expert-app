import { GifList } from "./gifs/GifList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"

export function GifsApp() {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto."/>

            {/* Search */}
            <CustomSearchBar placeholder="Buscar gifs" btnText="Buscar"/>

            {/* Busquedas previas */}
            <PreviousSearches searches={['Goku', 'Dragon Ball Z']}/>

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}