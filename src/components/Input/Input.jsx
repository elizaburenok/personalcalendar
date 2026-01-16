import './Input.css'

/**
 * Input Component
 * Reusable input field component
 */
const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  ...props 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`
  const errorClass = error ? 'input--error' : ''
  const disabledClass = disabled ? 'input--disabled' : ''
  
  const inputClasses = ['input', errorClass, disabledClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {error && (
        <span className="input-error">{error}</span>
      )}
    </div>
  )
}

export default Input
