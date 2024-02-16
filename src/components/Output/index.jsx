import PropTypes from 'prop-types'
import './Output.scss'

const Output = ({ age }) => {
  return (
    <div className="output">
      <p>
        <strong id="years" className="output__age">
          {age.years == null ? '--' : age.years}
        </strong>{' '}
        years
      </p>
      <p>
        <strong id="months" className="output__age">
          {age.months == null ? '--' : age.months}
        </strong>{' '}
        months
      </p>
      <p>
        <strong id="days" className="output__age">
          {age.days == null ? '--' : age.days}
        </strong>{' '}
        days
      </p>
    </div>
  )
}

Output.propTypes = {
  age: PropTypes.object,
}

export default Output
