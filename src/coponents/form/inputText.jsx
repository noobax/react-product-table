/**
 * generic react controlled input text
 * @param {string} value 
 * @param {function} onValue
 * @param {string} placeholder
 */
export function InputText({value, onValue, placeholder}) {
  return <div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onValue(e.target.value)}
    />
  </div>
}
