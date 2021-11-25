import React from "react";
import "../styles/details.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";

const names = [
  {
    id:1,
    name:'Name of insurer',
    value:''
  },
  {
    id:2,
    name:'policy number',
    value:''
  },
  {
    id:3,
    name:'card number',
    value:''
  },
  {
    id:4,
    name:'date of birth',
    value:''
  },
  {
    id:5,
    name:'Insurance valid upto',
    value:''
  },
  {
    id:6,
    name:'unique ID number',
    value:''
  },
  {
    id:7,
    name:'Insurer Address',
    value:''
  },
  {
    id:8,
    name:'Name of test',
    value:''
  },
  {
    id:9,
    name:'Disease Status',
    value:''
  },
  
  {
    id:10,
    name:'Name of Hospital',
    value:''
  },
  {
    id:11,
    name:'Doctors Name',
    value:''
  },
  {
    id:12,
    name:'Date of visit',
    value:''
  },
  {
    id:13,
    name:'Claim Amount',
    value:''
  },
  {
    id:14,
    name:'Bill Number',
    value:''
  },
  {
    id:15,
    name:'Bill Date',
    value:''
  },
  {
    id:16,
    name:'Admission Date',
    value:''
  },
  {
    id:17,
    name:'Discharge Date',
    value:''
  },

  {
    id:18,
    name:'Account number',
    value:''
  },
  {
    id:19,
    name:'IFSC Code',
    value:''
  },


];
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

const Details = () => {
  const [data,setData]=useState(null)
  const [newData, setNewData] = useState(names);
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  
  useEffect(() => {
    const data =new FormData();
    data.append("RUN_HEALTH_INSURANCE_MODEL","y")
    console.log(data);
    axios({
      method: 'post',
      url: 'http://15.207.104.100:8004/',
      data: data
  }).then(function (response) {
    newData[0].value = response.data.HEALTH_INSURANCE_CARD.insurer_name
    newData[1].value = response.data.HEALTH_INSURANCE_CARD.policy_number
    newData[2].value = response.data.HEALTH_INSURANCE_CARD.card_number
    newData[3].value = response.data.HEALTH_INSURANCE_CARD.dob
    newData[4].value = response.data.HEALTH_INSURANCE_CARD.valid_upto
    newData[5].value = response.data.IDENTITY_CARD.id_number
    newData[6].value = response.data.IDENTITY_CARD.address
    newData[7].value = response.data.TEST_REPORT.test_results+"test"
    newData[8].value = "yes"
    newData[9].value = response.data.PRESCRIPTION.hospital_name
    newData[10].value = response.data.PRESCRIPTION.doc_name
    newData[11].value = response.data.PRESCRIPTION.date_of_visit
    newData[12].value = response.data.INVOICES_BILLS.amount
    newData[13].value = response.data.INVOICES_BILLS.bill_number
    newData[14].value = response.data.INVOICES_BILLS.bill_date_time
    newData[15].value = response.data.INVOICES_BILLS.admission_date
    newData[16].value = response.data.INVOICES_BILLS.discharge_date
    newData[17].value = response.data.BANK_DETAILS.account_number
    newData[18].value = response.data.BANK_DETAILS.ifsc_code
    
      console.log(response.data);
      setData(response.data)
    })
    
  },[]);

  return (
    <div>
      <div className="table">
        {names.map((item) => {
          return (
            <div className="detail-box">
              <div><b>{item.name}</b></div>
              <div>{ data!== null?(item.value):null}</div>
            </div>
          );
        })}
      </div>
      <div className="continue-buttons detjsbut">
        <h3>Please confirm the data mention above correct</h3>
        <div id="buttons">
          <Button variant="contained" size="medium" onClick={handleOpen}>
            Yes
          </Button>
          <Button variant="contained" size="medium">
            No
          </Button>
        </div>
      </div>
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
                   <Link to="/login"><Button variant="contained">Yes</Button></Link><Button variant="contained" onClick={handleClose}>No</Button>
                    </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Details;
