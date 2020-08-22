import React from 'react';
import urlConfig from '../../config/urlConfig';
import { getData } from '../../network/axiosInstance';
import Button from "../common/Button";
import Filters from "./filters";
import Launches from "./launches";
import { withRouter } from "react-router";

class LaunchPrograms extends React.PureComponent {

    constructor(props) {
        super(props);
        const searchParams = new URLSearchParams(window.location.search);
        this.state = {
            launches: [],
            selectedYear: searchParams.get("selectedYear"),
            isLaunchSuccess: searchParams.get("isLaunchSuccess"),
            isLandSuccess: searchParams.get("isLandSuccess")
        }
    }


    componentDidMount() {
        this.getLaunches();
    }

    // get list of launches
    getLaunches = async () => {
        const launchResponse = await getData(urlConfig.getAll, this.prepareParams());
        if (!launchResponse.error) {
            this.setState({
                launches: launchResponse.data
            })
        } else {
            alert(launchResponse.error);
        }
    }

    // Prepare filter parameters
    prepareParams = () => {
        const { selectedYear, isLaunchSuccess, isLandSuccess } = this.state;
        const params = {};
        if(selectedYear !== "null"){
            params["selectedYear"] = selectedYear;
        }
        if(isLaunchSuccess !== "null"){
            params["launch_success"] = isLaunchSuccess;
        }
        if(isLandSuccess !== "null"){
            params["land_success"] = isLandSuccess;
        }
        return params;
    }

    // Handle clicks and ignore if same button is clicked again
    clickHanlder = (name, value) => {
        if (value !== this.state[name]) {
            this.setState({
                [name]: value
            }, () => {
                const {selectedYear, isLaunchSuccess, isLandSuccess} = this.state;
                this.props.history.push(`/?selectedYear=${selectedYear}&isLaunchSuccess=${isLaunchSuccess}&isLandSuccess=${isLandSuccess}`);
                this.getLaunches();
            })
        }
    }

    render() {
        const { launches, selectedYear, isLaunchSuccess, isLandSuccess } = this.state;
        return (
            <>
                <div className="row">
                    <Filters
                        selectedYear={selectedYear}
                        isLaunchSuccess={isLaunchSuccess}
                        isLandSuccess={isLandSuccess}
                        clickHanlder={this.clickHanlder}
                    />
                    <Launches launches={launches} />
                </div>
            </>
        )
    }
}

export default withRouter(LaunchPrograms);