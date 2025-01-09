'use client'

import { useState, useEffect } from 'react'

const Username: React.FC = () => {
  const [username, setUsername] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Generate a random username on component mount
    setUsername(`CosmicUser${Math.floor(Math.random() * 1000)}`)
  }, [])

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isEditing ? (
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          style={{
            backgroundColor: 'rgba(10, 20, 30, 0.8)',
            color: '#00FFFF',
            border: '2px solid #00FFFF',
            borderRadius: '4px',
            padding: '4px 8px',
            textAlign: 'center',
          }}
        />
      ) : (
        <span style={{ color: '#00FFFF', fontSize: '18px' }}>{username}</span>
      )}
      <button
        onClick={toggleEdit}
        style={{
          marginTop: '8px',
          fontSize: '12px',
          backgroundColor: '#00FF00',
          color: '#0A141E',
          padding: '4px 8px',
          borderRadius: '4px',
          border: '2px solid #00FFFF',
          cursor: 'pointer',
        }}
      >
        {isEditing ? 'Save' : 'Change Username'}
      </button>
    </div>
  )
}

export default Username

