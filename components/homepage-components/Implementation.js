import React from 'react';
import "../../pages/HomePage.css";


const implementation = ()=>{
    return(
        <div className='container-fluid' >
            <div className="container-fluid" style={{ textAlign: "center", marginBottom: "4em" }}>
              <h1 style={{ fontWeight: "700" }} className="backgroundHeadingCorporateTeam2">
                <span style={{ fontWeight: "700", color: "#087EE6" }}>ROADMAP</span>
              </h1>
              <p style={{zIndex:1}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                                                                                                                
          </div>
            
            <div className='col-11' style={{display:'flex',margin:'0 auto'}}>
                <div className='line1 mt-4'></div>
                <div className='circle1 rounded-circle1 py-2 px-2'>
                    <div className='smallcircle'></div>    
                    <br/>
                <h4 style={{marginLeft:'-20px',width:'150px'}}> Purchase Nguvu Coin</h4> 
                </div>
                
                <div className='line1 mt-4'></div>
                <div className='circle1 rounded-circle1 py-2 px-2'> 
                    <div className='smallcircle'></div>
                    <br/>
                <h4 style={{marginLeft:'-20px',width:'150px'}}> Trading with Nguvu coin</h4> 
                </div>
                <div className='line1 mt-4'></div>
                <div className='circle1 rounded-circle1 py-2 px-2'> 
                    <div className='smallcircle'></div>
                    <br/>
                <h4 style={{marginLeft:'-20px',width:'150px'}}> Stacking Nguvu coin</h4> 
                </div>
                <div className='line1 mt-4'></div>
                <div className='circle1 rounded-circle1 py-2 px-2'> 
                  <div className='smallcircle'></div>
                  <br/>
                <h4 style={{marginLeft:'-20px',width:'150px'}}> Becoming A Validator</h4> 
                </div>
                <div className='line1 mt-4 '></div>
            </div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            
        </div>
    );
};

export default implementation;