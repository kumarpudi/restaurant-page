import React from 'react'
import Header from './Container/Header'
import Table from './Container/Table'
import Filter from './Container/Filter'
import Card from './Container/Card'
const Home = () => {
  return (
    <div style={{backgroundColor:'black'}}>
      <div style={{color:'white'}}>
        <Header/>
      </div>
      <Table/>
      <Filter/>
      <Card/>
    </div>
  )
}
export default Home
