'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      router.push('/home');
    } else {
      router.push('/sign-up');
    }
  }, [router]);

  return null;
}