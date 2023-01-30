import React from 'react'
import { Layout, Menu, Image, Col, Row, Typography, Space } from 'antd'
import Link from 'next/link';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
  <Layout className='layout'>
    <Header>
      <Row>
        <Col span={14} offset={5}>
          <Row>
            <Col span={16}>
              <Link href="/">
                <Row>
                  <Space size={16}>
                        <Col>
                          <Image src="/logo.svg" alt="" width={65} preview={false}/> 
                        </Col>
                        <Col>
                        <Title level={5}>|</Title>
                        </Col>
                        <Col>
                          <Title level={5} className='mato8'>Data.gov.rw</Title> 
                        </Col>
                        
                  </Space>
                </Row>
              </Link>
            </Col>
            <Col span={8}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['3']}
              >
                <Menu.Item>
                  <Link href="/blog">
                      <span className="text-black normalText pl-3">
                        Blog
                      </span>
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link href="/blog">
                    <span className="text-black normalText pl-3">
                      Developers
                    </span>
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link href="/blog">
                    <span className="text-black normalText pl-3">
                      Data Request
                    </span>
                  </Link>
                </Menu.Item>

              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  </Layout>
  )
}

export default AppHeader
