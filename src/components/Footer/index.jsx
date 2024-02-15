import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <p className='footer__message'>
        Challenge by
        <a
          className="message__link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          {' '}
          Frontend Mentor
        </a>
        . Coded by
        <a
          className="message__link"
          href="https://github.com/viniciussis"
          target="_blank"
        >
          {' '}
          Vinícius S Santos
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
