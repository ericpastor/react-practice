import { useEffect, useState } from 'react'

const PREFIX_IMAGE = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImage(`${PREFIX_IMAGE}${url}`)
      })
  }, [fact])

  return { image }
}
