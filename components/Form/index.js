import React, { Component } from 'react';

class Form extends Component {
  state = {
    formName: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter Your Name Here ...',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Enter Your Email Here ...',
        },
        value: '',
      },
    },
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormName = {
      ...this.state.formName,
    };
    const updatedFormElement = {
      ...updatedFormName[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormName = updatedFormElement;
    this.setState({
      formName: updatedFormName,
    });
  };
  handleFormSubmit = () => {
    console.log('Need To Implement');
  };
  render() {
    let formElements = [];
    for (let key in this.state.formName) {
      formElements.push({
        id: key,
        config: this.state.formName[key],
      });
    }
    let form = (
      <form onSubmit={this.handleFormSubmit}>
        formElements.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={event => this.inputChangedHandler(event, formElement.id)}
        />
        ))
      </form>
    );
    return <div>{form}</div>;
  }
}

export default Form;
