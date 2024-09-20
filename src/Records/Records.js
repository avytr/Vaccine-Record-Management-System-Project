import { useEffect, useState } from 'react';
import {useTable} from 'react-table';

import Record from '../BinaryTreeSearch/Record';
import RecordDetailsModal from './RecordDetailsModal';
import './Records.css';
import RecordsChart from './RecordsChart';

function Records() {
    const [records, setRecords] = useState([]);
    const [id, setId] = useState(0);
    const [selectedRecord, setSelectedRecord] = useState(null);  

    const handleClick = (recordId) => {  
        // Lấy phần tử chứa ID vừa nhấp  
        const clickElement = document.getElementById(recordId);  
    
        // Nếu có ID trước đó, xóa lớp 'selected' khỏi phần tử đó  
        if (id !== 0) {  
            const previousElement = document.getElementById(id);  
            if (previousElement) {  
                previousElement.classList.remove('selected'); // Xóa lớp 'selected'  
            }  
        }  
    
        // Thêm lớp 'selected' cho phần tử hiện tại  
        clickElement.classList.add('selected');
        setId(recordId);  

        const currentRecord = records.find((record) => {
            return record.id === recordId;
        })

        setSelectedRecord(currentRecord);
    }

    const handleCloseModal = () => { 
        document.querySelector('.selected').classList.remove('Records_selected__DqOdE');
        setSelectedRecord(null); // Đóng modal  
    };  

    
    

    useEffect(() => {
        
        fetch('http://localhost:8000/records')
            .then(res => {
                return res.json();
            })
            .then(data => {
                var records = data.map((record) => {       
                    return new Record(record);
                }) 
                setRecords(records);
            });
    }, [])
      

    return (

        <div className='records'>
            <div className='records-container'>
                <h1>Records Management</h1>
                <table className='records-table'>  
                    <thead className='records-thead'>  
                        <tr className='records-tr'>  
                            <th></th>
                            <th>ID</th>  
                            <th>Name</th>  
                            <th>Birthday</th>  
                            <th>Gender</th> 
                            <th>Address</th>  
                            <th>Dose 1</th>  
                            <th>Dose 2</th>  
                            <th>Dose 3</th>  
                            <th>Dose 4</th>  

                            
                        </tr>  
                    </thead>  
                    <tbody>  
                        {records.map((record, index) => (  
                            <tr key={record.id} className='records-tr'> 
                                <td>{index + 1}</td>
                                <td 
                                    id={record.id}
                                    className='id'
                                    onClick={() => {
                                        
                                        handleClick(record.id);
                                    }}
                                >{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.birthday}</td>
                                <td>{record.gender}</td> 
                                <td>{record.toStringAddress(record.address)}</td> 
                                <td 
                                    className='dose' onClick={(e) => console.log(e)}
                                >
                                        {record.dose1 ? 'Dose 1 Information' : 'N/A'}</td> 
                                <td 
                                    className='dose' onClick={(e) => console.log(e)}
                                >
                                    {record.dose2 ? 'Dose 2 Information' : 'N/A'}</td> 
                                <td 
                                    className='dose' onClick={(e) => console.log(e)}
                                >
                                    {record.dose3 ? 'Dose 3 Information' : 'N/A'}</td> 
                                <td 
                                    className='dose' onClick={(e) => console.log(e)}
                                >
                                    {record.dose4 ? 'Dose 4 Information' : 'N/A'}</td> 
                            </tr>  
                        ))}  
                    </tbody>  
                </table> 

                <RecordDetailsModal   
                        record={selectedRecord}  
                        onClose={handleCloseModal} 
                    /> 

            </div>

            <div className="records-chart">
                <h1 style={{padding: '100px', textAlign:'center'}}>The number of people using different types of vaccines</h1>
                
                <RecordsChart
                    records={records}
                />
            </div>
                        
        </div>
    )
}

export default Records;