import React from 'react';
import Button from "../../common/Button";
import "./index.css";

class Filters extends React.PureComponent {

    years = [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020"
    ];

    render() {
        const { selectedYear, isLaunchSuccess, isLandSuccess, clickHanlder } = this.props;
        
        return (
            <div className="col-sm-12 col-md-2 menu-section">
                <div className="row">
                    <div className="col-sm-12 mb-10">
                        <div className="filter">Filters</div>
                        <div className="description-text filter-category">
                            Launch Year
                        </div>
                        <div className="row">
                            {
                                this.years.map((year) => (
                                    <div key={year} className="col-xs-5 col-sm-6">
                                        <Button
                                            onClick={() => clickHanlder("selectedYear", year)}
                                            name={year}
                                            isSelected={year === selectedYear}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-sm-12 mb-10">
                        <div className="description-text filter-category">
                            Successful Launch
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <Button
                                    onClick={() => clickHanlder("isLaunchSuccess", "true")}
                                    name="True"
                                    isSelected={isLaunchSuccess === "true"}
                                />
                            </div>
                            <div className="col-sm-6">
                                <Button
                                    onClick={() => clickHanlder("isLaunchSuccess", "false")}
                                    name="False"
                                    isSelected={isLaunchSuccess === "false"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="description-text filter-category">
                            Successful Landing
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <Button
                                    onClick={() => clickHanlder("isLandSuccess", "true")}
                                    name="True"
                                    isSelected={isLandSuccess === "true"}
                                />
                            </div>
                            <div className="col-sm-6">
                                <Button
                                    onClick={() => clickHanlder("isLandSuccess", "false")}
                                    name="False"
                                    isSelected={isLandSuccess === "false"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }

}

export default Filters;