import React from 'react'

function Page(props) {
  return (
    <div className='page'>
        <h2>Page</h2>
        <p>{props.user}</p>
        <p>{props.test}</p>
    </div>
  )
}

export default Page