'use client'

import { useState, useEffect } from 'react'

export function useUser() {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const saveUsername = (newUsername: string) => {
    setUsername(newUsername)
    localStorage.setItem('username', newUsername)
  }

  return { username, saveUsername }
}