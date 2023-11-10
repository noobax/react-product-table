/**
 * checkbox with label
 * @param {boolean} checked 
 * @param {(boolean) => void} onCheck
 */
export function InputCheckbox({checked, onCheck}) {
  return <div>
    <label>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onCheck(e.target.checked)}
      />
      Only show available product
    </label>
  </div>
}
