import './Form.scss'
import NumberField from '../NumberField'
import RoundButton from '../RoundButton'

const Form = () => {
  return (
    <form className='form' >
      <div className='form__fields'>
        <NumberField label="day" min={1} max={31} placeholder="DD" />
        <NumberField label="month" min={1} max={12} placeholder="MM" />
        <NumberField label="year" min={1900} max={2024} placeholder="YYYY" />
      </div>
      <div className='form__button'>
        <RoundButton/>
      </div>
    </form>
  )
}

export default Form
