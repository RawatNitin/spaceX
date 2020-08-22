import React from "react";
import "./Launch.css"

const Launch = (props) => {
    const { launchDetail } = props;
    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="launch">
                <div className="mission-img">
                    <img
                        src={launchDetail.links.mission_patch}
                    />
                </div>

                <div className="description">
                    <div className="name blue">
                        {launchDetail.mission_name} #{launchDetail.flight_number}
                    </div>
                    <div>
                        <div className="name">
                            Mission Ids:
                        </div>
                        <div className="value blue">
                            <ul>
                                {
                                    launchDetail.mission_id.map(id => (
                                        <li key={id}> {id}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8 name">
                            Launch Year:
                        </div>
                        <div className="col-sm-2 value blue">
                            {launchDetail.launch_year}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8 name">
                            Successful Launch:
                        </div>
                        <div className="col-sm-2 value blue">
                            {launchDetail.launch_success ? "Yes" : "No"}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8 name">
                            Successful Landing:
                        </div>
                        <div className="col-sm-2 value blue">
                            {launchDetail.land_success ? "Yes" : "No"}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default React.memo(Launch);
