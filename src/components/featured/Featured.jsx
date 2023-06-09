import './featured.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={45} text='45%' strokeWidth={5}/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$689</p>
            <p className="description">Transactions may be pending, payments from last 6hrs may not be not included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$19.3k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">$19.3k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$19.3k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured