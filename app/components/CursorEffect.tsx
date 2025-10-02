'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', updateMousePosition)

        // Add hover listeners to buttons
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleMouseEnter)
            button.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            buttons.forEach(button => {
                button.removeEventListener('mouseenter', handleMouseEnter)
                button.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div
                className="cursor-glow"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            />
            <div
                className="cursor-dot"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
                }}
            />
        </>
    )
}