import React, { Suspense, useEffect, useState } from 'react';
import { cancleBooking, getBooking } from '../utilits/BookingDone';
import Chart from '../componets/Chart';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Emptybookin from '../componets/Emptybookin';
import toast from 'react-hot-toast';

const Mybooking = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const savedData = getBooking();
        setBooking(savedData)

    }, []);
//  handle booking cancle 
    const handelRemovedBooing = (id) => {
        cancleBooking(id)
        setBooking(getBooking());
        toast.error("Booking cancle");

    }

    if (booking.length < 1) {
        return <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Emptybookin ></Emptybookin>

        </Suspense>
    }



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

            <div className='mt-9 mx-auto' style={{width:'100%',height:'300'}} >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart width={700} height={400} data={booking} margin={{
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
              </ResponsiveContainer>
            </div>

            <div>
                <div>
                    <h1 className='text-center text-3xl font-bold border-b border-dashed border-gray-300 pb-6'>My today Appoinments </h1>
                    <p className=''>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience</p>
                    {
                        booking.map(book => <Chart key={book.id} book={book} booking={booking} handelRemovedBooing={handelRemovedBooing}> </Chart>)
                    }

                </div>


            </div>
        </div>
    );
};

export default Mybooking;