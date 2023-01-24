import { Button } from 'antd'
import React from 'react'
import { routes } from '../../config/route-config'
import { changeRoute } from '../../helpers/changeRoute'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => changeRoute(routes.landing.url)}>Login</Button>
    </div>
  )
}

export default Login
