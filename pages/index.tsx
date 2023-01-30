import React from 'react'
import { TagsWrapper } from '../components/MetaTags/TagsWrapper'
import WithPublicRoute from '../components/Shared/WithPublicRoute'
import Landing from './landing'

const Home = (): JSX.Element => {
  return (
    <>
      <TagsWrapper title="Data.gov.rw" />
      <Landing />
    </>
  )
}

export default WithPublicRoute(Home)
