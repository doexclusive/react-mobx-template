import {g} from 'vars';
import React from 'react';
import DevTools from 'mobx-react-devtools';
import Header from 'components/Header';
import Main from 'components/Main';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        {g.displayDevTools && <DevTools/>}
      </div>
    );
  }
};
