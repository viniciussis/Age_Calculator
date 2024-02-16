import PropTypes from 'prop-types'
import './NumberField.scss'

const NumberField = ({ label, max, min, placeholder }) => {
  return (
    <div className="fields">
      <label className="fields__label" htmlFor={label}>
        {label}
      </label>
      <input
        className="fields__input"
        type="number"
        name={label}
        id={label}
        min={min}
        max={max}
        placeholder={placeholder}
      />
    </div>
  )
}

NumberField.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default NumberField
