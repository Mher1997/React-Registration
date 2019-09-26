import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { columns } from './Helper';
import { deleteUser } from '../../store/action';
import './Account.css';

const Account = props => {
    console.log(props.users);
    return (
        <div>
           <Table columns={columns(props.deleteUser)} dataSource={props.users} />
        </div>
    )
}

const mapStateToProps = state => ({
    users : state
})

const mapDispatchToProps = {
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);