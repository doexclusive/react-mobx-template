import React from 'react';
import Timetable from 'components/Timetable';
import {Panel} from 'shared/components/Panel';

export default class TimeWrapper extends React.Component {
  render() {
    return (
      <Panel>
      	This is TimeWrapper
      	<br/>
      	<Timetable/>
      </Panel>
    );
  }
};