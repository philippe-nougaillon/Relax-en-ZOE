import React from 'react';
import { connect } from 'react-redux';

import { faPlug, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import CustomButtonBox from './CustomButtonBox'; 

import { doPowerUP } from '../actions/powerUp';
import { doPowerDOWN } from '../actions/powerDown';
import { doTimeUP } from '../actions/timeUp';
import { doTimeDOWN } from '../actions/timeDown';

function mapStateToProps(state) {
    return {
        params: state.paramsState,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPowerUP: () => dispatch(doPowerUP()),
        onPowerDOWN: () => dispatch(doPowerDOWN()),
        onTimeUP: () => dispatch(doTimeUP()),
        onTimeDOWN: () => dispatch(doTimeDOWN()),
    }
}

const Charge = ({ params, onPowerUP, onPowerDOWN, onTimeUP, onTimeDOWN }) => {

    const { power, minutes, charge } = params;

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-header">
                    <h1>
                        <small className="text-info">Charge</small>
                        <br />
                         + { charge | 0 }% 
                        <small><small style={{ marginLeft: 15 }}>
                            (~{ (300 * charge) / 100 | 0 } km)
                        </small></small>
                    </h1>
                </div>
                <div className="card-body">
                    <CustomButtonBox
                        icon={ faPlug }
                        value={ power }
                        unit=" kW/h"
                        onClickUP  ={ onPowerUP }
                        onClickDOWN={ onPowerDOWN }>
                        Puissance
                    </CustomButtonBox>

                    <CustomButtonBox
                        icon={ faHourglassStart }
                        value={ minutes }
                        unit=" minutes"
                        onClickUP  ={ onTimeUP }
                        onClickDOWN={ onTimeDOWN }>
                        Temps
                    </CustomButtonBox>

                </div>
                <div className="card-footer">
                    Temps de charge (0 à 100%): 
                    <ul>
                        <li>22 kW/h => 2h40</li>
                        <li>11 kW/h => 5h</li>
                        <li>7 kW/h => 10h</li>
                        <li>3 kW/h => 25h</li>
                    </ul>
                </div>
            </div>
        </div>
  )}

export default connect(mapStateToProps, mapDispatchToProps)(Charge);