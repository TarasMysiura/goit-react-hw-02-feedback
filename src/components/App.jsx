import { Component } from 'react';
import { Feedback } from './Feedback/Feedback ';

export class App extends Component {
  state = {
    good: 3,
    neutral: 3,
    bad: 5,
  };

  render() {
    return (
      
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback state={this.state} />
      </div>
    );
  }
}
