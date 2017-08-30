import { observable, action } from 'mobx';

class TimerStore {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.increment()
    }, 1000);
  }

  @action.bound
  increment() {
    this.timer += 1;
  }

  @action.bound
  resetTimer() {
    this.timer = 0;
  }
}

const singleton = new TimerStore();
export default singleton;