import React from 'react'

function ChatbotForm(props) {
    const { handleChange , name , email} = props

    return (
        <div>
          <form >
            <div class='form-group'>
              <label style={{ color: 'white' }}>Name</label>
              <input
                type='text'
                class='form-control'
                value={name}
                name='name'
                placeholder='Please enter your name'
                onChange={e => handleChange(e)}
              />
              <small class='form-text text-muted'>
                Please tell us your name
              </small>

              <br />
              <br />

              <label style={{ color: 'white' }}>Email</label>
              <input
                type='email'
                class='form-control'
                value={email}
                name='email'
                placeholder='Please enter your email'
                onChange={e => handleChange(e)}
              />
              <small class='form-text text-muted'>
                Please enter your email
              </small>
            </div>
            <br />
            <button className='btn btn-primary'>Submit</button>
          </form>   
        </div>
    )
}

export default ChatbotForm
