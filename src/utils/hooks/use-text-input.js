import { useState } from 'react';

export default function useTextInput(initialValue, label, showValidationMessage, rules) {
  const [value, setValue] = useState(initialValue)
  const onChange = (value) => setValue(value)

  return {
    value,
    onChange,
    showValidationMessage,
    rules,
    label,
    type: 'text',
    id: label
  }
}
