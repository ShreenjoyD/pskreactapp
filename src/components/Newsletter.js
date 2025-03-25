import { useState } from 'react';
import axios from "axios";
import "./../styles/Layout.css";

function Newsletter() {

    const [news, setnews] = useState('');

    const handlesub=(e)=>{
        e.preventDefault();
        const resp = axios.post(`${process.env.REACT_APP_SERVERHOST}/subscribd`, { news });
    }

    return (
        <div className="nl">
            <div className="nlbox">
                <h4>NEWSLETTER SIGNUP</h4>
                    <p className="formpara">
                    Subscribe to our newsletter and get 10% off your first purchase.
                    </p>
                    <form onSubmit={handlesub}>
                        <div className="subform">
                            <input type="email" placeholder="Enter your email address" id="emailinp" value={news} onChange={(e)=>setnews(e.target.value)}/>
                            <button className="subbtn" onClick={handlesub}>SUBSCRIBE</button>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;