import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
         <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" className="itemImage" />
                <div className="details">
                     <h1 className="itemTitle">Ang Doe</h1>
                     <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">Angdoe@gmail.com</span>
                     </div>
                     <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">+44 7883 73 55 09</span>
                     </div>
                     <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">721 - 723 Durham Rd.</span>
                     </div>
                     <div className="detailItem">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue">United Kingdom</span>
                     </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={ 3 / 1 } title= "User Spending (Last 6 months)"/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Recent Transactions</h1>
              <List />
          </div>
      </div>
    </div>
  )
}

export default Single