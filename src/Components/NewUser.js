import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const style = {
    main:{textAlign:"center"},
    head:{backgroundColor:"rgb(100,200,240)"},
    n1:{fontSize:"20px"},
    inp:{height:"40px",outline:"none",fontSize:"20px",borderRadius:"10px",border:"0px",backgroundColor: "rgb(100,200,240,0.4)",color:"white"},
    onclk: { backgroundColor: "rgb(100,200,240)",color:"white",height:"40px",outline:"none",borderRadius:"10px",border:"0px",fontSize:"20px", },
    noclk: { backgroundColor: "grey",color:"white",height:"40px",outline:"none",borderRadius:"10px",border:"0px",fontSize:"20px" }
}

function NewUser() {
        const [val, setval] = useState("");
        const [btn, setbtn] = useState(false)

  // let check = (str) => {
  //   if (str.length == 10) {
  //     return true
  //   }
  //   return false;
  // }
  let navigate=useNavigate()

  return (
    <div className='main' style={style.main}>
        <div className='head' style={style.head}>
            Congratulations<br/>  
            <div className='card'>
            <img src='plogo.png' alt='logo'/>
                
            </div>          
        </div>
        <br />
        <span className='n1' style={style.n1}>+91</span>
        
        <input className="input" style={style.inp} onChange={e => {
            setval(e.target.value)
            //console.log(val,typeof(val),val.length,typeof(e.target.value))
            if (e.target.value.length === 10) {
                setbtn(true)
            } else {
                setbtn(false)
            }
        }
        } value={val} />
        <br />
        <button
            style={btn ? style.onclk : style.noclk}
            onClick={() => {
                if (btn) {
                    console.log("next", val)
                    localStorage.setItem(val, "")
                    navigate('./olduser')
                }
            }}> Wow get my Paytm card</button>
    </div>
)
}

export default NewUser;
