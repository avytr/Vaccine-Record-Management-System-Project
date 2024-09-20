import { useEffect, useState } from 'react';
import {useTable} from 'react-table';
import { React, useMemo } from 'react';

import Vaccine from '../BinaryTreeSearch/Vaccine';
import './Vaccines.css';

console.log();


function Vaccines() {

    const [vaccines, setVaccines] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/vaccines')
            .then(res => {
                return res.json();
            })
            .then(data => {
                const vaccines = data.map((vaccine) => {
                    return new Vaccine(vaccine);
                }) 

                setVaccines(vaccines);
                
                
            });
    }, [])
    
   
          
    return (
        <div className="vaccines">
            <div className='vaccines-container'>
                <h1>Vaccines Management</h1>
                <table className='vaccines-table'>  
                    <thead>  
                        <tr className='vaccines-tr'>  
                            <th>ID</th>  
                            <th>Name</th>  
                            <th>Quantity</th>  
                            <th>Country</th> 
                            <th>MFG</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        {vaccines.map((vaccine) => (  
                            <tr 
                                className='vaccines-tr'
                                key={vaccine.id} onClick={(e) => console.log(e)}> 
                                <td>{vaccine.id}</td>
                                <td>{vaccine.name}</td>
                                <td>{vaccine.quantity}</td>
                                <td>{vaccine.country}</td>
                                <td>{vaccine.mfg}</td>
                            </tr>  
                        ))}  
                    </tbody>  
                </table> 
            </div>

            <div className='vaccines-chart'>
                
            </div>

        </div>
    )
}

export default Vaccines;