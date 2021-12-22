import React from 'react'


import {Bar} from 'react-chartjs-2';

const data = {
    labels:[
        '06 AM', '12PM', '06 PM', 'Tue 30','06 AM','12PM'
    ],
    datasets:[{
        data:[12 , 19 , 2 ,14 ,10]
    }]
};

function ChartComp() {
    return (
        <div>
            <Bar 

                data={data}

                height={100}
                width={80}
            
            />
        </div>
    )
}

export default ChartComp;
