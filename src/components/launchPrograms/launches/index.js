import React from 'react';
import Button from "../../common/Button";
import Launch from "./Launch";
import "./index.css";

class Launches extends React.PureComponent {

    render() {
        const { launches } = this.props;
        return (
            <div className="col-sm-12 col-md-offset-1 col-md-10">
                <div className="row launches-container">
                    {
                        launches.length ?
                            launches.map((launchDetail) => (
                                <Launch 
                                    key={launchDetail.flight_number}
                                    launchDetail={launchDetail}
                                />
                            ))
                            :
                            <div className="col-sm-12 no-information">
                                No launch information found.
                            </div>
                    }
                </div>

            </div>
        )

    }

}

export default Launches;