import React, { useState } from 'react'
// import { Loader2, Wallet } from 'lucide-react'
import Background from './Background'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  innerContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '32px',
    backgroundColor: 'rgba(10, 20, 30, 0.8)',
    border: '2px solid #00FFFF',
    borderRadius: '8px',
    position: 'relative',
    zIndex: 10,
  },
  h1: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00FF00',
    marginBottom: '24px',
    textAlign: 'center',
    border: '2px solid #00FFFF',
    padding: '8px',
  },
  p: {
    color: '#00FFFF',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#333',
    border: '2px solid #00FFFF',
    color: '#fff',
    borderRadius: '8px',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00FF00',
    color: '#0A141E',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s',
    border: '2px solid #00FFFF',
    cursor: 'pointer',
  },
  error: {
    padding: '16px',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    border: '2px solid red',
    color: 'red',
    borderRadius: '8px',
    fontSize: '14px',
  },
}
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
    <div style={styles.container}>
      <Background />
      <div style={styles.innerContainer}>
        {/* Header */}
        <div>
          <h1 style={styles.h1}>
            CosmicKit
          </h1>
          <p style={styles.p}>
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
              onChange={e => setFormState(prev => ({ ...prev, walletNumber: e.target.value }))}
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
              <span>Loading...</span>
            ) : (
              <>
                <span>Wallet</span>
                <span>Connect TON Wallet</span>
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

