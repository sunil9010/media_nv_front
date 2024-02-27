import {FaPhoneAlt, FaBusAlt} from 'react-icons/fa'
import {RiMapPinFill} from 'react-icons/ri'
import {BsFillBagDashFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {GiCardboardBoxClosed} from 'react-icons/gi'
import {IoMdPerson} from 'react-icons/io'
import {GoChevronUp} from 'react-icons/go'
import './index.css'

function AuctionDetails({auction, setSelectedAuctionIndex}) {
  return (
    <div className="all-travel">
      <div className="maps">
        <p className="bidno">
          Bid No: {auction.bidNumber}{' '}
          <span className="bidspan">{auction.createdBy}</span>
        </p>
        <div className="align-maps">
          <div>
            <div className="maps">
              <p className="from">🟢</p>
              <div className="line">
                <hr />
              </div>

              <p className="from">
                <RiMapPinFill className="RiMapPinFill" />
              </p>
            </div>
          </div>
          <div>
            <p className="from-loading">
              Manesar, Gurugram,
              <span className="location">{auction.fromCity}</span>{' '}
            </p>
            <p className="loading">
              LoadingPoint:{' '}
              <span className="loadingspan">
                Ramchandra Ramniwas oil mill <br />, Alwar ,Rajasthan
              </span>
            </p>
            <p className="from-loading">
              Kotputli,
              <span className="location">{auction.toCity}</span>{' '}
            </p>
            <p className="unloading">
              Unloading Point:{' '}
              <span className="loadingspan">
                Ramchandra Ramniwas oil mill <br />, Alwar ,Rajasthan
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="maps">
        <div>
          <p className="vechile-load">
            <BsFillBagDashFill className="icon-call" />
            Vehicle loading date: {auction.startDate}
          </p>

          <div className="common">
            <p className="assigned ">
              <FaBusAlt className="icon-call" />
              Vehicle Type:
              <span className="assigned-staff">
                {' '}
                {auction.vehicleType}
              </span>{' '}
              <span className="cng">CNG</span>
            </p>
          </div>
          <div className="material-container common">
            <p className="assigned common">
              <GiCardboardBoxClosed className="icon-call" />
              Material:
              <span className="assigned-staff">Agricultural Products</span>{' '}
            </p>
            <p className="assigned weight common">
              Weight:{' '}
              <span className="assigned-staff">{auction.materialWeight}</span>
            </p>
          </div>
        </div>
        <div className="material-container common">
          <p className="assigned common">
            <BsFillBriefcaseFill className="icon-call" />
            Request Date:{' '}
            <span className="assigned-staff">{auction.startDate}</span>
          </p>
          <p className="assigned weight ">
            <BsFillBriefcaseFill className="icon-call" />
            Expiry Date:{' '}
            <span className="assigned-staff">{auction.startDate}</span>
          </p>
        </div>
        <p className="assigned common">
          Remarks:<span className="assigned-staff">Urgency</span>
        </p>
      </div>
      <div className="maps">
        <p className="assigned">
          <IoMdPerson className="icon-call" />
          Assigned Staff:{' '}
          <span className="assigned-staff">{auction.assignedStaff}</span>
        </p>
        <p className="assigned">
          <FaPhoneAlt className="icon-call" />
          Phone number:
          <span className="assigned-staff">+91 332423442442</span>{' '}
        </p>
        <p className="assigned">
          Target Price: <span className="assigned-staff">Rs 5000</span>
        </p>
        <p className="assigned">
          Number of Bider for this Bid:{' '}
          <span className="assigned-staff">54</span>
        </p>
        <p className="assigned-staff">View Details</p>

        <button
          type="button"
          className="s"
          onClick={() => setSelectedAuctionIndex(null)}
        >
          View Less <GoChevronUp />
        </button>
      </div>
    </div>
  )
}
export default AuctionDetails
