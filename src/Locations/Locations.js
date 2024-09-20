import { useEffect, useState } from 'react';
import {useTable} from 'react-table';
import { React, useMemo } from 'react';

import Location from '../BinaryTreeSearch/Location';

function Locations() {
    const [locations, setLocations] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8000/locations')
            .then(res => {
                return res.json();
            })
            .then(data => {
                var locations = data.map((location) => {
                    return new Location(location);
                }) 
                setLocations(locations);
            });
    }, [])

    return(
        <div>
            <table style={{ width: "100%", border: "1px solid black", borderCollapse: "collapse" }}>  
                <thead>  
                    <tr>  
                        <th style={{ border: "1px solid black" }}>ID</th>  
                        <th style={{ border: "1px solid black" }}>Name</th>  
                        <th style={{ border: "1px solid black" }}>Address</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {locations.map((location) => (  
                        <tr key={location.id} onClick={(e) => console.log(e)}> 
                            <td style={{ border: "1px solid black" }}>{location.id}</td>
                            <td style={{ border: "1px solid black" }}>{location.name}</td>
                            <td style={{ border: "1px solid black" }}>{location.toString(location.address)}</td>
                        </tr>  
                    ))}  
                </tbody>  
            </table> 
        </div>
    )
}

export default Locations;