import './Output.scss'

const Output = ({ age }) => {
  return (
    <div className="output">
      <p>
        <strong id="years" className="output__age">
          --
        </strong>
        years
      </p>
      <p>
        <strong id="months" className="output__age">
          --
        </strong>
        months
      </p>
      <p>
        <strong id="days" className="output__age">
          --
        </strong>
        days
      </p>
    </div>
  )
}

export default Output
