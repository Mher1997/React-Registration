import React from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Congrats, ReagisterForm } from './Helper';
import { addUser } from '../../store/action';
import './Registration.css';


class Registration extends React.Component {
    state = {
        confirmDirty: false,
        success: false,
        fullName: ''
    };
    
    handleSubmit = e => {
        const {form, history, addUser} = this.props;
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                addUser(values);
                this.setState({
                    success: true,
                    fullName: values.firstName + ' ' + values.lastName
                })
                setTimeout(()=>history.push('/account'), 4000);
            }
        });
    }
    
    render() {
        const {getFieldDecorator} = this.props.form;
        const {success, fullName} = this.state;      

        return success ? <Congrats fullName={fullName}/> : (
            <div id="registration">
                <h1>Sign Up</h1>
                <ReagisterForm getFieldDecorator={getFieldDecorator} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Registration);

const mapDispatchToProps = {
    addUser
}

export default withRouter(connect(null, mapDispatchToProps)(WrappedRegistrationForm));