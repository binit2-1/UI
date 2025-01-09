'use client'

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
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden pixel-borders mb-2">
        <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <label className="cursor-pointer bg-neon-blue text-space-blue px-3 py-1 rounded pixel-borders text-xs">
        Change PFP
        <input type="file" className="hidden" onChange={handlePfpChange} accept="image/*" />
      </label>
    </div>
  )
}

export default ProfilePic

