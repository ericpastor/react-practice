import { Square } from './Square.jsx'

const Winner = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'DRAW' : 'WINNER:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Again!</button>
        </footer>
      </div>
    </section>
  )
}

export default Winner
