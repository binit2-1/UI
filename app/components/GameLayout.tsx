'use client'

import React, { useState } from 'react'
import HomePage from './HomePage'
import PlayGamePage from './PlayGamePage'

interface GameLayoutProps {
  walletAddress: string
}

const GameLayout: React.FC<GameLayoutProps> = ({ walletAddress }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'play'>('home')

  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '8px',
        backgroundColor: 'rgba(10, 20, 30, 0.8)'
      }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            border: '2px solid #00FFFF',
            cursor: 'pointer',
            backgroundColor: currentPage === 'home' ? '#00FF00' : 'rgba(10, 20, 30, 0.8)',
            color: currentPage === 'home' ? '#0A141E' : '#00FFFF'
          }}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('play')}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            border: '2px solid #00FFFF',
            cursor: 'pointer',
            backgroundColor: currentPage === 'play' ? '#00FF00' : 'rgba(10, 20, 30, 0.8)',
            color: currentPage === 'play' ? '#0A141E' : '#00FFFF'
          }}
        >
          Play Game
        </button>
      </nav>
      <div style={{ paddingTop: '72px' }}> {/* Adjusted padding to account for nav height */}
        {currentPage === 'home' ? (
          <HomePage walletAddress={walletAddress} />
        ) : (
          <PlayGamePage />
        )}
      </div>
    </div>
  )
}

export default GameLayout

