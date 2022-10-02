import React from "react";
import { Button, Form, Input, DatePicker } from "antd";
import { useInputHook } from "../../hooks/useInputHook";
const { RangePicker } = DatePicker;

const Create = () => {
  const [eventName, eventChange] = useInputHook("");
  const [hostName, hostNameChange] = useInputHook("");
  const [location, locationChange] = useInputHook("");
  const [imgUrl, imgUrlChange] = useInputHook("");

  return (
    <>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 5,
        }}
        layout="horizontal"
      >
        <Form.Item label="Event name">
          <Input onChange={eventChange} value={eventName} />
        </Form.Item>
        <Form.Item label="Host name">
          <Input onChange={hostNameChange} value={hostName} />
        </Form.Item>
        <Form.Item
          name="range-time-picker"
          label="Start and End time/date"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select time!",
            },
          ]}
        >
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item label="Location">
          <Input onChange={locationChange} value={location} />
        </Form.Item>
        <Form.Item label="Image URL">
          <Input onChange={imgUrlChange} value={imgUrl} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <Create />;
