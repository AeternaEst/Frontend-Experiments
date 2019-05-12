import React, {Component} from 'react';

class Controlled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textVal: "",
            selectVal: "Cat",
            multiSelectVal: [],
            textAreaVal: "",
            radioVal: ""
        }
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange(event) {
        console.log(`event: ${event.target.name} : ${event.target.value}`);
        const name = event.target.name;
        const value = event.target.value;
        switch(name) {
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
            case "controlled-multi-select":
                const currentValues = this.state.multiSelectVal;
                const index = currentValues.findIndex((val) => val === value);
                const multiSelectValue = index === -1 ? [...currentValues, value] : 
                    [...currentValues.slice(0, index), ...currentValues.slice(index+1, currentValues.length)];
                console.log(index);
                console.log(multiSelectValue);
                this.setState({
                    multiSelectVal: multiSelectValue
                });
                break;
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
        }
    }

    render() {
        const { textVal, selectVal, multiSelectVal, textAreaVal, radioVal } = this.state;
        return (<div className="controlled">
            <h4>Enter form values</h4>
            <form>
                <label name="controlled-text">Text Input: </label>
                <input type="text" name="controlled-text" value={textVal} onChange={this.onFormChange}/><br />

                <label name="controlled-select">Select: </label>
                <select name="controlled-select" value={selectVal} onChange={this.onFormChange}>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Fish">Fish</option>
                </select><br />

                <label name="controlled-multi-select">Multi Select: </label>
                <select name="controlled-multi-select" multiple value={multiSelectVal} onChange={this.onFormChange}>
                    <option value="Batman">Batman</option>
                    <option value="Superman">Superman</option>
                    <option value="Aquaman">Aquaman</option>
                </select><br />

                <label name="controlled-text-area">TextArea Input: </label>
                <textarea name="controlled-text-area" value={textAreaVal} onChange={this.onFormChange}/><br/>

                Red<input type="radio" name="controlled-radio" value="Red" checked={radioVal === "Red"} onChange={this.onFormChange}/>
                Blue<input type="radio" name="controlled-radio" value="Blue" checked={radioVal === "Blue"} onChange={this.onFormChange}/>
                Black<input type="radio" name="controlled-radio" value="Black" checked={radioVal === "Black"} onChange={this.onFormChange}/>

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
        </div>)
    }
}

export default Controlled;