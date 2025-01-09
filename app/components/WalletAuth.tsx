'use client'

import React, { useState } from 'react'
import { Loader2, Wallet } from 'lucide-react'
import Background from './Background'

interface WalletAuthProps {
  onConnect: (address: string) => void
}

const WalletAuth: React.FC<WalletAuthProps> = ({ onConnect }) => {
  const [formState, setFormState] = useState({
    walletNumber: '',
    isLoading: false,
    error: '',
  })

  const handleWalletConnect = async () => {
    try {
      if (!formState.walletNumber.trim()) {
        throw new Error('Please enter wallet number')
      }

      setFormState(prev => ({ ...prev, isLoading: true, error: '' }))
      // Simulated TON wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockAddress = 'EQA...xyz'
      
      console.log('Wallet Connected:', {
        walletNumber: formState.walletNumber,
        walletAddress: mockAddress
      })

      onConnect(mockAddress)
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: error.message || 'Failed to connect TON wallet. Please try again.',
        isLoading: false,
      }))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Background />
      <div className="w-full max-w-md p-8 space-y-8 bg-space-blue bg-opacity-80 rounded-lg border-2 border-neon-blue pixel-borders relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-neon-green mb-6 text-center pixel-borders p-2">
            CosmicKit
          </h1>
          <p className="text-neon-blue text-xs pixel-text">
            Connect Your Wallet to Play!
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Wallet Number Input */}
          <div className="space-y-2">
            <input
              type="text"
              value={formState.walletNumber}
              onChange={(e) => setFormState(prev => ({ ...prev, walletNumber: e.target.value }))}
              className="w-full p-3 bg-gray-800 rounded-lg border-2 border-neon-blue text-white focus:outline-none focus:border-neon-green pixel-borders"
              placeholder="Enter wallet number"
            />
          </div>

          {/* Wallet Connection */}
          <button
            onClick={handleWalletConnect}
            className="w-full p-3 bg-neon-green hover:bg-neon-blue text-space-blue rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 pixel-borders transition-colors duration-300"
            disabled={formState.isLoading}
          >
            {formState.isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Wallet size={20} />
                <span className="text-xs pixel-text">Connect TON Wallet</span>
              </>
            )}
          </button>
        </div>

        {/* Error Display */}
        {formState.error && (
          <div className="p-4 bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-lg text-red-500 text-xs pixel-borders pixel-text">
            {formState.error}
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletAuth

