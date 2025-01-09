'use client'

import { useState } from 'react'
import WalletAuth from './components/WalletAuth'
import GameLayout from './components/GameLayout'

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleWalletConnect = (address: string) => {
    setIsConnected(true)
    setWalletAddress(address)
  }

  return (
    <main className="min-h-screen">
      {!isConnected ? (
        <WalletAuth onConnect={handleWalletConnect} />
      ) : (
        <GameLayout walletAddress={walletAddress} />
      )}
    </main>
  )
}

