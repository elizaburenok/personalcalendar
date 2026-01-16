import './Card.css'

/**
 * Card Component
 * Container component for content sections
 */
const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  className = '',
  ...props 
}) => {
  const baseClass = 'card'
  const variantClass = `card--${variant}`
  const paddingClass = `card--padding-${padding}`
  
  const classes = [baseClass, variantClass, paddingClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
