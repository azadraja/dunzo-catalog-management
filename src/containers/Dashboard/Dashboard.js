import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

}

function mapStateToProps(state) {
    return state.authentication
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };