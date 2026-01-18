import React from 'react'
import './NoteLink.css'

/**
 * NoteLink Atom Component
 * 
 * A combined interactive element displaying a pencil icon and "Заметка" text.
 * Used as a single reusable atom for note-related actions.
 * 
 * @param {function} onClick - Callback function called when NoteLink is clicked
 * @param {string} className - Optional additional CSS classes
 * @param {object} rest - Any additional props to pass to the element
 */
const NoteLink = ({ 
  onClick,
  className = '',
  ...rest 
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  const handleKeyDown = (e) => {
    // Make it keyboard accessible
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (onClick) {
        onClick(e)
      }
    }
  }

  return (
    <button
      className={`note-link ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
      aria-label="Заметка"
      {...rest}
    >
      <svg 
        className="note-link__icon" 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path 
          d="M11.3333 2.00001C11.5084 1.82489 11.7163 1.68604 11.9456 1.59123C12.1749 1.49643 12.4212 1.44757 12.6667 1.44757C12.9121 1.44757 13.1584 1.49643 13.3877 1.59123C13.617 1.68604 13.8249 1.82489 14 2.00001C14.1751 2.17513 14.314 2.38303 14.4088 2.61233C14.5036 2.84163 14.5524 3.08789 14.5524 3.33334C14.5524 3.57879 14.5036 3.82506 14.4088 4.05435C14.314 4.28365 14.1751 4.49155 14 4.66668L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="note-link__text">Заметка</span>
    </button>
  )
}

export default NoteLink
