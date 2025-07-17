"use client"

import { useEffect } from "react"

export function ContentProtection() {
  useEffect(() => {
    // Blokkeer rechtermuisklik
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    // Blokkeer toetsencombinaties zoals Ctrl+C, Ctrl+U, Ctrl+Shift+I
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+U, Ctrl+S, Ctrl+C, F12, Ctrl+Shift+I, Ctrl+Shift+J
      if (
        (e.ctrlKey && ["u", "s", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault()
      }
    }

    // Blokkeer selecteren van tekst
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
    }

    // Voeg event listeners toe
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("selectstart", handleSelectStart)

    // Cleanup functie
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("selectstart", handleSelectStart)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: sans-serif;
          background-color: #ffffff;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }
        h1 {
          font-size: 2rem;
          text-align: center;
        }
        p {
          font-size: 1rem;
          line-height: 1.6;
        }
        .button {
          display: inline-block;
          background-color: #00c48c;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1rem;
          margin-top: 20px;
          text-align: center;
        }
        /* 📱 Media query voor mobiele schermen */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.95rem;
          }
          .button {
            width: 100%;
            font-size: 1rem;
            padding: 14px;
          }
          .container {
            padding: 12px;
          }
        }
      `}</style>
    </>
  )
}
