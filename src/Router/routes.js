import { HashRouter as Router, Route, Routes} from 'react-router-dom'
// import Home from "../Pages/Homepage.jsx";
import Dashboard from '../Pages/Dashboard';

function CustomRoutes() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} /> */}
                {/* <Route exact path="/user/:id" element={<Dashboard/>} /> */}
                <Route exact path="/" element={<Dashboard/>} />
            </Routes>
        </Router>
    );
}

export default CustomRoutes;