'use client';

import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Modal, Form, Input, Button, message } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import type { BadgeProps, CalendarProps } from 'antd';
import {
  useGetAllPlansQuery,
  useAddMaterialDataMutation,
} from '../../../../redux/api/plans/plansApi';
import Loading from '../../../loading';
import dayjs from 'dayjs';
import MyFormModal from '../../../../components/Modal/ModalCalendar';



const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const MyCalendar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [addMaterial] = useAddMaterialDataMutation();

  const onSubmit = async (values:any) => {
    try {
      console.log('on submit:', values);
      setLoading(true);

      const res = await addMaterial(values);
      const errorMessage = res?.data?.message;

      if (res) {
        if (res?.data?.code === 400) {
          message.error(errorMessage);
          console.log(errorMessage, 'error message');
        } else if ('data' in res && res.data) {
          message.success('Material created successfully!');
          setLoading(false);
        } else {
          message.error('Error! Insert Failed');
        }
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
      // Close the modal after submission
      handleCancel();
    }
  };

  // get data
  const { data = [] } = useGetAllPlansQuery({});

  if (!data) {
    return <Loading />;
  }

  console.log(data, 'Calendar Data');
  // Destructuring the array of objects
  const destructuredData = data.map(
    ({
      id,
      date,
      supplier,
      material,
      rate,
      vat,
      ait,
      quantity,
    }: {
      id: number;
      date: string; // Add the type for the 'date' property
      supplier: string;
      material: string;
      rate: number;
      vat: number;
      ait: number;
      quantity: number;
    }) => ({
      id,
      date,
      supplier,
      material,
      rate,
      vat,
      ait,
      quantity,
    }),
  );

  console.log(destructuredData, 'Destructure Data');

  const getListData = (value: any) => {
    const currentDateString = value.format('YYYY-MM-DD');

    // Filter the API data for the current date
    const filteredData = destructuredData.filter(
      (item: { date: string | number | Date | Dayjs | null | undefined }) =>
        dayjs(item.date).format('YYYY-MM-DD') === currentDateString,
    );

    // Map the filtered data to the desired format for the calendar
    const listData = filteredData.map(
      (item: { supplier: any; material: any }) => ({
        type: 'success',
        content: `${item.material}`,
      }),
    );

    return listData || [];
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <>
        <div className="sticky-container ">
          <PlusCircleOutlined
            className="sticky-plus"
            type="primary"
            onClick={showModal}
          />
        </div>

        <ul className="events">
          {listData.map((item: any) => (
            <li key={item.id}>
              <Badge
                status={item.type as BadgeProps['status']}
                text={item.content}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
    <h1 className='text-lg ml-2 mt-5 mb-5'>Calender</h1>
      <Calendar cellRender={cellRender} />
      <MyFormModal
        visible={isModalVisible}
        onClose={handleCancel}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default MyCalendar;
