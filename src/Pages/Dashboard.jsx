import React, { useState, useEffect } from 'react';
import { fetchData } from '../tools/api.js';
import Header from "../Components/Header.jsx";
import Name from "../Components/Name.jsx";
import Squares from '../Components/Info/Square.jsx';
import Sidebar from '../Components/Sidebar/index.jsx';
// import Graph from '../Components/Graphs/AverageSession.jsx'

function Dashboard () {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        async function getData() {
            const response = await fetchData();
            console.log(response)
        setData(response);
      }
  
      getData();
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <Name userInfos = {data.data.userInfos}/>
            <Squares keyData = {data.data.keyData}/>
            <Sidebar />
            {/* <Graph data = {data.data.sessions}/> */}
        </div>
    )
}

export default Dashboard;