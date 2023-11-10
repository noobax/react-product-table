/**
 * Range input
 * @param {number} min 
 * @param {number} max 
 * @param {number} current 
 * @param {number} step 
 * @param {(number) => void} onSlide 
 */
export function InputRange({min, max, current, step, onSlide}) {
  return <div>
      {min}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={(e) => onSlide(e.target.value)}
      />
      {current}
    <br/><label>Pick a price range</label>
  </div>
}
