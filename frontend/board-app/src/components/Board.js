import React from 'react';
import { List }  from 'antd';


const Board = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={props.data}
            footer={
            <div>
                <b>Bilyeo</b> board
            </div>
            }
            renderItem={item => (
            <List.Item
                key={item.title}
            >
                <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
            </List.Item>
            )}
        />
    );
}

export default Board;