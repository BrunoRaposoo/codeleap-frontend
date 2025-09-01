'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../hooks/useUser";
import Button from "./Buttons";

interface SignUpFormProps {
  label: string;
  placeholder: string;
}

export default function SignUpForm({ label, placeholder }: SignUpFormProps) {
  const [username, setUsername] = useState<string>('')
  const { saveUsername } = useUser()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(username.trim()) {
      saveUsername(username.trim())
      console.log('username: ', username)
      router.push('/home')
    }
  }

  const disableButton = !username.trim();

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <label 
          htmlFor="username"
          className="font-normal text-base mb-2"
        >
          {label}
        </label>
        <input
          id="username"
          className="border border-gray-500 rounded-lg py-2 px-3 mb-4 focus:outline-none focus:ring-1 focus:ring-primary" 
          type="text" 
          placeholder={placeholder}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="self-end">
          <Button type="submit" disabled={disableButton}>
            ENTER
          </Button>
        </div>
      </form>
    </div>
  )
}