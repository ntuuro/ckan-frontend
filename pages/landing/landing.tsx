import React, { useEffect, useState } from 'react'
import GraphsSection from '../../components/Landing/GraphSection'
import GroupSection from '../../components/Landing/GroupSection'
import SearchContent from '../../components/Landing/SearchContent'
import AppLayout from '../../components/Shared/AppLayout/AppLayout'
import WithPublicRoute from '../../components/Shared/WithPublicRoute'
import { useGetOrganisationsQuery } from '../../lib/api/endpoints/datasets/datasetsEndpoints'
import { OrgsAPIResponse } from '../../lib/types/datasets'


const Landing = () => {

const [orgs, setOrgs] = useState<OrgsAPIResponse | undefined>(undefined);

const { data: organisations } = useGetOrganisationsQuery()


useEffect(() => setOrgs(organisations), [organisations])

  return (
    <AppLayout>
        <SearchContent/>
        <GroupSection 
          data={orgs}
        />
        <GraphsSection/>
    </AppLayout>
  )
}

export default WithPublicRoute(Landing)
