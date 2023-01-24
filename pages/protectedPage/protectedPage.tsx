import React from 'react'
import WithPrivateRoute from '../../components/Shared/WithPrivateRoute'

const protectedPage = () => {
  return <div>protectedPage</div>
}

export default WithPrivateRoute(protectedPage)
