import React, {useState} from 'react';
import { Form, Input, Cascader, Button, Radio, Icon } from 'antd';
import { countries } from '../../Helper/countries';

const options = countries;

const formItemLayout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 10 },
  },
};

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 16,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
  },
};

export const ReagisterForm = props => {
    const {getFieldDecorator, handleSubmit} = props;

    const [legal, setLegal] = useState('Company');
    const [pack, setPack] = useState('Standard Package');

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
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
                    {
                        required: true,
                        message: 'Please input your city!',
                    },
                    ],
                })(<Input/>)}
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
                {getFieldDecorator('otherAddress')(<Input/>)}
            </Form.Item>
            <Form.Item  label="Legal">
                <Radio.Group onChange={e=>setLegal(e.target.value)} value={legal}>
                    <Radio value={'Company'}>Company</Radio>
                    <Radio value={'Individual'}>Individual</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item  label="Package">
                <Radio.Group onChange={e=>setPack(e.target.value)} value={pack}>
                    <Radio value={'Standard Package'}>Standard Package</Radio>
                    <Radio value={'Premium Package'}>Premium Package</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}

export const Congrats = props => (
    <div id="congrats">
      <h1>{`Dear ${props.fullName}, please  wait, your account is being created !!!` }</h1>
        <Icon type="loading" style={{ fontSize: 34 }} spin />
    </div>
)