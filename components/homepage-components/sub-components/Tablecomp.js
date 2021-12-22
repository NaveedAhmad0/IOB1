import React from "react";

const TableComp = () =>{
    return(
        <div className="d-flex p-4" style={{justifyContent:'space-evenly'}}>
         <div className="col-5">
            <table class="table">
                <thead style={{color:'#0D74D7'}}>
                  <tr>
                    <th scope="col">Height</th>
                    <th scope="col">Mined</th>
                    <th scope="col">Miner</th>
                    <th scope="col">Size</th>
                  </tr>
                </thead>
              <tbody>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>Unknown</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>Unknown</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711932</th>
                    <td>8 minutes</td>
                    <td style={{color:'#0D74D7'}}>AntPool</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>Unknown</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>Unknown</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>ViaBTC</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>711934</th>
                    <td>2 minutes</td>
                    <td style={{color:'#0D74D7'}}>Unknown</td>
                    <td>1,656,981 bytes</td>
                  </tr>
                  
              </tbody>
            </table>                        
        </div>
        <div className="col-5">
            <table class="table">
                <thead style={{color:'#0D74D7'}}>
                  <tr>
                    <th scope="col">Hash</th>
                    <th scope="col">Time</th>
                    <th scope="col">Amount(BTC)</th>
                    <th scope="col">Amount(USD)</th>
                  </tr>
                </thead>
              <tbody>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row"style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color:'#0D74D7'}}>55f96cc18ff0633....</th>
                    <td>15:43</td>
                    <td style={{color:'#0D74D7'}}>0.00002500 BTC</td>
                    <td>$30,509.64</td>
                    
                  </tr>
                  
              </tbody>
            </table>                        
        </div>
      </div>
    );
}

export default TableComp