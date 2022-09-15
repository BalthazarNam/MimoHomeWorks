import React from 'react'

function Page(props) {
  return (
    <div className='page'>
        <h1>Page</h1>
        <p>{props.user}</p>
        <p>{props.test}</p>
    </div>
  )
}

export default Page