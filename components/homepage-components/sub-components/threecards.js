import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShieldAlt, faServer , faClone} from "@fortawesome/free-solid-svg-icons";
import '../../../pages/Fifteenth.css';


import security from '../../../assets/Crypto/Exchange/secure-shield-shield-svgrepo-com.png'
import DB from '../../../assets/Crypto/Exchange/Group 2110.png'
import path from '../../../assets/Crypto/Exchange/Path 4166.png'


const ThreeCards = () =>{
    return(
        <div className='mt-5'style={{display:'flex',padding:'2px'}}>
          <div className='col-4 text-center'>
              <div className="card-body p-1 mb-3 border-1 rounded" style={{backgroundColor:'#9ACBFA',width:'60px',margin:'0 auto'}} >
                <img src={security} ></img>
              </div>
              <h6>SECURE STORAGE</h6>
              <span className='text-muted'>We secure the vast majoity of the digital <br/> ssets in secure offline storage</span>
              <br/>
              <a href="">Read more</a>
          </div>
          <div className='col-4 text-center'>
              <div className="card-body p-1 mb-3 border-1 rounded" style={{backgroundColor:'#9ACBFA',width:'75px',margin:'0 auto'}} >
                <img src={DB} ></img>
              </div>
              <h6>DECENTRALZIED IDENTITY</h6>
              <span className='text-muted'>Cryptocurrency stored in our servers is <br/>covered by our insurance policy</span>
              <br/>
              <a href="">Read more</a>
          </div>
          <div className='col-4 text-center'>
              <div className="card-body p-1 mb-3 border-1 rounded" style={{backgroundColor:'#9ACBFA',width:'70px',margin:'0 auto'}} >
                <img src={path} ></img>
              </div>
              <h6>INDUSTRY BEST PRACTICES</h6>
              <span className='text-muted'>Crypto supports a variety of the most <br/> popular digital currency</span>
              <br/>
              <a href="">Read more</a>
          </div>
        </div>
    );
}

export default ThreeCards;