import axios from 'axios';
import React from 'react'
import { useState ,useEffect} from 'react';
import * as XLSX from 'xlsx';
import { Button } from '@mui/material';

const ExcelToJson = () => {
    const [items, setItems] = useState([]);
    const [data, setData] = useState(null);
    const [arrays, setArrays] = useState({});
    const [visible, setVisible] = useState(false);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "bynary" });
       console.log(wb, 'wbbbbbbbbbbbbbbbbbbbb')
        // const wsname = wb.SheetNames[0];
        // console.log(wsname,'klklkllkllkllllkl')

        // const ws = wb.Sheets[wsname];
        //    console.log(ws,'sheeeeeeeeee')
        // const data = XLSX.utils.sheet_to_json(ws);
        // console.log(convertToJson(data))
         wb.SheetNames.forEach(sheet=>{
           const rowobject =XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet]);
           const jsonobject=JSON.stringify(rowobject);
           setArrays(JSON.parse(jsonobject))
           console.log(jsonobject,'pppppppppppp')
           
         })

        // resolve(jsonobject);

      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
    const Submit= ()=>{
      const newAs = arrays;
      setVisible(true)
        
    }
    useEffect(() => {
      axios.get('http://15.207.104.100:8007/getdata').then(res=>{setData(res.data);console.log(res.data)})
    },[])
    


    return (
        <div>
          <p style={{fontSize:'20px'}}><b>Click here to upload the file</b></p>
          <div style={{height:'50px',display:'flex',placeItems:'center'}}>
            <input type="file" onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}/>
        </div>
        
            <div style={{width:'160px'}}><Button variant="contained" onClick={Submit}>Submit</Button></div>
            <div>
              {data!=null && visible?(
              <table border="1">
                <tr>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Marital_Status</th>
                  <th>Sum_Insured</th>
                  <th>Policies_Revenue</th>
                  {/* <th>Policy_Start</th>
                  <th>Policy_End</th>
                  <th>Fraudulent_Claim</th>
                  <th>Date_Of_Loss</th>
                  <th>Date_Of_Claim</th> */}
                  <th>Insured_ID</th>
                  <th>Kind_Of_Loss</th>
                  <th>Claim_Amount</th>
                  <th>Area</th>
                  <th>Hospitalization</th>
                  <th>Status</th>
                  
                </tr>
                {data.map((item,i)=>{
                  return(
                    <tr>
                      <td>{item.Age}</td>
                      <td>{item.Gender}</td>
                      <td>{item.Marital_Status}</td>
                      <td>{item.Sum_Insured}</td>
                      <td>{item.Policies_Revenue}</td>
                      {/* <td>{item.Policy_Start}</td>
                      <td>{item.Policy_End}</td>
                      <td>{item.Fraudulent_Claim}</td>
                      <td>{item.Date_Of_Loss}</td>
                      <td>{item.Date_Of_Claim}</td> */}
                      <td>{item.Insured_ID}</td>
                      <td>{item.Kind_Of_Loss}</td>
                      <td>{item.Claim_Amount}</td>
                      <td>{item.Area}</td>
                      <td>{item.Hospitalization}</td>
                      <td>{item.Status==1?"Not Fraudulent":"Fraudulent"}</td>
                      </tr>)
                  })}
              </table>
              ):null}
            </div>
            
            
           
        </div>
    )
}

export default ExcelToJson;
