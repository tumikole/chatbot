import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../Redux/Actions/index.js'


function Main () {
  const [messages , setMessages] = useState([])

  let introMsg = useSelector(state => state.getIntroMessage)


  let dispatch = useDispatch()

console.log('introMsg :>> ', introMsg);

 const getMessages = () => {

 }

  return(
  <div>
<button onClick={dispatch(getMessages())}>getMessage</button>
  </div>
  )
}

export default Main
