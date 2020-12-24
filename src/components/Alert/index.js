import { isEmpty } from 'loadsh'
import React from 'react'

const Alert = ({ message, type }) => {

  if (isEmpty(message))
    return null;

  const alertType = isEmpty(type) ? 'default' : type;
  const className = `alert alert-${alertType}`;

  return (
    <div className={className} role="alert">
      { message}
    </div>
  )
}

export default Alert;
