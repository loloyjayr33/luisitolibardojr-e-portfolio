import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Luisito Jr Libardo - Portfolio',
  description: 'Connect with me on LinkedIn and GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}