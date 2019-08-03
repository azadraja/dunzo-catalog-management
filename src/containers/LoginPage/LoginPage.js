import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { userActions } from '../../actions/user.actions';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const loginBoxStyle = {
    textAlign: 'center',
}

const gradientBackground = {
    background: 'linear-gradient(to bottom, rgba(6,249,169,1) 0%, rgba(65,185,235,1) 100%)',
}

const primaryButton = {
    backgroundColor: 'rgba(65,185,235,1)',
}

const errorText = {
    color: 'red',
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        console.log(username, password, this.state);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loading, isRejected, error } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <Box height="100vh" display="flex" flexDirection="row" flexWrap="nowrap">
                    <Box style={gradientBackground} flexGrow={1} display="flex">
                        
                    </Box>
                    <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">
                        <Box display="flex" flexDirection="column" width={500} height={500} justifyContent="center" >
                            <Box style={loginBoxStyle}>
                                <img alt="Dunzo Logo" src="./assets/dunzo-logo.png" />
                            </Box>
                            <TextField
                                id="username"
                                label="Username"
                                margin="dense"
                                autoComplete="off"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                margin="dense"
                                type="password"
                                autoComplete="off"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <Box height={32}>
                            {
                                isRejected && (<Typography style={errorText} variant="overline"> Error has occured during login attempt</Typography>)
                            }
                            </Box>
                            <Box p={1}  display="flex" justifyContent="flex-end">
                            <Typography variant="overline">Forgot password?</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" p={1} alignItems="center">
                                <Button disabled={loading === true} onClick={this.handleSubmit} variant="contained" size="large" style={primaryButton} color="primary">
                                    Login
                                </Button>
                                <Button variant="outlined" size="large">
                                    Register
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loading, error, isRejected } = state.authentication;
    return {
        loading,
        error,
        isRejected,
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };