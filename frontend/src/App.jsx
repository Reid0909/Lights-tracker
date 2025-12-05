import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

export default function App() {
  const [status, setStatus] = useState('unknown')

  useEffect(() => {
    async function check() {
      if (!API_BASE) return setStatus('no_api_base')
      try {
        const res = await fetch(`${API_BASE}/health`)
        const data = await res.json()
        setStatus(JSON.stringify(data))
      } catch (e) {
        setStatus('error')
      }
    }
    check()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Lights Tracker</h1>
      <p>API: {API_BASE || 'not set'}</p>
      <p>Health: {status}</p>
    </div>
  )
}
