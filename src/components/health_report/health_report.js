import React, { Component } from 'react';
import './health_report';
import SimpleLineChart from './report_chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam} from '@fortawesome/free-regular-svg-icons';
import { faMeh} from '@fortawesome/free-regular-svg-icons';
import { faFrown} from '@fortawesome/free-regular-svg-icons';

import Navbar from '../../containers/navbar/navbar';

class HealthReport extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className="container healthReport_container">
          <h2>Your Health Report</h2>
          
          <div className="healthReport_chart">
            <h4>Six month overview</h4>
            <span className="healthchart_icon_happy"><FontAwesomeIcon icon={faGrinBeam} style={{color: 'green'}} size="2x"/></span>
            <span className="healthchart_icon_sad"><FontAwesomeIcon icon={faFrown} style={{color: 'red'}} size="2x"/></span>
            <SimpleLineChart />
          </div>
          <div className="healthReport_achievement">
            <h4>Achievenments</h4>
            <div className="healthReport_achievement_icons">
              <img src="https://img.icons8.com/dusk/80/000000/prize.png"></img>
              <img src="https://img.icons8.com/doodle/80/000000/laurel-wreath.png"></img>
              <img src="https://img.icons8.com/dusk/80/000000/trophy.png"></img>
            </div>
          </div>
          <div className="healthReport_Recommendations">
            <h4>Recommendations</h4>
            <p>Some text here to talk about areas where the user can improve their numbers. Links to Other sections of the app, Some text here to talk about areas where the user can improve their numbers. Links to Other sections of the app</p>
          </div>
    </div>
    </div>
    );
  }
}

export default HealthReport;
