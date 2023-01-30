import React from 'react';
import { Typography } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Text } = Typography;
const style: React.CSSProperties = { padding: '18px 32px', cursor: 'pointer' };

const GroupSection = ({
    data
}: any) => {

  return (
    <div className='group_section'>
        <div className='center'>

        {data?.result.map( (orgs: any) => (
            <Link href={`/organization/${orgs}`}>
                <div style={style}>
                    <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                        <RiseOutlined className='group_icon'/>
                    </div>
                    <div className='inner mato8'>
                        <Text className='text_normal text_capitalize'>{orgs}</Text>
                    </div>
                </div>
            </Link> 

        ) )}
            {/* <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <BookOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Education</Text>
                </div>
            </div>
            
            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <InsertRowAboveOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Infrastructure</Text>
                </div>
            </div>

            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <RiseOutlined className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Economy</Text>
                </div>
            </div>

            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <BookOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Education</Text>
                </div>
            </div>
            
            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <InsertRowAboveOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Infrastructure</Text>
                </div>
            </div>

            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <RiseOutlined className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Economy</Text>
                </div>
            </div>

            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <BookOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Education</Text>
                </div>
            </div>
            
            <div style={style}>
                <div className='inner' style={{display: 'flex', justifyContent: 'center'}}>
                    <InsertRowAboveOutlined  className='group_icon'/>
                </div>
                <div className='inner mato8'>
                    <Text className='text_normal'>Infrastructure</Text>
                </div>
            </div> */}

        </div>        
    </div>
  )
}


export default GroupSection