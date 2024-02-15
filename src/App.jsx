import './assets/styles/typography.scss'
import './assets/styles/variables.scss'
import './assets/styles/reset.scss'
import './assets/styles/normalize.scss'
import './App.scss'
import Footer from './components/Footer'
import Form from './components/Form'
import Output from './components/Output'

const App = () => {
  return (
    <>
      <main className="mainContainer">
        <Form />
        <Output />
      </main>
      <Footer />
    </>
  )
}

export default App
