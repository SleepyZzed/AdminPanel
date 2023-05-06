import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetzationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget = ({ type }) => {
    let data;
    //temp data
    const amount = 1000; 
    const diff = 34;

    switch (type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon: <AccountCircleIcon className='icon' style={{
                    color:'crimson',
                    backgroundColor: 'rgba(255,0,0,0.2)',
                }}/>,
                
                };
                break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon'style={{
                    color:'#5c3d11',
                    backgroundColor: 'rgba(171, 148, 114, 0.2)',
                }}/>,
                
                };
                break;
        case "earnings":
            data={
                title:"EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetzationOnOutlinedIcon className='icon'style={{
                    color:'#05ff2b',
                    backgroundColor: 'rgba(22, 122, 37,0.2)',
                }}/>,
                
                };
        break;  
        case "balance":
    data={
        title:"BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className='icon'style={{
            color:'#082dff',
            backgroundColor: 'rgba(64, 78, 153,0.2)',
        }}/>,
        
        };
        break;
        default:
        break;
                }



  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget