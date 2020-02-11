import React from "react"
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }
    
    handleChanges = event => {
        this.setState({
            //[event.target.name]: event.target.value
            newItem: event.target.value
        });
    };

 

    //class property to submit form
    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({newItem: ''});
    }

    render() {
        console.log('rendering form')
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="formGroup">
                        <Label className="label" for="newItem">Add:</Label>
                        <Input style={{width: "30%"}}
                        type="text" 
                        name="newItem" 
                        value={this.state.newItem}
                        onChange={this.handleChanges}
                        />
                    </FormGroup>
                    <Button id="buttonClass">
                        Add
                    </Button>
                    <Button id="buttonClass" onClick={() => this.props.removeComplete()}>
                        Clear Completed
                    </Button>
                </Form>
            </div>
        );
    }

};

export default TodoForm;