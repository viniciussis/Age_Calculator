import './RoundButton.scss'
import arrowIcon from '../../assets/images/icons/icon-arrow.svg'

const RoundButton = () => {
  return (
    <button className="button" type="submit">
      <img className='button__img' src={arrowIcon} alt="Arrow Down" />
    </button>
  )
}

export default RoundButton
