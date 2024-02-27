import {useState} from 'react'
import {FaFilter} from 'react-icons/fa'

import './index.css'

function Search() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const handleOptionClick = option => {
    setSelectedOption(option)
  }
  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }
  return (
    <div>
      <div className="search">
        <div className="nav-container ">
          <ul className="calender-items ">
            <div className="navbar-options">
              <li className="navbar-option live">Live(30)</li>
              <li className="navbar-option responded">Responded(30)</li>
              <li className="navbar-option unresponded">UnResponded(30)</li>
            </div>
            <div className="navbar-options">
              <li
                className={`navbar-option live ${
                  selectedOption === 'Bid Created' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('Bid Created')}
              >
                Bid Created
              </li>
              <li
                className={`navbar-option ${
                  selectedOption === 'Today' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('Today')}
              >
                Today
              </li>
              <li
                className={`navbar-option ${
                  selectedOption === 'Yesterday' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('Yesterday')}
              >
                Yesterday
              </li>
              <li>
                <div>
                  <select placeholder="Calender" className="custom-date-picker">
                    <option>Calender</option>
                  </select>
                </div>
              </li>
              <FaFilter className="filter" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Search
