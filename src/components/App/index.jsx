import {g} from 'vars';
import React from 'react';
import DevTools from 'mobx-react-devtools';
import {Provider} from 'mobx-react';
import Header from 'components/Header';
import Main from 'components/Main';
import TimerStore from 'stores/TimerStore';

export default class App extends React.Component {
  render() {
    const stores = {
      timerStore: TimerStore,
    }
    return (
      <Provider {...stores}>
        <div>
          <Header/>
          <Main/>
          {g.displayDevTools && <DevTools/>}
        </div>
      </Provider>
    );
  }
};
