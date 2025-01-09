import { useState } from 'react'

const ProfilePic: React.FC = () => {
  const [pfp, setPfp] = useState('/placeholder.svg?height=100&width=100')

  const handlePfpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPfp(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        width: '96px', 
        height: '96px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
        marginBottom: '8px',
        border: '2px solid #00FFFF' 
      }}>
        <img 
          src={pfp} 
          alt="Profile" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <label style={{ 
        cursor: 'pointer', 
        backgroundColor: '#00FFFF', 
        color: '#0A141E', 
        padding: '8px 12px', 
        borderRadius: '4px', 
        fontSize: '14px',
        border: '2px solid #00FFFF'
      }}>
        Change PFP
        <input type="file" style={{ display: 'none' }} onChange={handlePfpChange} accept="image/*" />
      </label>
    </div>
  )
}

export default ProfilePic

