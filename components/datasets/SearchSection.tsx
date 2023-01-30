import React from 'react'
import type { MenuProps } from 'antd';
import {Row, Col, Card, Typography, Menu, Input, Select, Button} from 'antd'
import { FileJpgOutlined, FilePdfOutlined, RiseOutlined, InsertRowAboveOutlined, BookOutlined, DownloadOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;
const { Search } = Input;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  items?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    items,
    label,  
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(null , 'grp', null, 
    [getItem('Economy', 'economy', <RiseOutlined />), 
     getItem('Education', 'education', <BookOutlined />),
     getItem('Infrastructure', 'infrastructure', <InsertRowAboveOutlined />),
     getItem('Economy', 'economy', <RiseOutlined />), 
     getItem('Education', 'education', <BookOutlined />),
     getItem('Infrastructure', 'infrastructure', <InsertRowAboveOutlined />),
     getItem('Economy', 'economy', <RiseOutlined />), 
     getItem('Education', 'education', <BookOutlined />),
     getItem('Infrastructure', 'infrastructure', <InsertRowAboveOutlined />),
    ],
  'group'),
];

const SearchSection = ({ 
    data
  }: any) => {
  
    console.log(data);
    
  return (
    <div className='mato32 pad16 mabo64'>
      <Row>
        <Col span={14} offset={5}>
          <Row>
            <Col span={16} push={5} offset={3} >
              <Search placeholder="Search public data"  size="large" enterButton/>
            </Col>
          </Row>

          <Row gutter={16} className="mato32">
            <Col className="gutter-row" span={8}>
              <div className='mabo16'>
                <Title level={3} className="dark text_title">
                  Topics
                </Title>
                <Card>
                <Menu
                  style={{ width: 300 }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  items={items}
                />
                </Card>
              </div>

              <div  className='mabo16'>
                <Title level={3} className="dark text_title">
                  File Format
                </Title>
                <Select
                  defaultValue="PDF"
                  style={{ width: 360 }}
                  size="large"
                  options={[
                    { value: 'PDF', label: 'PDF' },
                    { value: 'DOC', label: 'DOC' },
                    { value: 'JPG', label: 'JPG' },
                  ]}
              />
              </div>

              <div  className='mabo16'>
                <Title level={3} className="dark text_title">
                  Organization
                </Title>
                <Select
                  defaultValue="MOH"
                  style={{ width: 360 }}
                  size="large"
                  options={[
                    { value: 'MOH', label: 'Ministry of Health' },
                    { value: 'MINEDC', label: 'Ministry of Education' },
                    { value: 'MINICT', label: 'Ministry of ICT' },
                  ]}
              />
              </div>

            </Col>
            <Col className="gutter-row" span={16}>
              <Row>
                <Col span={12}>
                  <Title level={3} className="yellow text_title">
                    {data?.result?.count} datasets
                  </Title>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={12} push={6}>
                      <Title level={3} className="dark text_title">
                        Sort by: 
                      </Title>
                    </Col>
                    <Col span={12} push={0}>
                      <Select
                        defaultValue="ASC"
                        style={{ width: 180 }}
                        options={[
                          { value: 'ASC', label: 'Ascending' },
                          { value: 'DESC', label: 'Descending' },
                        ]}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Card bordered={false}>
                {[...Array(6)].map((x, i) => 
                  <>
                  {
                    data?.result?.results.map((dataset: any) => (
                    <div className='dataset mabo24' style={{display: 'flex'}}>
                      <div style={{width: '80%'}}>
                        <div className='text_title_ fowe_lighter mabo8'>
                          {dataset.title}
                        </div>
                        <div className='text_small fowe_lighter mabo8'>
                          {dataset.organization.title} / {dataset.metadata_created}
                        </div>
                        <div className='text_normal_grey mabo8'>
                        {dataset.organization.notes}
                        </div>
                        <div className='text_normal_grey'>
                          <FilePdfOutlined style={{fontSize: '24px', color: '#2a3548'}}/>
                        </div>
                      </div>
                      <div style={{width: '20%', paddingLeft: '100px'}}>
                        <Link href={dataset.resources[0].url}>
                          <Button type="primary" icon={<DownloadOutlined />} size='middle'/>
                        </Link>
                      </div>
                    </div>
                    ))
                  }
                    
{/* 
                    <div className='dataset mabo24' style={{display: 'flex'}}>
                      <div style={{width: '80%'}}>
                        <div className='text_title_ mabo8'>
                          Enrolment - MOE Kindergartens
                        </div>
                        <div className='text_small mabo8'>
                          Ministry of Education / 25 Jan 2023
                        </div>
                        <div className='text_normal_grey mabo8'>
                          MOE Kindergartens enrolment
                        </div>
                        <div className='text_normal_grey'>
                          <FileJpgOutlined style={{fontSize: '24px', color: '#2a3548'}}/>
                        </div>
                      </div>
                      <div style={{width: '20%', paddingLeft: '100px'}}>
                        <Button type="primary" icon={<DownloadOutlined />} size='middle'/>
                      </div>
                    </div> */}
                  </>
                )}

              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
  </div>
  )
}

export default SearchSection