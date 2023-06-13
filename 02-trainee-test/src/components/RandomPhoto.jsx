import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImage'

export function RandomPhoto () {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <section>
      {image && <img src={image} className='image-cats' alt='random cats picture' />}
      {fact && <p>{fact}</p>}
      <button className='button-new-cat' onClick={handleClick}>New Cat</button>
    </section>

  )
}
