export const Square = ({ children, isSelected, updateBoard, index}) => {   // cada uno de los cuadros del tablero

    const className =`square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index);
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}