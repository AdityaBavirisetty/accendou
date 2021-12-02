import React from 'react'
import TextField from '@mui/material/TextField';
import '../styles/Language.css'
import { useState } from 'react';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Language = () => {
    const [search,usesearch]=useState('')
    const [data,setData]=useState(null);
    const [data2,setData2]=useState(null)
    const [option,setOption]=useState('')
    const change=(e)=>{
        usesearch(e.target.value)
        
    }
    const submit=(e)=>{
        e.preventDefault();
        // console.log(e.target.value)
        // const data=new FormData()
        // data.append("str",search)
        console.log(option==="Q & A","ppp")
        if (option==="Language model"){
        axios.get(`http://15.207.104.100:8006/predictbert?str=${search}`).then(res=>{setData(res.data);console.log(res.data)})
        setData2(null)
    }
       if (option==="Q & A"){
        axios.get(`http://15.207.104.100:8009/qna?query=${search}`).then(res=>{console.log(res.data);setData2(res.data)}).catch(err=>console.log(err))
        setData(null)
    }
    }
    const handleinput = (e) =>{
        console.log(e.target.value,"welcome")
        setOption(e.target.value)
    
    }
    return (
        <div>
            <div className="search">
                <form onSubmit={(e)=>{submit(e)}}>
            <TextField fullWidth label="search" id="fullWidth" value={search} onChange={(e)=>{change(e)}} />
            </form>
            </div>
            <div className="radio">
                {/* <input type="radio"/><label>Language model</label>
                <input type="radio"/><label>Q & A </label> */}
                
                <Select name="option" style={{width:'220px'}}  value={option} onChange={(e) =>handleinput(e)}><MenuItem>Select</MenuItem><MenuItem value={"Language model"}>Language model</MenuItem>
                               <MenuItem value={"Q & A"}>Q & A</MenuItem></Select>
            </div>
            <div>
               
                {data!==null?(
                    <div className='table-row'>
                 {Object.keys(data).map((item)=>{
                    return(
                        <div style={{paddin:'10px',border:'1px solid black'}}>
                        <div style={{paddingTo:'20px'}}><b>{item}</b>
                        <div>
                 {Object.keys(data[item]).map((items,i)=>{
                    return(
                        <div style={{paddingTop:'10px',paddingRight:'30px',border:'1px solid black'}}>
                            {data[item][items]}
                        </div>
                    )
                 })}
                 </div>
                 </div>
                 </div>
                    )
                })}
                </div>
                ):null}
                {data2!==null?(
                    <div className="qa">
                     {data2.map(item=>{
                         return(<div>
                            <div><b>Answer:</b> {item.Answer}</div>
                            <div><b>context:</b> {item.Context}</div>
                              <div><b>Document Name:</b>{item["Document Name"]}</div>
                             <div><b>pagenumber:</b> {item.PageNumber}</div>
                             
                             <br/>
                         </div>)
                     })}   
                    </div>
                ):null}
                
                
            </div>
        </div>
    )
}

export default Language
