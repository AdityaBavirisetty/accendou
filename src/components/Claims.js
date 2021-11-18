import React from 'react'
import { useState } from 'react/cjs/react.development';
import "../styles/Claims.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
  

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Claims = () => {
    const [display,setDisplay] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const data = [
        {
            id:1,
            value:'Click here to upload doctor prescription'
        },
        {
            id:2,
            value:'Click here to upload Health Insurance Card'
        },
        {
            id:3,
            value:'Click here to upload Invoices and Bills'
        },
        {
            id:4,
            value:'Click here to upload Disease Test Report'
        },
        {
            id:5,
            value:'Click here to upload ID proof'
        },
        {
            id:6,
            value:'Click here to Bank Details'
        }
    ]
    const name = (e,index)=>{
        data[index].value = e
        console.log(e.target.value);


    }
    // const submit = () =>{
    //        setDisplay(!display)
           
    // }
    return (
        <div style={{position:'relative'}}>
            <div className="upload">
                {data.map((item,i)=>{
                    return(
                        <div className="upload-box">
                    <div className="title"><b>{item.value}</b></div>
                    <div><input type="file" /></div>
                </div>
                    )
                })}
                
            </div>
            <div className="submit">
                <Button onClick={handleOpen} variant="contained">Click here to Submit </Button>
                
            </div> 

                {/* {display == true ? (
            // <div className="continue" >
                <div className="continue-box"> 
                <div className="continue-title">
                    Do you like to continue with claim automation 
                    (please note that your data will be shared with Insurance 
                    company and bank)??
                    </div>
                    <div className="continue-buttons"><button>Yes</button><button onClick={submit}>No</button></div>
                </div>
            
             ):null}      */}
             
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Do you like to continue with claim automation 
                    (please note that your data will be shared with Insurance 
                    company and bank)??<br/>
                    
          </Typography>
          <div className="continue-buttons">
                    <Button variant="contained">Yes</Button><Button variant="contained" onClick={handleClose}>No</Button>
                    </div>
        </Box>
      </Modal>
            
        </div>
    )
}

export default Claims
