import React from 'react';
import { BsFillBellFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } 
from 'react-icons/bs';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const Home = () => {
    const data = [
        {
          year: '2015',
          Vue: 4000,
          React: 2400,
          amt: 2400,
        },
        {
          year: '2017',
          Vue: 3000,
          React: 1398,
          amt: 2210,
        },
        {
          year: '2019',
          Vue: 2000,
          React: 9800,
          amt: 2290,
        },
        {
          year: '2021',
          Vue: 2780,
          React: 3908,
          amt: 2000,
        },
        {
          year: '2023',
          Vue: 1890,
          React: 4800,
          amt: 2181,
        }

    ];
      
    return(
        <main className='main_container'>
        <div className='main_title'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='main_cards'>
            <div className='card'>
                <div className='card_inner'>
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon'/>
                </div>
            <h1>250</h1>
            </div>
            <div className='card'>
                <div className='card_inner'>
                <h3>SERVICES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
            <h1>152</h1>
            </div>
            <div className='card'>
                <div className='card_inner'>
                <h3>TECHNOLOGIES</h3>
                <BsFillBellFill className='card_icon'/>
                </div>
            <h1>7</h1>
            </div>
            <div className='card'>
                <div className='card_inner'>
                <h3>USERS</h3>
                <BsPeopleFill className='card_icon'/>
                </div>
            <h1>400</h1>
            </div>
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="React" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Vue" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="React" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Vue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        </div>        
        </main>
    )
}
export default Home;
