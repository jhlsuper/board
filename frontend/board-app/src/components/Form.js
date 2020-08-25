import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {

    const handleFormSubmit = ({event, requestType, boardID}) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch (requestType ) {
      case 'post':
        return axios.post("http://127.0.0.1:8000/api/", {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));
      case 'put':
        return axios.put('http://127.0.0.1:8000/api/'+String(boardID), {
          title: title,
          content: content
        }) 
        .then(res => console.log(res))
        .catch(error => console.err(error));
    }
  }

  return (
    <div>
      <Form onSubmit={(event) => this.handleFormSubmit(
        event,
        this.props.requestType,
        this.props.boardID )}>
        <Form.Item label="Title">
          <Input name="title" placeholder="제목을 입력하세요!" />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="내용을 입력하세요 ..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {this.props.btnText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;