import React from 'react'
import '../styles/details.css'





const details = () => {
    const names=[
                    "Name of insurer","policy number","card number","date of birth",
                    "Insurance valid upto (data)","unique ID number","Insurer Address",
                    "Name of disease","Disease Status","Name of Hospital","Doctor's Name",
                    "Date of visit","Claim Amount","Bill Number","Bill Date","Admission Date",
                    "Discharge Date","Account number","IFSC Code"
               ]
    return (
        <div>
            
            
            <div  className="table">
            <table>
            {names.map((item)=>{
                    return(
                        <tr>
                            <td>{item}</td>
                            <td className="td">Null</td>
                        </tr>
                    )
                })}
                
            </table>
            <div className="continue-buttons detjsbut">
                <h3>Please confirm the data mention above correct</h3>
                <div><button>Yes</button><button>No</button></div>
                </div>
            </div>
            
        </div>
    )
}

export default details
