import React from 'react'

const Component1 = () => {
    const user ={
        name: 'Hedy Lamarr',
        imageUrl: 'https://1fid.com/wp-content/uploads/2022/07/girl-anime-wallaper-25.jpg',
        imageSize: 90
    }



  return (
    <div>
        <h1>{user.name}</h1>
      <button>I'm a button</button>
      <img 
        className='avatar' 
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style = {{
            width: user.imageSize,
            height: user.imageSize
        }}
      />
    </div>
  )
}

export default Component1
