import {useState} from 'react'
import {FaArrowDown} from 'react-icons/fa'
import AuctionDetails from '../AuctionDetails'

import './index.css'

function AuctionTable() {
  const [selectedAuctionIndex, setSelectedAuctionIndex] = useState(null)
  const auctionData = [
    {
      startDate: '14/02/2024',
      startTime: '05:40 PM',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Gurgaon',
      toCity: 'Mumbai',
      vehicleType: 'Truck, 20 ft',
      body: 'Close body',
      numberOfVehicles: 1,
      bidNumber: '#122345678123',
      createdBy: 'Sunder Yadav',
      materialWeight: '4000 Kg',
      assignedStaff: 'Mohit',
      sNo: 1,
      response: '4',
      number: '5215001161264',
    },
    {
      startDate: '15/02/2024',
      startTime: '06:00 AM',
      bidTimeRemaining: '4hr 10min',
      fromCity: 'Delhi',
      toCity: 'Bangalore',
      vehicleType: 'Van, 15 ft',
      body: 'Open body',
      numberOfVehicles: 2,
      bidNumber: '#987654321',
      createdBy: 'John Doe',
      materialWeight: '3000 Kg',
      assignedStaff: 'Alice',
      sNo: 2,
      response: '4',
      number: '5215001161264',
    },
    {
      startDate: '16/02/2024',
      startTime: '09:30 AM',
      bidTimeRemaining: '5hr 45min',
      fromCity: 'Kolkata',
      toCity: 'Chennai',
      vehicleType: 'Truck, 25 ft',
      body: 'Closed body',
      numberOfVehicles: 1,
      bidNumber: '#456789012',
      createdBy: 'Jane Smith',
      materialWeight: '5000 Kg',
      assignedStaff: 'David',
      sNo: 3,
      response: '4',
      number: '5215001161264',
    },
    {
      startDate: '16/02/2024',
      startTime: '09:30 AM',
      bidTimeRemaining: '5hr 45min',
      fromCity: 'Kolkata',
      toCity: 'Chennai',
      vehicleType: 'Truck, 25 ft',
      body: 'Closed body',
      numberOfVehicles: 1,
      bidNumber: '#456789022',
      createdBy: 'Jane Smith',
      materialWeight: '5000 Kg',
      assignedStaff: 'David',
      sNo: 4,
      response: '4',
      number: '5215001161264',
    },
    {
      startDate: '16/02/2024',
      startTime: '09:30 AM',
      bidTimeRemaining: '5hr 45min',
      fromCity: 'Kolkata',
      toCity: 'Chennai',
      vehicleType: 'Truck, 25 ft',
      body: 'Closed body',
      numberOfVehicles: 1,
      bidNumber: '#456789012',
      createdBy: 'Jane Smith',
      materialWeight: '5000 Kg',
      assignedStaff: 'Mohit',
      sNo: 4,
      response: '4',
      number: '5215001161264',
    },
  ]

  const handleAuctionClick = index => {
    setSelectedAuctionIndex(index)
  }

  return (
    <div>
      <div className="table-container">
        <table className="auction-table">
          <thead>
            <tr>
              <th>S No.</th>
              <th>
                Bid Number
                <br /> Created By
              </th>
              <th>
                Start Date <br /> & Time
              </th>
              <th>
                Bid Time
                <br /> Remaining
              </th>
              <th className="city">
                From City <br />
                To City
              </th>
              <th>
                Vehicle Type, Size
                <br /> Body,No. of Vehicle
              </th>

              <th>
                Material Weight
                <br /> (in Kg)
              </th>
              <th>Response</th>
              <th>Assigned Staff</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr key={auctionData[0].bidNumber}>
              <td>{auctionData[0].sNo}</td>
              <td>
                {auctionData[0].bidNumber} <br />
                <span className="span">{auctionData[0].createdBy}</span>
              </td>
              <td>
                {auctionData[0].startDate} <br />{' '}
                <span className="span">{auctionData[0].startTime}</span>
              </td>
              <td>{auctionData[0].bidTimeRemaining}</td>
              <td>
                {auctionData[0].fromCity} <br />{' '}
                <FaArrowDown className="arrow" /> <br /> {auctionData[0].toCity}
              </td>
              <td>
                {auctionData[0].vehicleType} <br />{' '}
                <span>{auctionData[0].body}</span>
              </td>
              <td>{auctionData[0].materialWeight}</td>
              <td>{auctionData[0].response}</td>
              <td>
                {auctionData[0].assignedStaff} <br />{' '}
                <span className="span">{auctionData[0].number}</span>
              </td>

              <td>
                <button type="button" onClick={() => handleAuctionClick(0)}>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="10">
                {selectedAuctionIndex === 0 ? (
                  <AuctionDetails
                    auction={auctionData[selectedAuctionIndex]}
                    setSelectedAuctionIndex={setSelectedAuctionIndex}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>

            <tr key={auctionData[1].bidNumber}>
              <td>{auctionData[1].sNo}</td>
              <td className="bidnumber">
                {auctionData[1].bidNumber}{' '}
                <span className="span">{auctionData[1].createdBy}</span>
              </td>
              <td>
                {auctionData[1].startDate} <br />{' '}
                <span className="span">{auctionData[1].startTime}</span>
              </td>
              <td>{auctionData[1].bidTimeRemaining}</td>
              <td>
                {auctionData[1].fromCity} <br />{' '}
                <FaArrowDown className="arrow" /> <br /> {auctionData[1].toCity}
              </td>
              <td>
                {auctionData[1].vehicleType} <br />{' '}
                <span>{auctionData[1].body}</span>
              </td>
              <td>{auctionData[1].materialWeight}</td>
              <td>{auctionData[1].response}</td>
              <td>
                {auctionData[1].assignedStaff} <br />{' '}
                <span className="span">{auctionData[1].number}</span>
              </td>

              <td>
                <button type="button" onClick={() => handleAuctionClick(1)}>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="10">
                {selectedAuctionIndex === 1 ? (
                  <AuctionDetails
                    auction={auctionData[selectedAuctionIndex]}
                    setSelectedAuctionIndex={setSelectedAuctionIndex}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>

            <tr key={auctionData[2].bidNumber}>
              <td>{auctionData[2].sNo}</td>
              <td className="bidnumber">
                {auctionData[2].bidNumber}{' '}
                <span className="span">{auctionData[2].createdBy}</span>
              </td>
              <td>
                {auctionData[2].startDate} <br />{' '}
                <span className="span">{auctionData[2].startTime}</span>
              </td>
              <td>{auctionData[2].bidTimeRemaining}</td>
              <td>
                {auctionData[2].fromCity} <br />{' '}
                <FaArrowDown className="arrow" /> <br /> {auctionData[2].toCity}
              </td>
              <td>
                {auctionData[2].vehicleType} <br />{' '}
                <span>{auctionData[2].body}</span>
              </td>
              <td>{auctionData[2].materialWeight}</td>
              <td>{auctionData[2].response}</td>
              <td>
                {auctionData[2].assignedStaff} <br />{' '}
                <span className="span">{auctionData[2].number}</span>
              </td>

              <td>
                <button type="button" onClick={() => handleAuctionClick(2)}>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="10">
                {selectedAuctionIndex === 2 ? (
                  <AuctionDetails
                    auction={auctionData[selectedAuctionIndex]}
                    setSelectedAuctionIndex={setSelectedAuctionIndex}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>

            <tr key={auctionData[3].bidNumber}>
              <td>{auctionData[3].sNo}</td>
              <td className="bidnumber">
                {auctionData[3].bidNumber}{' '}
                <span className="span">{auctionData[3].createdBy}</span>
              </td>
              <td>
                {auctionData[3].startDate} <br />{' '}
                <span className="span">{auctionData[3].startTime}</span>
              </td>
              <td>{auctionData[3].bidTimeRemaining}</td>
              <td>
                {auctionData[3].fromCity} <br />{' '}
                <FaArrowDown className="arrow" /> <br /> {auctionData[3].toCity}
              </td>
              <td>
                {auctionData[3].vehicleType} <br />{' '}
                <span>{auctionData[3].body}</span>
              </td>
              <td>{auctionData[3].materialWeight}</td>
              <td>{auctionData[3].response}</td>
              <td>
                {auctionData[3].assignedStaff} <br />{' '}
                <span className="span">{auctionData[3].number}</span>
              </td>

              <td>
                <button type="button" onClick={() => handleAuctionClick(3)}>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="10">
                {selectedAuctionIndex === 3 ? (
                  <AuctionDetails
                    auction={auctionData[selectedAuctionIndex]}
                    setSelectedAuctionIndex={setSelectedAuctionIndex}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>

            <tr key={auctionData[4].bidNumber}>
              <td>{auctionData[4].sNo}</td>
              <td className="bidnumber">
                {auctionData[4].bidNumber}{' '}
                <span className="span">{auctionData[4].createdBy}</span>
              </td>
              <td>
                {auctionData[4].startDate} <br />{' '}
                <span className="span">{auctionData[4].startTime}</span>
              </td>
              <td>{auctionData[4].bidTimeRemaining}</td>
              <td>
                {auctionData[4].fromCity} <br />{' '}
                <FaArrowDown className="arrow" /> <br /> {auctionData[4].toCity}
              </td>
              <td>
                {auctionData[4].vehicleType} <br />{' '}
                <span>{auctionData[4].body}</span>
              </td>
              <td>{auctionData[4].materialWeight}</td>
              <td>{auctionData[4].response}</td>
              <td>
                {auctionData[4].assignedStaff} <br />{' '}
                <span className="span">{auctionData[4].number}</span>
              </td>

              <td>
                <button type="button" onClick={() => handleAuctionClick(4)}>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="10">
                {selectedAuctionIndex === 4 ? (
                  <AuctionDetails
                    auction={auctionData[selectedAuctionIndex]}
                    setSelectedAuctionIndex={setSelectedAuctionIndex}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AuctionTable
