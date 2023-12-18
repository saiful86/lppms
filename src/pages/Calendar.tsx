import React from 'react';
import type { Dayjs } from 'dayjs';
import type { BadgeProps } from 'antd';
import { Badge, Calendar, Button, Select, Input, Modal, Form } from 'antd';
import {
  EditOutlined,
  SaveOutlined,
  BookFilled,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
// import MyCalendar from '../components/Calendar';
import '../MyCalendar.css';

const CustomCalendar: React.FC = () => {
  const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', content: '50 MT' }];
        break;
      case 10:
        listData = [{ type: 'success', content: '500 MT' }];
        break;
      case 15:
        listData = [{ type: 'success', content: '500 MT' }];
        break;
      default:
    }
    return listData || [];
  };

  // Modal
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOk = () => {
    // Handle the OK action if needed
    setModalOpen(false);
  };

  const handleCancel = () => {
    // Handle the cancel action if needed
    setModalOpen(false);
  };

  //Inside Modal Select

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const cellRender = (value: Dayjs) => {
    const listData = getListData(value);

    const showModal = () => {
      // Open the modal when the plus button is clicked
      setModalOpen(true);
    };

    const [isEditing, setEditing] = React.useState(false);
    const [editedContent, setEditedContent] = React.useState('');

    const handleEdit = () => {
      setEditing(!isEditing);
    };

    const handleSave = () => {
      if (editedContent.trim() !== '') {
        console.log('Updated data:', {
          type: 'success',
          content: editedContent,
        });
        setEditing(false);
        // Update the content in your data source or dispatch an action to update the data
      } else {
        // If content is empty, cancel editing mode
        setEditing(false);
      }
    };

    return (
      <div className="date-cell-wrapper">
        <div className="events">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <BookFilled style={{ color: 'red' }} />
              <BookFilled style={{ color: 'green' }} />
              <BookFilled style={{ color: 'yellow' }} />
              <BookFilled style={{ color: 'black' }} />
            </div>

            <PlusCircleOutlined onClick={showModal} />
          </div>
          {listData.map((item, index) => (
            <>
              <div style={{ paddingTop: '20px' }}>
                <div
                  className="event invisible left-1 z-99 flex w-full flex-row justify-between rounded-sm border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 dark:bg-meta-4 md:visible md:opacity-100"
                  key={index}
                >
                  {isEditing ? (
                    <div className="events flex flex-row justify-between text-left opacity-0 dark:bg-meta-4 md:visible md:opacity-100">
                      <input
                        style={{ width: '100%' }}
                        type="text"
                        placeholder="Edit"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                      />
                      <SaveOutlined onClick={handleSave} />
                    </div>
                  ) : (
                    <React.Fragment>
                      <Badge
                        status={item.type as BadgeProps['status']}
                        text={item.content}
                      />
                      <EditOutlined onClick={handleEdit} />
                    </React.Fragment>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onFinish = (values: any) => {
    console.log('Form submission data:', values);
    // Handle the form submission, e.g., send data to the server
  };

  // const handlePanelChange = (value: any, mode: 'year' | 'month' | 'decade') => {
  //   // Handle panel change
  //   console.log(value, mode);
  // };

  return (
    <div>
      <div style={{ width: '50%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '10px',
          }}
        >
          <p
            style={{
              padding: '5px',
              backgroundColor: 'gray',
              borderRadius: '5px',
              width: '50%',
              color: 'white',
           
            }}
          >
            Total Required Material
          </p>
          <Input
            style={{ width: '85%', marginRight: '5px' }}
            placeholder="Material"
          />
          <p
            style={{
              padding: '5px',
              backgroundColor: 'gray',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            MT
          </p>
        </div>
        <div
          style={{
            paddingBottom: '10px',
          }}
          className="flex justify-end"
        >
          <Button htmlType="submit">Continue</Button>
        </div>
      </div>
      <Calendar cellRender={cellRender} />
      <Modal
        title="Supplier"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <>
          <Form onFinish={onFinish}>
            <div style={{ marginBottom: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  Select Supplier
                </p>
                <Select
                  showSearch
                  placeholder="Select Supplier"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  style={{ width: '100%' }}
                  options={[
                    {
                      value: 'GDL',
                      label: 'GDL',
                    },
                    {
                      value: 'DHL',
                      label: 'DHL',
                    },
                    {
                      value: 'Pathao',
                      label: 'Pathao',
                    },
                  ]}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  Select Material
                </p>
                <Select
                  showSearch
                  placeholder="Select Material"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  style={{ width: '100%' }}
                  options={[
                    {
                      value: 'Pure Lead 99.97%',
                      label: 'Pure Lead 99.97%',
                    },
                    {
                      value: 'Lead 80%',
                      label: 'Lead 80%',
                    },
                    {
                      value: 'Semi Lean 95%',
                      label: 'Semi Lean 95%',
                    },
                  ]}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  Input Rate
                </p>
                <Input style={{ width: '100%' }} placeholder="Input Rate" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  VAT
                </p>
                <Input style={{ width: '100%' }} placeholder="VAT" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  AIT
                </p>
                <Input style={{ width: '100%' }} placeholder="AIT" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    width: '50%',
                    marginRight: '10px',
                    color: 'white',
                  }}
                >
                  Material
                </p>
                <Input
                  style={{ width: '85%', marginRight: '5px' }}
                  placeholder="Material"
                />
                <p
                  style={{
                    padding: '5px',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    color: 'white',
                  }}
                >
                  MT
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button htmlType="submit">Continue</Button>
            </div>
          </Form>
        </>
      </Modal>
      {/* <MyCalendar
        onPanelChange={handlePanelChange}
      /> */}
    </div>
  );
};

export default CustomCalendar;
