import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Calender from './components/Calender'
import AuctionTable from './components/AuctionTable'

const App = () => (
  <div className="app-container">
    <div className="side">
      <Sidebar />
    </div>
    <div className="app-components">
      <Navbar />
      <Search />
      <Calender />
      <AuctionTable />
    </div>
  </div>
)

export default App
