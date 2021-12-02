import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import '../styles/userdetails.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const UserDetails = (props) => {
    console.log(props.location,'locccccccccccccc')
    const [price,setPrice]=useState(null)
    const [data,setData]=useState({
        age:'',
        Diabetes:'',
        BloodPressureProblems	:'',
        AnyTransplants	:'',
        AnyChronicDiseases:'',	
        Height:'',
        Weight:'',	
        KnownAllergies:	'',
        HistoryOfCancerInFamily:'',	
        NumberOfMajorSurgeries:'',
        Category:props.location.state.category

    })
    const submit = (e) =>{
        e.preventDefault();
        console.log(data)
        // const newQQ = JSON.stringify({
        //     age: data.age,
        //     Diabetes:data.Diabetes,
        //     BloodPressureProblems	:data.BloodPressureProblems,
        //     AnyTransplants	: data.AnyTransplants,
        //     AnyChronicDiseases: data.AnyChronicDiseases,	
        //     Height: data.Height,
        //     Weight: data.Weight,	
        //     KnownAllergies:	data.KnownAllergies,
        //     HistoryOfCancerInFamily: data.HistoryOfCancerInFamily,	
        //     NumberOfMajorSurgeries: data.NumberOfMajorSurgeries,
        //     category:"Gold"
        // })
        // console.log(newQQ,'QQQQQ')
        const url = 'http://15.207.104.100:8002/pricing_model';
        // axios.post(url,newQQ).then(response=>{console.log(response)})
        // const data2=new FormData();
        //      data2.append("age",data.age)
        //      data2.append("Diabetes",data.Diabetes)
        //      data2.append("BloodPressureProblems",data.BloodPressureProblems)
        //      data2.append("AnyTransplants", data.AnyTransplants)
        //      data2.append("AnyChronicDiseases", data.AnyChronicDiseases)
        //      data2.append("Height", data.Height)
        //      data2.append("Weight", data.Weight)
        //      data2.append("KnownAllergies",	data.KnownAllergies)
        //      data2.append("HistoryOfCancerInFamily", data.HistoryOfCancerInFamily)
        //      data2.append("NumberOfMajorSurgeries", data.NumberOfMajorSurgeries)
        //      data2.append("category","Gold")
        // const ne= JSON.stringify(data2) 
        console.log(data)
        axios.post('http://15.207.104.100:8002/pricing_model',data,{headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }}).then(response=>{
            console.log(response.data,"welcome");
              setPrice(response.data.Premium_Amount)
              props.history.push({
                pathname: '/pricing',
                state: {
                  Total:props.location.state.Total,
                  Name: props.location.state.Name,
                  price:response.data.Premium_Amount
                  
                }
              })
            })
        .catch((err)=>console.log(err,'err'))
        

    }
    const handleinput = (e) =>{
        //console.log(e.target,"welcome")
        const newdata={...data}
        newdata[e.target.name]=e.target.value
        setData(newdata)
        //console.log(newdata)
    }
    
    return (
        <div>
            {console.log(price,'klklkl0000')}
            {/* <div className="userdetbox"> */}
                <form onSubmit={(e) => submit(e)}>
                    <div className="userdet">
                        <div>
                            <div>AGE</div>
                            <div><TextField name="age" value={data.age} onChange={(e) =>handleinput(e)}/></div>
                        </div>
                        <div>
                            <div>Diabetes</div>
                            <div><Select name="Diabetes" style={{width:'220px'}} value={data.Diabetes} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                        </div>
                        <div>
                            <div>Blood Pressure Problems</div>
                            <div><Select name="BloodPressureProblems" style={{width:'220px'}} value={data.BloodPressureProblems} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                        </div>
                        <div>
                            <div>Any Transplants</div>
                            <div><Select name="AnyTransplants" style={{width:'220px'}} value={data.AnyTransplants} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                        </div>
                    </div>
                    <div className="userdet">
                            <div>
                                <div>Any Chronic Diseases</div>
                                <div><Select name="AnyChronicDiseases" style={{width:'220px'}} value={data.AnyChronicDiseases} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                            </div>
                            <div>
                                <div>Height(cm)</div>
                                <div><TextField name="Height" value={data.Height} onChange={(e) =>handleinput(e)}/></div>
                            </div>
                            <div>
                                <div>Weight (kg)</div>
                                <div><TextField name="Weight" value={data.Weight} onChange={(e) =>handleinput(e)}/></div>
                            </div>
                            <div>
                                    <div>Known Allergies</div>
                                    <div><Select name="KnownAllergies" style={{width:'220px'}}value={data.KnownAllergies} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                            </div>        
                    </div>
                    <div className="userdet">
                            <div>
                                <div>History Of Cancer In Family</div>
                                <div><Select name="HistoryOfCancerInFamily"style={{width:'220px'}} value={data.HistoryOfCancerInFamily} onChange={(e) =>handleinput(e)}><MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem></Select></div>
                            </div>
                            <div>
                                <div>Number Of Major Surgeries</div>
                                 <div>
                                <TextField name="NumberOfMajorSurgeries" value={data.NumberOfMajorSurgeries} onChange={(e) =>handleinput(e)}/> 
                                {/* <Select
                                value={data.NumberOfMajorSurgeries}
                                onChange={(e) =>handleinput(e)}
                                style={{width:'220px'}}
                                name="NumberOfMajorSurgeries"
                                >
                               <MenuItem value={"yes"}>YES</MenuItem>
                               <MenuItem value={"no"}>No</MenuItem>
                                </Select> */}
                                </div>
                            </div>
                        
                    </div>
                    
                    <div>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}

export default UserDetails
