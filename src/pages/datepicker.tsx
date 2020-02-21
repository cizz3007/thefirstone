import React, {useState} from 'react';
import {DatePicker, Button, Icon, InputNumber} from 'antd';
import moment from 'moment';

const ButtonGroup = Button.Group;

const DatepickerHook: React.FC = (props) => {

  const [today, setToday] = useState(new Date());
  const [format] = useState('YYYY-MM-DD');
  const [gap, setGap] = useState(2);

  const onChangeHandler = (date: any, dateString: string) => {
    setToday(new Date(dateString));
  };
  const dateChangeHandler = (value: boolean) => {
    if (value) {
      setToday(new Date(today.setDate(today.getDate() + 1)));
    } else {
      setToday(new Date(today.setDate(today.getDate() - 1)));
    }
  };
  const inputChangeHandler = (number?: number) => {
    setGap(number || 0);
  };

  return (
    <main>
      <DatePicker
        defaultValue={moment(today, format) || null}
        value={moment(today, format)}
        onChange={onChangeHandler}/>
      <ButtonGroup>
        <Button type="primary" onClick={() => {
          dateChangeHandler(false);
        }}>
          <Icon type="left"/>
          이전 날짜로
        </Button>
        <Button type="primary" onClick={() => {
          dateChangeHandler(true);
        }}>
          다음 날짜로
          <Icon type="right"/>
        </Button>
      </ButtonGroup>
      <InputNumber min={1}
                   max={99}
                   defaultValue={gap}
                   onChange={inputChangeHandler}/>
      <div>
        {
          moment(today, format).format(format)
        } ~
        {
          moment(today).add(gap, 'days').format(format)
        }
      </div>
    </main>
  )
};

export default DatepickerHook;


