import React from 'react';
import {AutoComplete} from 'antd';
import {API_HOTEL_DATA_REQUEST} from "@/api/searchApi";
import {debounce} from 'lodash';

type State = {
  data: string[],
  value: string,
  error: Boolean,
}
type ElementInterface = {
  name: string,
  doc_id: number,
}
type Props = {}

class ServerIntegration extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      value: '',
      error: false,
    };

    this.onSelectHandler = this.onSelectHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSelectHandler(value: string) {
    console.log('#select', value)
  }

  onSearchHandler(searchText: string) {
    console.log('#search ', searchText)

    API_HOTEL_DATA_REQUEST(searchText)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data['data'];
          let arr: string[] = [];

          data && data.length && data.forEach((elem: ElementInterface, key: string) => {
            arr.push(elem.name);
          });

          this.setState({
            data: arr || [],
            error: false
          });

          console.log(data);
        } else {
          throw {
            error:true,
            msg:'not responded'
          }
        }


      }).catch((err) => {
      console.log(err);
      this.setState({
        error: true,
        data: []
      })
    });
  }

  onChangeHandler(value: any) {
    this.setState({
      value: value,
    });
  }

  render() {

    const {
      data,
      error
    } = this.state;


    return (
      <main>
        <AutoComplete style={{width: 320}}
                      dataSource={data}
                      onSearch={debounce(value => this.onSearchHandler(value), 200)}
                      onChange={debounce(value => this.onChangeHandler(value), 1000)}
                      placeholder={"검색어를 입력해 주세요"}/>
        <br/>
        <br/>
        <br/>
        {
          error && <div>err.</div>
        }
        <pre>{JSON.stringify(data)}</pre>
      </main>
    )
  }
}

export default ServerIntegration;
