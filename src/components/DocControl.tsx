interface IDocControl {
    handleDocControlClick: () => void
}

function DocControl({ handleDocControlClick }: IDocControl) {
    return(
        <button onClick={handleDocControlClick}>X</button>
    )
}

export default DocControl