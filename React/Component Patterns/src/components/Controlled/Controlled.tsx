import React, { Component, FormEvent } from "react";

interface ControlledState {
  textVal: string;
  selectVal: string;
  multiSelectVal: string[];
  textAreaVal: string;
  radioVal: string;
}

class Controlled extends Component<{}, ControlledState> {
  constructor(props: any) {
    super(props);
    this.state = {
      textVal: "",
      selectVal: "Cat",
      multiSelectVal: [],
      textAreaVal: "",
      radioVal: ""
    };
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(
    event: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void {
    console.log(
      `event: ${event.currentTarget.name} : ${event.currentTarget.value}`
    );
    const { name, value } = event.currentTarget;
    switch (name) {
      case "controlled-text":
        this.setState({
          textVal: value
        });
        break;
      case "controlled-select":
        this.setState({
          selectVal: value
        });
        break;
      case "controlled-multi-select": {
        const currentValues = this.state.multiSelectVal;
        const index = currentValues.findIndex(val => val === value);
        const multiSelectValue =
          index === -1
            ? [...currentValues, value]
            : [
              ...currentValues.slice(0, index),
              ...currentValues.slice(index + 1, currentValues.length)
            ];
        console.log(index);
        console.log(multiSelectValue);
        this.setState({
          multiSelectVal: multiSelectValue
        });
        break;
      }
      case "controlled-text-area":
        this.setState({
          textAreaVal: value
        });
        break;
      case "controlled-radio":
        this.setState({
          radioVal: value
        });
        break;
      default:
        return undefined;
    }
    return undefined;
  }

  render() {
    const {
      textVal,
      selectVal,
      multiSelectVal,
      textAreaVal,
      radioVal
    } = this.state;
    return (
      <div className="controlled">
        <h4>Enter form values</h4>
        <form>
          <span>Text Input: </span>
          <input
            type="text"
            name="controlled-text"
            id="controlled-text"
            value={textVal}
            onChange={this.onFormChange}
          />
          <br />
          <span>Select: </span>
          <select
            name="controlled-select"
            id="controlled-select"
            value={selectVal}
            onChange={this.onFormChange}
          >
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Fish">Fish</option>
          </select>
          <br />
          <span>Multi Select: </span>
          <select
            name="controlled-multi-select"
            id="controlled-multi-select"
            multiple
            value={multiSelectVal}
            onChange={this.onFormChange}
          >
            <option value="Batman">Batman</option>
            <option value="Superman">Superman</option>
            <option value="Aquaman">Aquaman</option>
          </select>
          <br />
          <span>TextArea Input: </span>
          <textarea
            name="controlled-text-area"
            id="controlled-text-area"
            value={textAreaVal}
            onChange={this.onFormChange}
          />
          <br />
          Red
          <input
            type="radio"
            name="controlled-radio"
            value="Red"
            checked={radioVal === "Red"}
            onChange={this.onFormChange}
          />
          Blue
          <input
            type="radio"
            name="controlled-radio"
            value="Blue"
            checked={radioVal === "Blue"}
            onChange={this.onFormChange}
          />
          Black
          <input
            type="radio"
            name="controlled-radio"
            value="Black"
            checked={radioVal === "Black"}
            onChange={this.onFormChange}
          />
        </form>
        <div className="controlled-state">
          <h4>Form Summary</h4>
          <ul>
            <li>Text Input: {textVal}</li>
            <li>Select Input: {selectVal}</li>
            <li>Multi Select Input: {multiSelectVal}</li>
            <li>Text Area Input: {textAreaVal}</li>
            <li>Radio Input: {radioVal}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Controlled;
