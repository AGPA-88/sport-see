import React, { useState, useEffect } from 'react';
import { fetchData, fetchActivity, fetchSession, fetchPerformance } from '../tools/api.js';
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
    console.log(id)
    const [data, setData] = useState(null);
    const [activity, setActivity] = useState(null);
    const [session, setSession] = useState(null);
    const [performance, setPerformance] = useState(null);


    
    useEffect(() => {
        async function getData(id) {
            const response = await fetchData(id);
        setData(response.data);
      }
        async function getActivity(id) {
            const response = await fetchActivity(id);
        setActivity(response.data);
      }
        async function getSession(id) {
            const response = await fetchSession(id);
        setSession(response.data);
      }
        async function getPerformance(id) {
            const response = await fetchPerformance(id);
        setPerformance(response.data);
      }
      
      getActivity(id);
      getSession(id);
      getPerformance(id);
      getData(id);
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
    console.log(data)
    console.log(activity)
    console.log(session)
    console.log(performance)
const score = data.todayScore ? data.todayScore : data.score;
    return (
        <div>
            <Header />
            <div className="content">
                <aside><Sidebar /></aside>
                <main>
                        <div style={{display:'flex'}}>
                            <Name userInfos = {data.userInfos}/>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div className='graphs-container'>
                                <div className='single-graph'>
                                    <DailyActivity sessions = {activity.sessions}/>
                                </div>
                                <div className='graph-group'>
                                    <AverageSessions averageSession = {session.sessions}/>
                                    <PerformanceChart userPerformanceData = {performance.data} kind = {performance.kind} />
                                    <GoalScore todayScore = {score}/>
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