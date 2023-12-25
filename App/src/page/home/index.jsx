import React from 'react'
import Tbale from '../../assets/components/table'
import "./index.scss"
const Home = ({users}) => {
    
  return (
    <>
   <div className="container">
   <div>
        <h1>This is Home page</h1>
        <h3>This is Table</h3>
        <Tbale users={users}/>
    </div>
   </div>
    </>
  )
}

export default Home
