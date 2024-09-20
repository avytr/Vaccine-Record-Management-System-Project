import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function RecordsChart({records}) {

    // const [records, setRecords] = useState([]);
    // const [vaccines, setVaccines] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8000/records')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             var records = data.map((record) => {       
    //                 return new Record(record);
    //             }) 
    //             setRecords(records);
    //         });
    // }, [])

    const [vaccines, setVaccines] = useState([]);

    const isInVaccines = (name) => {
        return vaccines.some((vaccine) => vaccine.name === name);
    };

    useEffect(() => {
        const currVaccines = [];

        // Lấy tất cả vaccine từ records
        records.forEach((record) => {
            const recordDose = [record.dose1, record.dose2, record.dose3, record.dose4];

            recordDose.forEach((dose) => {
                if (dose !== undefined) {
                    const name = dose.vaccine.name;
                    currVaccines.push(name); // Lưu tên vaccine
                }
            });
        });

        // Đếm số lượng từng loại vaccine
        const vaccineCount = currVaccines.reduce((acc, name) => {
            acc[name] = (acc[name] || 0) + 1; // Tăng số lượng cho vaccine tương ứng
            return acc;
        }, {});

        // Chuyển đổi thành mảng và cập nhật state
        const newVaccines = Object.keys(vaccineCount).map((name) => ({
            name: name,
            amount: vaccineCount[name],
        }));

        setVaccines(newVaccines);

    }, [records]);

    return (
        <div class='records-barchart'>
            <BarChart width={600} height={300} data={vaccines}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#c8b3d0" />
            </BarChart>
        </div>
    )
}

export default RecordsChart;