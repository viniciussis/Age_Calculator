import './assets/styles/typography.scss'
import './assets/styles/variables.scss'
import './assets/styles/reset.scss'
import './assets/styles/normalize.scss'
import './App.scss'
import Footer from './components/Footer'
import Form from './components/Form'
import Output from './components/Output'
import { useState } from 'react'

const App = () => {
  const [age, setAge] = useState({
    days: null,
    months: null,
    years: null,
  })

  const calculatingAge = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const birthDate = new Date(
      formData.get('year'),
      formData.get('month') - 1,
      formData.get('day'),
    )
    const currentDate = new Date()

    const ageInDays = (currentDate - birthDate) / (1000 * 60 * 60 * 24)
    const ageInYears = ageInDays / 365
    const ageInMonths = ageInYears * 12

    const years = Math.floor(ageInYears)
    const months = Math.floor(ageInMonths % 12)
    const days = Math.floor(ageInDays % 30.436875)

    setAge({
      days: days,
      months: months,
      years: years,
    })
  }

  const handleValidation = () => {}

  return (
    <>
      <main className="mainContainer">
        <Form
          calculatingAge={calculatingAge}
          handleValidation={handleValidation}
        />
        <Output age={age} />
      </main>
      <Footer />
    </>
  )
}

export default App
