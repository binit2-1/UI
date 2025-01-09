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
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-20 flex justify-center space-x-2 p-2 bg-space-blue bg-opacity-80">
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-3 py-1 rounded-lg text-xs pixel-borders pixel-text ${
            currentPage === 'home' ? 'bg-neon-green text-space-blue' : 'bg-space-blue text-neon-blue'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('play')}
          className={`px-3 py-1 rounded-lg text-xs pixel-borders pixel-text ${
            currentPage === 'play' ? 'bg-neon-green text-space-blue' : 'bg-space-blue text-neon-blue'
          }`}
        >
          Play Game
        </button>
      </nav>
      <div className="pt-12">
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

