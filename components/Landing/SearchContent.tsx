import React from 'react';
import { Space, Typography, Input, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;
const { Search } = Input;

const SearchContent = () => {
  return (
    <div className='landing_content'>
        <div className="overlay">
                <div >
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <Title className='text_white mato96'>Data.gov.rw</Title>
                     </Space>

                    <Space direction="horizontal" style={{width: '85%', justifyContent: 'center'}}>
                        <Search placeholder="Search public data" style={{ width: '200%' }} size="large" enterButton/>
                    </Space>

                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <Link href="/datasets">
                            <Button className='mato16' type="primary" icon={<EyeOutlined />} size='large'>
                                View all datasets
                            </Button>
                        </Link>
                    </Space>
                </div>
        </div>
    </div>
  )
}

export default SearchContent
