import React from 'react'
import Login from '../components/Auth/Login'
import { TagsWrapper } from '../components/MetaTags/TagsWrapper'
import WithPublicRoute from '../components/Shared/WithPublicRoute'

const Home = (): JSX.Element => {
  return (
    <>
      <TagsWrapper title="Login" />
      <Login />
    </>
  )
}

export default WithPublicRoute(Home)
