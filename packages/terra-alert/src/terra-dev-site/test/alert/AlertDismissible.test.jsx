import React from 'react';
import Alert from '../../../Alert';

class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  render() {
    let alertElem = <div id="dismissed">Alert was dismissed</div>;
    if (!this.state.isDismissed) {
      alertElem = (<Alert id="dismissibleAlert" type="success" onDismiss={this.handleDismiss} >
        This is a dismissable Alert;
      </Alert>);
    }
    return (
      alertElem
    );
  }
}

export default AlertDismissible;
