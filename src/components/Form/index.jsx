import './Form.scss'
import NumberField from '../NumberField'
import RoundButton from '../RoundButton'
import PropTypes from 'prop-types'

const Form = ({ calculatingAge, handleValidation }) => {
  return (
    <form onSubmit={calculatingAge} className="form">
      <div className="form__fields">
        <NumberField
          onBlur={handleValidation}
          label="day"
          min={1}
          max={31}
          placeholder="DD"
        />
        <NumberField
          onBlur={handleValidation}
          label="month"
          min={1}
          max={12}
          placeholder="MM"
        />
        <NumberField
          onBlur={handleValidation}
          label="year"
          min={1}
          max={2024}
          placeholder="YYYY"
        />
      </div>
      <div className="form__button">
        <RoundButton />
      </div>
    </form>
  )
}

Form.propTypes = {
  calculatingAge: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
}

export default Form
