import React from 'react'
import { Col, Row, Typography, Card } from 'antd'
import { Line, Column, Pie } from '@ant-design/plots';

const { Title } = Typography;

const GraphSection = () => {

  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 10,
    },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: true,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  const config2 = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'year',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  const config3 = {
    data,
    xField: 'value',
    yField: 'year',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      value: {
        alias: '类别',
      },
      year: {
        alias: '销售额',
      },
    },
  };

  return (
    <div className='mato32 pad16 mabo64'>
      <Row>
        <Col span={14} offset={5}>
          <Row>
            <Col span={24}>
              <Title level={3} className='mato8 text_title'>Rwanda at a glance</Title>
            </Col>
          </Row>

          <Row gutter={16} className="mato16">
            <Col className="gutter-row" span={8}>
              <Card>
                <p className='text_normal' style={{textAlign: 'center'}}>
                  Annual Motor Vehicle Population by ...
                </p>
                <Line {...config} />
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card>
                <p className='text_normal' style={{textAlign: 'center'}}>
                Government Total Expenditure (2021)
                </p>
                <Column {...config3} />
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card>
                <p className='text_normal' style={{textAlign: 'center'}}>
                Rwanda Residents By Gender, End ....
                </p>
                <Pie {...config2}/>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
  </div>
  )
}

export default GraphSection