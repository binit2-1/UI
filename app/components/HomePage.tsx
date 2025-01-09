'use client'

import React, { useState, useEffect } from 'react'
import ProfilePic from './ProfilePic'
import Username from './Username'
import Background from './Background'

interface HomePageProps {
  walletAddress: string
}

const HomePage: React.FC<HomePageProps> = ({ walletAddress }) => {
  const [points, setPoints] = useState(0)
  const [duckchainTokens, setDuckchainTokens] = useState(0)
  const [redeemMessage, setRedeemMessage] = useState('')

  useEffect(() => {
    // Simulating points fetching
    setPoints(Math.floor(Math.random() * 1000))
  }, [])

  const handleRedeemRewards = () => {
    const tokensToRedeem = Math.floor(points / 10)
    if (tokensToRedeem > 0) {
      setPoints(prevPoints => prevPoints - (tokensToRedeem * 10))
      setDuckchainTokens(prevTokens => prevTokens + tokensToRedeem)
      setRedeemMessage(`Redeemed ${tokensToRedeem} DuckChain token(s)!`)
    } else {
      setRedeemMessage("Not enough points to redeem.")
    }
    
    // Clear message after 3 seconds
    setTimeout(() => setRedeemMessage(''), 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Background />
      <div className="w-full max-w-md p-8 space-y-8 bg-space-blue bg-opacity-80 rounded-lg border-2 border-neon-blue pixel-borders relative z-10">
        <h1 className="text-xl font-bold text-neon-green mb-6 text-center pixel-borders p-2">
          Welcome to CosmicKit
        </h1>
        <div className="space-y-6">
          <ProfilePic />
          <Username />
          <div className="text-neon-blue text-xs space-y-4 pixel-text">
            <p className="break-all">Wallet: {walletAddress}</p>
            <p>10 in-game points = 1 DuckChain token</p>
            <p>Total Points: {points}</p>
            <p>DuckChain Tokens: {duckchainTokens}</p>
          </div>
          <button 
            onClick={handleRedeemRewards}
            className="w-full p-3 bg-neon-green text-space-blue rounded-lg pixel-borders hover:bg-neon-blue transition-colors duration-300 pixel-text"
          >
            Redeem Rewards
          </button>
          {redeemMessage && (
            <p className="text-neon-green text-center pixel-text">{redeemMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage

