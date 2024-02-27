import {useState} from 'react'
import './index.css'
import {GoPerson} from 'react-icons/go'
import {IoMdArrowDropdown} from 'react-icons/io'

function Navbar() {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = option => {
    setSelectedOption(option)
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-options">
          <li
            className={`navbar-option ${
              selectedOption === 'Bid' ? 'select' : ''
            }`}
            onClick={() => handleOptionClick('Bid')}
          >
            Bid
          </li>
          <li
            className={`navbar-option ${
              selectedOption === 'POD' ? 'select' : ''
            }`}
            onClick={() => handleOptionClick('POD')}
          >
            POD
          </li>
          <li
            className={`navbar-option ${
              selectedOption === 'Vendor' ? 'select' : ''
            }`}
            onClick={() => handleOptionClick('Vendor')}
          >
            Vendor
          </li>
          <li
            className={`navbar-option ${
              selectedOption === 'User' ? 'select' : ''
            }`}
            onClick={() => handleOptionClick('User')}
          >
            User
          </li>
          <li className="person">
            <div className="go">
              <GoPerson className="goperson" />
            </div>
            <p>Freight EG</p>
          </li>
          <IoMdArrowDropdown />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
