import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export const App = () => {

  const users = [
    {
      userName: 'kingjames',
      name: 'LeBron James',
      isFollowing: false
    },
    {
      userName: 'espn',
      name: 'ESPN',
      isFollowing: true
    },
    {
      userName: 'leomessisite',
      name: 'Leo Messi',
      isFollowing: false
    },
  ]

  return (
    <section className='App'>
      <header>
        <h2 className='App-txt-color-white mb-4'>
          Tal vez te guste
        </h2>
      </header>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
        ))
      }
    </section>
  )
}
