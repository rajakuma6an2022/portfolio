import React from 'react'

export const Moon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
)

export const Sun: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v1m0 16v1m8.66-13.66l-.71.71M5.05 18.95l-.71.71M21 12h1M2 12H3m15.66 6.66l-.71-.71M5.05 5.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
)
