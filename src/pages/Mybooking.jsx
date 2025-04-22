import React, { useEffect, useState } from 'react';
import { getBooking } from '../utilits/BookingDone';
import Chart from '../componets/Chart';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

const Mybooking = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const savedData = getBooking();
        setBooking(savedData)

    }, []);

  
   
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div>
            {/* <div className='my-52 text-center'>
                <h1 className='text-5xl font-bold'>Not yet Booking Please booking Now</h1>
                <Link to="/">   <button className='px-6 py-3 bg-blue-100 text-xl font-bold text-blue-500 rounded-full cursor-pointer my-5 hover:bg-blue-500 hover:text-white'>Go to Home</button></Link>
            </div> */}
            <h1>my booking list: {booking.length}</h1>

            <div className= 'mt-9'>
                <BarChart width={1200} height={400} data={booking} margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <Bar dataKey="name" fill='blue' ></Bar>
                    <Bar dataKey="consultationFee" fill="#82ca9d" stroke="purple" shape={<TriangleBar />} label={{ position: 'top' }} />
                    {booking.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}

                   
                    <YAxis dataKey="consultationFee"></YAxis>
                    <XAxis dataKey="name"></XAxis>
                </BarChart>
            </div>

            <div>
                <div>
                    {
                        booking.map(book => <Chart key={book.id} book={book} booking={booking}> </Chart>)
                    }

                </div>


            </div>
        </div>
    );
};

export default Mybooking;