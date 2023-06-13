import { useEffect, useState } from 'react'

export function useGetUsers () {
  const [randomUsers, setRandomUsers] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(res => res.json())
      .then(data => {
        const users = data.results
        console.log(users)
        const usersWitthIsFollowing = users.map((user) => ({
          isFollowing: false,
          ...user
        }))
        console.log(usersWitthIsFollowing)
        setRandomUsers(usersWitthIsFollowing)
      })
  }, [])

  return { randomUsers }
}
