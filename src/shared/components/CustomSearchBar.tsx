interface Props {
    placeholder: string;
    btnText: string;
}

export function CustomSearchBar({placeholder="Buscar", btnText}:Props) {
    return(
        <div className="search-container">
                <input type="text" placeholder={placeholder} />
                <button>{btnText}</button>
        </div>
    )
}