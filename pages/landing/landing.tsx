import React from 'react'
import AppLayout from '../../components/Shared/AppLayout/AppLayout'
import WithPublicRoute from '../../components/Shared/WithPublicRoute'

const Landing = () => {
  return (
    <AppLayout>
      <div>landing</div>
    </AppLayout>
  )
}

export default WithPublicRoute(Landing)
