import React, { useState, useEffect } from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
// import { css } from "@emotion/react";

import { bot } from './Config'

import { useSelector } from 'react-redux'

function ChatbotDisplay (props) {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("rgb(0, 195, 255)");


  useEffect(() => {
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 4000)
    
  }, [])

  const user = useSelector(state => state.user)
  const robot = useSelector(state => state.message.botResponse)
  const dataTypes = useSelector(state => state.updateDataType.updateTypes)
  const booleanDataTypes = useSelector(state => state.updateBooleanDataType)
  console.log('user', user)

  const {
    handleChange,
    handleAnswers,
    handleDataTypes,
    handleDataTypesInfo,
    handleSubmit,
    displayForm,
    show,
    name,
    email,
    introMsg,
    msgOptions,
    chatbotForm
  } = props
  return (
    <div>
  

      <div className='chatBotContainer'>
        <div className='chatBotHeader'>
          <button className=''>Reset</button>
          <small>
            <h1>Chat with us</h1>
          </small>
          <button className=''>
            <a href='tel:072 045 7845'>Speak to Agent</a>
          </button>
        </div>

      {loading ? <div>
    <BounceLoader color={color} loading={loading} size={362} />
  </div>: (
 <div className='chatBotBody'>
 <br />
 <p className='btn btn-outline-info'>
   {bot.introMessage[0].nameEmailRequest}
 </p>


 {!show ? (
   <div onHide={displayForm}>
     <form className='' onSubmit={handleSubmit}>
       <input
         type='text'
         id='input'
         name='name'
         className='form-control'
         value={name}
         placeholder='Enter your name'
         onChange={e => handleChange(e)}
       />
       <br />
       <input
         type='email'
         id='input'
         name='email'
         className='form-control'
         value={email}
         placeholder='Enter your email'
         onChange={e => handleChange(e)}
       />
       <br />
       <input type='submit' className='btn btn-outline-info' />
     </form>
   </div>
 ) : null}

 <div className='chatBotButtonsContainer'>
   <p id="msgIntro" className='btn btn-outline-info preOpt' style={{display:"none"}} disabled>
     {introMsg} 
     { Object.keys(user).length !== 0 ? user.userDetails.name :"" }
   </p>

   {msgOptions.map((item , i) => {
     return (
       <input
         type='button'
         className='btn btn-outline-info learning-option-button'
         id={'option' + i}

         onClick={handleAnswers}
         value={item}
       />
     )
   })}
   {robot &&
     robot.map((item, i) => {
       return (
         <p
           className='btn btn-outline-info preOpt'
           type='button'
           id={'options' + i}
           onClick={() => handleDataTypes(item)}
         >
           {item}
         </p>
       )
     })}
   <br />
   <div className='dataTypes'>
     {dataTypes &&
       dataTypes.map((item, i) => {
         return (
           <input
             class='btn btn-outline-info preOpt1'
             type='button'
             id={'dataTypesOptions' + i}
             value={item}
             onClick={e => handleDataTypesInfo(e)}
           />
         )
       })}
   </div>
   <br />
   {booleanDataTypes.updateBooleanTypes &&
     booleanDataTypes.updateBooleanTypes[0].map((item, i) => {
       return (
         <div>
           <p className='preOpt' id={'dataTypesOptions' + i}>
             {item}
           </p>
         </div>
       )
     })}
   <div id='link'></div>
 </div>
</div>


  )}


       
        <div className='chatBotFooter'>
          <input type='text' placeholder='Comment message...' />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ChatbotDisplay
