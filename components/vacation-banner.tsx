"use client"

import { useState, useEffect } from "react"

export function VacationBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style jsx>{`
        .vacation-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #fff3cd;
          color: #856404;
          padding: 16px 40px 16px 20px;
          font-family: sans-serif;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 9999;
        }
        .banner-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .banner-text {
          font-size: 16px;
        }
        .banner-email {
          color: #856404;
          text-decoration: underline;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-weight: bold;
          font-size: 20px;
          background: none;
          border: none;
          color: #856404;
        }
        @media (max-width: 768px) {
          .vacation-banner {
            padding: 12px 35px 12px 15px;
          }
          .banner-text {
            font-size: 14px;
          }
          .close-button {
            top: 8px;
            right: 8px;
            font-size: 18px;
          }
        }
      `}</style>
      <div className="vacation-banner">
        <div className="banner-container">
          <span className="banner-text">
            📢 We're on vacation until <strong>Monday, August 11, 2025</strong>. Emails sent to{" "}
            <a href="mailto:info@aibuysstocks.com" className="banner-email">
              info@aibuysstocks.com
            </a>{" "}
            will be answered after our return.
          </span>
          <button onClick={() => setIsVisible(false)} className="close-button" aria-label="Close banner">
            ×
          </button>
        </div>
      </div>
    </>
  )
}
