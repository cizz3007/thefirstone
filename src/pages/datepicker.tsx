import React from 'react';
import {DatePicker, Button, Icon, InputNumber} from 'antd';

import moment from 'moment';

const ButtonGroup = Button.Group;

type Props = {}

type State = {
  today: Date,
  format: string,
  gap: number,
}


class DatepickerPage extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      today: new Date(),
      format: 'YYYY-MM-DD',
      gap: 2,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }


  onChangeHandler(date: any, dateString: string) {
    this.setState({
      today: new Date(dateString)
    })
  }

  dateChangeHandler(condition: string) {
    const {
      today
    } = this.state;
    if (condition === 'plus') {
      this.setState({
        today: new Date(today.setDate(today.getDate() + 1))
      })
    } else {
      this.setState({
        today: new Date(today.setDate(today.getDate() - 1))
      })
    }
  }

  inputChangeHandler(number?: number) {
    this.setState({
      gap:number||0,
    })
  }

  componentDidMount(): void {

  }

  render() {
    const {
      today,
      format,
      gap,
    } = this.state;

    return (
      <main>
        <DatePicker
          defaultValue={moment(today, format) || null}
          value={moment(today, format)}
          onChange={this.onChangeHandler}/>
        <ButtonGroup>
          <Button type="primary" onClick={() => {
            this.dateChangeHandler('minus');
          }}>
            <Icon type="left"/>
            이전 날짜로
          </Button>
          <Button type="primary" onClick={() => {
            this.dateChangeHandler('plus');
          }}>
            다음 날짜로
            <Icon type="right"/>
          </Button>
        </ButtonGroup>
        <InputNumber min={1}
                     max={99}
                     defaultValue={gap}
                     onChange={this.inputChangeHandler}/>
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
  }
}

export default DatepickerPage;
