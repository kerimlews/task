import { isEmpty } from 'loadsh'
import React from 'react'

const Alert = ({ message, type }) => {

  if (isEmpty(message))
    return null;

  const alertType = isEmpty(type) ? 'default' : type;
  const className = `alert alert-${alertType}`;

  return (
    <div className={className} role="alert">
      { message.map(msg => <div>{msg}</div>)}
    </div>
  )
}

export default Alert;
