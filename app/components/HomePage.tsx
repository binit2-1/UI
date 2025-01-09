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
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '100vh' 
    }}>
      <Background />
      <div style={{ 
        width: '100%', 
        maxWidth: '600px', 
        padding: '32px', 
        backgroundColor: 'rgba(10, 20, 30, 0.8)', 
        border: '2px solid #00FFFF', 
        borderRadius: '8px', 
        position: 'relative', 
        zIndex: 10 
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#00FF00', 
          marginBottom: '24px', 
          textAlign: 'center', 
          border: '2px solid #00FFFF', 
          padding: '8px' 
        }}>
          Welcome to CosmicKit
        </h1>
        <div style={{ color: '#00FFFF', fontSize: '14px', gap: '16px', display: 'flex', flexDirection: 'column' }}>
          <ProfilePic />
          <Username />
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <p style={{ wordBreak: 'break-all' }}>Wallet: {walletAddress}</p>
            <p>10 in-game points = 1 DuckChain token</p>
            <p>Total Points: {points}</p>
            <p>DuckChain Tokens: {duckchainTokens}</p>
          </div>
          <button
            onClick={handleRedeemRewards} 
            style={{ 
              width: '100%', 
              padding: '12px', 
              backgroundColor: '#00FF00', 
              color: '#0A141E', 
              borderRadius: '8px', 
              border: '2px solid #00FFFF', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s' 
            }}
          >
            Redeem Rewards
          </button>
          {redeemMessage && (
            <p style={{ color: '#00FF00', textAlign: 'center' }}>{redeemMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage

