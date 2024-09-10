"use client"

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Learn() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/learn') {
      router.push('/learn/getting-started/setup');
    }
  }, [pathname, router]);

  return (
    <div>
    </div>
  );
}