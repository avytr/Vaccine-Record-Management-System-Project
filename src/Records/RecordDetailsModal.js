import React, { useState } from 'react';  
import DoseDetail from './DoseDetail';

import './Records.css'

const RecordDetailsModal = ({ record, onClose }) => {  
    if (!record) return null; // Nếu không có record, không hiển thị gì  

    return (  
        <div className='modal-overlay'>  
            <div className='modal-content'>  
                <h2>Record Details</h2>  
                <h3>Information</h3>
                <p>ID: {record.id}</p>  
                <p>Name: {record.name}</p>  
                <p>Birthday: {record.birthday}</p>  
                <p>Gender: {record.gender}</p>  
                <p>Address: {record.toStringAddress(record.address)}</p> 
                <h3>Dose 1</h3>
                <DoseDetail
                    dose= {record.dose1}
                />

                <h3>Dose 2</h3>
                {
                    record.dose2 ? <DoseDetail dose= {record.dose2}/> : <p>N/A</p>
                }

                <h3>Dose 3</h3>
                {
                    record.dose3 ? <DoseDetail dose= {record.dose3}/> : <p>N/A</p>
                }

                <h3>Dose 4</h3>
                {
                    record.dose4 ? <DoseDetail dose= {record.dose4}/> : <p>N/A</p>
                }
                
                <button onClick={onClose}>Close</button>  
            </div>  
        </div>  
    );  
};  

export default RecordDetailsModal;  