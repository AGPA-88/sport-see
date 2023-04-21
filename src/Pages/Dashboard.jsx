import React, { useState, useEffect } from 'react';
import { fetchData, fetchActivity, fetchSession, fetchPerformance, fetchScores, fetchFirstName } from '../tools/api.js';
import '../CSS/dashboard.css'
import Header from "../Components/Header/Header.jsx";
import Name from "../Components/Welcome/Welcome.jsx";
import Squares from '../Components/Info/Square.jsx';
import Sidebar from '../Components/Sidebar/index.jsx';
import DailyActivity from '../Components/Graphs/DailyActivity/DailyActivity.jsx'
import GoalScore from '../Components/Graphs/GoalScore/GoalScore.jsx'
import PerformanceChart from '../Components/Graphs/UserPerformance/Performance.jsx';
import AverageSessions from '../Components/Graphs/AverageSessions/AverageSessions.jsx'
import { useParams } from 'react-router-dom';

function Dashboard () {
    /* get user id from the url params */
    const {id} = useParams();
    // if (!id) id = null;
    console.log(id)
    const [data, setData] = useState({});
    const [activity, setActivity] = useState([]);
    const [session, setAverageSession] = useState([]);
    const [performance, setPerformance] = useState(null);
    const [scores, setScores] = useState([])
    const [firstName, setFirstName] = useState('');
    
    useEffect(() => {
        async function getData(id) {
            const response = await fetchData(id);
        setData(response.data);
      }
        async function getActivity(id) {
            await fetchActivity(setActivity, id);
      }
        async function getSession(id) {
            await fetchSession(setAverageSession, id);
      }
        async function getPerformance(id) {
            const response = await fetchPerformance(id);
        setPerformance(response.data);
      }
      async function getScores(id){
        await fetchScores(setScores, id);
      }
      async function getFirstName(id){
        await fetchFirstName(setFirstName, id);
      }
      
      getActivity(id);
      getSession(id);
      getPerformance(id);
      getScores(id);
      getData(id);
      getFirstName(id);
    }, []);
  
    if (firstName === "") {
      return <div>Loading...</div>;
    }
    console.log(data)
    console.log(activity)
    console.log(session)
    console.log(performance)

    return (
        <div>
            <Header />
            <div className="content">
                <aside><Sidebar /></aside>
                <main>
                        <div style={{display:'flex'}}>
                            <Name name = {firstName}/>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div className='graphs-container'>
                                <div className='single-graph'>
                                    <DailyActivity sessions = {activity}/>
                                </div>
                                <div className='graph-group'>
                                    <AverageSessions averageSession = {session}/>
                                    <PerformanceChart userPerformanceData = {performance.data} kind = {performance.kind} />
                                    <GoalScore scores = {scores}/>
                                </div>
                            </div>
                            <Squares keyData = {data.keyData}/>
                        </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;