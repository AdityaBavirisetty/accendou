import React from 'react'
import { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJson = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState();
    const [arrays, setArrays] = useState({});

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
      for(var i=0;i<=3;i++){
        for(var i=0;i<=13;i++){
        
        }
      }
      
      
        
    }
    


    return (
        <div>
            <input type="file" onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}/>
        
            <button onClick={Submit}>Submit</button>
            {/* <div>{arrays.map((item)=>
            <div>{item.Age}//{item.Age_more_than_retirement}</div>
            )}
            <p>adcda</p>
            </div> */}
            
           
        </div>
    )
}

export default ExcelToJson;
