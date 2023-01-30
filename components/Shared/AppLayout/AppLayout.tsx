import React, { FC } from 'react'
import AppHeader from '../AppHeader'
import { Layout } from 'antd'
import AppFooter from '../AppFooter'

const { Content } = Layout

type AppLayout = {
  children: React.ReactNode
}

const AppLayout: FC<AppLayout> = ({ children }) => {
  return (
    <Layout>
      <Layout>
        <AppHeader />
        <Content className="app_content">{children}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default AppLayout
