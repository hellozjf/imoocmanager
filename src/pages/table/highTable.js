import React from 'react'
import {Card, Table, Modal, Button, message} from "antd";
import axios from './../../axios/index'
import Utils from "../../utils/utils";

export default class FormLogin extends React.Component {
  state = {}
  params = {
    page: 1
  }

  componentDidMount() {
    this.request();
  }

  // 动态获取mock数据
  request = () => {
    let _this = this;
    axios.ajax({
      url: '/table/high/list',
      data: {
        params: {
          page: this.params.page
        },
        isShowLoading: false
      }
    }).then((res) => {
      if (res.code == 0) {
        res.result.list.map((item, index) => {
          item.key = index
        })
        this.setState({
          dataSource: res.result.list
        })
      }
    });
  }

  handleChange = (pagination, filters, sorter)=>{
    console.log("::" + sorter)
    this.setState({
      sortOrder: sorter
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        width: 80,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          };
          return config[state];
        }
      },
      {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
    ]
    const columns2 = [
      {
        title: 'id',
        width: 80,
        fixed: 'left',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 80,
        fixed: 'left',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          };
          return config[state];
        }
      },
      {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday1'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday2'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday3'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday4'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday5'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday6'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday7'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday8'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday9'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday10'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday11'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday12'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday13'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday14'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday15'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday16'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday17'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday18'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday19'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday20'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday21'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday22'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday23'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday24'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday25'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday26'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday27'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday28'
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday29'
      },
      {
        title: '地址',
        width: 120,
        fixed: 'right',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        fixed: 'right',
        dataIndex: 'time'
      },
    ];
    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter:(a,b)=>{
          return a.age - b.age;
        },
        sortOrder:this.state.sortOrder
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          };
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
    ];

    // 累加出x轴滚动所需要的宽度
    let totalWidth = 0;
    columns2.map((item) => {
      if (!isNaN(item.width)) {
        totalWidth += item.width;
      }
    });
    console.debug(totalWidth);

    return (
      <div>
        <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>
        <Card title="左侧固定" style={{margin: '10px 0'}}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x: totalWidth}}
          />
        </Card>
        <Card title="表格排序" style={{margin: '10px 0'}}>
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
      </div>
    );
  }
}