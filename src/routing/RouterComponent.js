
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LaunchPrograms from "../components/launchPrograms";

function RouterComponent(props) {
    return (
        <>
            <Router>
                <div className=''>
                <Switch>
                    <Route path={["/"]} component={LaunchPrograms} />
                </Switch>
                </div>
            </Router>
        </>
    );
}

export default RouterComponent;