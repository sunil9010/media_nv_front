import {useState} from 'react'
import {FaBoxes} from 'react-icons/fa'
import './index.css'

function Sidebar() {
  const optionNames = ['Bid', 'POD', 'Vendor', 'User']
  const profile = ['Settings', 'Profile', 'Contact Us', 'Logout']
  const [selectedOption, setSelectedOption] = useState('Bid')

  const handleOptionClick = option => {
    setSelectedOption(option)
  }
  return (
    <div className="sidebar-container">
      <div className="main">
        <div className="profile">
          <div className="logo-container">P</div>
          <h1 className="logo ">LOGO</h1>
        </div>
        <div className="options-align">
          <div className="options-main">
            {optionNames.map(option => (
              <li
                key={`option-${option}`}
                className={`option ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <FaBoxes className="icon" />
                <h2 className="option-name">{option}</h2>
              </li>
            ))}
          </div>
          <div className="options-main">
            {profile.map(option => (
              <li
                key={`profile-${option}`}
                className={`option ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <FaBoxes className="icon" />
                <h2 className="option-name">{option}</h2>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
