import { useState } from 'react'

const Card = ({ userName, name, initialIsFollowing }) => {
  const [isFollowing, setIsFolowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'l1-card-button is-folowing'
    : 'l1-card-button'

  const handleClick = () => {
    setIsFolowing(!isFollowing)
  }

  return (
    <>
      <article className='l1-card'>
        <header className='l1-card-header'>
          <img
            className='l1-card-avatar'
            src={`https://i.pravatar.cc/150?u=${name}`}
            alt='Pepito avatar'
          />
          <div className='l1-card-info'>
            <strong>{name}</strong>
            <span className='l1-card-infoUserName'>@{userName}</span>
          </div>
          <span />
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='l1-card-text'>{text}</span>
            <span className='l1-card-stopFollowing'>Stop Following</span>
          </button>
        </aside>
      </article>
    </>
  )
}

export default Card
