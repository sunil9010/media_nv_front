import {useState} from 'react'
import {GoSearch} from 'react-icons/go'
import {MdAddBox} from 'react-icons/md'
import './index.css'

function Search() {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = option => {
    setSelectedOption(option)
  }
  return (
    <div>
      <div className="search-emi">
        <div className="navbar-container">
          <ul className="calender-items main-track">
            <div className="tracks">
              <li
                className={`navbar-option ${
                  selectedOption === 'Live' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('Live')}
              >
                Live
              </li>
              <li
                className={`navbar-option ${
                  selectedOption === 'Results' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('Results')}
              >
                Results
              </li>
              <li
                className={`navbar-option ${
                  selectedOption === 'History' ? 'select' : ''
                }`}
                onClick={() => handleOptionClick('History')}
              >
                History
              </li>
              <div className="search-container">
                <GoSearch className="gosearch" />
                <input type="text" className="search" placeholder="Search" />
              </div>
            </div>

            <div className="add-container">
              <p>Create</p>
              <MdAddBox className="mdbox" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Search
