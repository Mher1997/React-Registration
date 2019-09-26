import React from 'react';
import { Icon } from 'antd';

export const columns = deleteUser => ([
    {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Other address',
        dataIndex: 'otherAddress',
        key: 'otherAddress',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) =><Icon 
            style={{fontSize: '22px'}}
            onClick={()=>deleteUser(record.key)} 
            type="delete" 
            theme="twoTone" 
        />,
    },
  ])