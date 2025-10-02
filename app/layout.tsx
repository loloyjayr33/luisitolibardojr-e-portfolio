import React from 'react'
import './globals.css'

export const metadata = {
    title: 'Luisito Jr Libardo - Portfolio',
    description: 'Full Stack Developer - Connect with me on LinkedIn and GitHub',
    icons: {
        icon: '/profile.jpeg',
        apple: '/profile.jpeg',
    },
    openGraph: {
        title: 'Luisito Jr Libardo - Portfolio',
        description: 'Full Stack Developer - Connect with me on LinkedIn and GitHub',
        images: ['/profile.jpeg'],
    },
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