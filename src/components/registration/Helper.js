import React from 'react';

export const formItemLayout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 8 },
  },
};

export const tailFormItemLayout = {
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

export const Congrats = props => (
  <div id="congrats">
    <h1>{`Dear ${props.fullName}, Congratulations your account has been successfully created !!!` }</h1>
  </div>
)