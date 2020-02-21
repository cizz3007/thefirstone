import React,{useState} from 'react';
import {AutoComplete} from 'antd';
import {API_HOTEL_DATA_REQUEST} from "@/api/searchApi";
import {debounce} from 'lodash';

type ElementInterface = {
  name: string,
  doc_id: number,
}

const ServerIntegrationHook:React.FC = (props)=>{

  const [data,setData] = useState<string[]>([]);

  const onSearchHandler = (searchText:string)=>{
    API_HOTEL_DATA_REQUEST(searchText)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data['data'];
          let arr:string[] = [];

          data && data.length && data.forEach((elem: ElementInterface, key: string) => {
            arr.push(elem.name);
          });

          setData(arr);

        } else {
          throw {
            error:true,
            msg:'not responded'
          }
        }


      }).catch((err) => {
      console.log(err);
      setData([]);
    });
  };
  return(
    <main>
      <AutoComplete style={{width: 320}}
                    dataSource={data}
                    onSearch={debounce(value => onSearchHandler(value), 200)}
                    placeholder={"검색어를 입력해 주세요"}/>
    </main>
  )
};

export default ServerIntegrationHook;
