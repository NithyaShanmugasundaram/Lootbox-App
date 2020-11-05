import React from 'react';
import lootbox from '../images/lootbox.png';
import './lootbox.css';


const LootBox = ({onChange,value,usdValue,hkdValue}) => {
    
return ( 
   
    <div className="lootbox-container">
           <h2 className="title">Legendary Pack</h2>
           
         <div className="tooltip">
           <span className="tooltiptext">Remaining: 5</span>
           <img src={lootbox} className="lootbox-image" alt="Pic not shown"/>
         </div>
         
         <div className="row">
            <div>
                <label>ETH :</label>
                <input type="number" 
                step="0.1" 
                value={value} 
                onChange={onChange} 
                placeholder="ETH" 
                    />
            </div>
            <div>
                <label>HKD :</label>
                <input  
                value={hkdValue} 
                placeholder="HKD" 
                disabled
                />
            </div>
            <div>
                <label>USD :</label>
                <input  
                value={usdValue} 
                placeholder="USD" 
                disabled
                />
            </div>
         </div>
    </div>
     );
}
 
export default LootBox;