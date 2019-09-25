import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Cascader, Button, Radio } from 'antd';
import { formItemLayout, tailFormItemLayout, Congrats } from './Helper';
import { countries } from '../../Helper/countries';
import './Registration.css';

const options = countries;

class Registration extends React.Component {
    state = {
        confirmDirty: false,
        radioValue: 'Company',
        success: false,
        fullName: ''
    };
    
    handleSubmit = e => {
        const {form, history} = this.props;
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    success: true,
                    fullName: values.firstName + ' ' + values.lastName
                })
                setTimeout(()=>history.push('/'), 5000);
                console.log('Received values of form: ', values);
            }
        });
    }

    onChangeRadio = e => this.setState({radioValue: e.target.value})
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const {radioValue, success, fullName} = this.state;      

        return success ? <Congrats fullName={fullName}/> : (
            <div id="registration">
                <h1>Sign Up</h1>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="First name">
                        {getFieldDecorator('firstName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your First name!',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Last name">
                        {getFieldDecorator('lastName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Last name!',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Country">
                        {getFieldDecorator('country', {
                            rules: [
                                { type: 'array', required: true, message: 'Please select your Country!' },
                            ],
                        })(<Cascader options={options} />)}
                    </Form.Item>
                    <Form.Item label="City">
                        {getFieldDecorator('city', {
                            rules: [
                                { type: 'array', required: true, message: 'Please select your City!' },
                            ],
                        })(<Cascader options={options} />)}
                    </Form.Item>
                    <Form.Item label="Address">
                        {getFieldDecorator('address', {
                            rules: [
                            {
                                required: true,
                                message: 'Please input your Address!',
                            },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Other address">
                        {getFieldDecorator('other-address')(<Input/>)}
                    </Form.Item>
                    <Form.Item  label="Legal ">
                        <Radio.Group onChange={this.onChangeRadio} value={radioValue}>
                            <Radio value={'Company'}>Company</Radio>
                            <Radio value={'Individual'}>Individual</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Registration);

export default withRouter (WrappedRegistrationForm);