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
    <div className="flex flex-col items-center">
      {isEditing ? (
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="bg-space-blue text-neon-blue border-2 border-neon-blue rounded px-2 py-1 text-center pixel-borders"
        />
      ) : (
        <span className="text-neon-blue text-lg">{username}</span>
      )}
      <button
        onClick={toggleEdit}
        className="mt-2 text-xs bg-neon-green text-space-blue px-2 py-1 rounded pixel-borders"
      >
        {isEditing ? 'Save' : 'Change Username'}
      </button>
    </div>
  )
}

export default Username

