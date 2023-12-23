"use client";

import React from 'react';
import { Modal, Form, Input, InputNumber, Button, DatePicker } from 'antd';


const ModalCalendar = ({ visible, onClose, onSubmit  }) => {


  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values); // Call the onSubmit function with the form values
        form.resetFields();
        onClose();
      })
      .catch((errorInfo) => {
        console.error('Validation Failed:', errorInfo);
      });
  };

  
  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title="Supplier"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="myForm">
      <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please enter the date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="supplier"
          label="Supplier"
          rules={[{ required: true, message: 'Please enter the supplier!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="material"
          label="Material"
          rules={[{ required: true, message: 'Please enter the material!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="rate"
          label="Rate"
          rules={[{ required: true, message: 'Please enter the rate!' }]}
        >
          <InputNumber min={0} step={0.1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="vat"
          label="VAT"
          rules={[{ required: true, message: 'Please enter the VAT!' }]}
        >
          <InputNumber min={0} step={0.1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="ait"
          label="AIT"
          rules={[{ required: true, message: 'Please enter the AIT!' }]}
        >
          <InputNumber min={0} step={0.1} style={{ width: '100%' }}/>
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please enter the quantity!' }]}
        >
          <InputNumber min={0} step={1} style={{ width: '100%' }}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCalendar;