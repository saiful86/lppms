import React, { FC } from 'react';
import { Calendar as AntdCalendar, Select } from 'antd';
import { CalendarProps } from 'antd/lib/calendar';
import moment from 'moment';
import { SelectValue } from 'antd/lib/select';
import dayjs, { Dayjs } from 'dayjs';

type CustomCalendarMode = 'year' | 'month' | 'decade';

interface MyCalendarProps extends CalendarProps<Dayjs> {
  onPanelChange: (value: Dayjs, mode: CustomCalendarMode) => void;
}

const MyCalendar: FC<MyCalendarProps> = ({ onPanelChange, ...restProps }) => {
  const dateCellRender = (value: Dayjs) => {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div
          style={{ border: '1px solid blue', height: '100%', width: '100%' }}
        >
          {value.date()}
        </div>
      </div>
    );
  };

  const contentRender = (cell: any) => {
    return cell.content;
  };

  const headerRender = ({ value, type, onChange, onTypeChange }: any) => {
    const monthOptions = moment.months().map((month, index) => ({
      value: index,
      label: month,
    }));

    return (
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div>
          <span style={{ marginRight: 8 }}>Select Month:</span>
          <Select
            value={value.month()}
            size="small"
            onChange={(newMonth) =>
              onChange(value.clone().month(newMonth), 'month')
            }
            style={{ marginRight: 8 }}
          >
            {monthOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </div>
        <Select
          value={value.year()}
          size="small"
          onChange={(newYear) => onChange(value.clone().year(newYear), 'year')}
          style={{ marginRight: 8 }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <Select.Option key={i} value={value.year() - 5 + i}>
              {value.year() - 5 + i}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  };

  return (
    <AntdCalendar
      onPanelChange={(value, mode) =>
        onPanelChange(value, mode as CustomCalendarMode)
      }
      mode="month"
      headerRender={headerRender}
      dateCellRender={dateCellRender}
      contentRender={contentRender}
      {...restProps}
    />
  );
};

export default MyCalendar;
