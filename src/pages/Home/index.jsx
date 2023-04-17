import React from 'react'
import Presentation from './Presentation'
import Tools from './Tool'
import List from './List'
import Users from './Users'
import MultiBroker from './MuiltBroker'
import News from './News'

const Home = () => {
  return (
    <main>
      <Presentation/>
      <Tools/>
      <List/>
      <Users/>
      <MultiBroker/>
      <News/>
    </main>
  )
}

export default Home
