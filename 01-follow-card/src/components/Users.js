import Card from './Card'
import { useGetUsers } from '../hooks/useGetUsers'

export function Users () {
  const { randomUsers } = useGetUsers('')
  return (
    <div className='center'>
      <section className='Cards'>
        {randomUsers && randomUsers.map((user) => {
          return (
            <Card
              key={user.login.uuid}
              userName={user.login.username}
              name={user.name.first}
              location={user.location.country}
              initialIsFollowing={user.isFollowing}
            />
          )
        })}
      </section>
    </div>
  )
}
