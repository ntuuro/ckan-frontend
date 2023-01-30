import React, { useState, useEffect } from 'react'
import SearchSection from '../../components/datasets/SearchSection'
import AppLayout from '../../components/Shared/AppLayout/AppLayout'
import WithPublicRoute from '../../components/Shared/WithPublicRoute'
import { useDatasetsQuery } from '../../lib/api/endpoints/datasets/datasetsEndpoints'
import { DatasetAPIResponse } from '../../lib/types/datasets'

const datasets = () => {
  const [datasets, setDatasets] = useState<DatasetAPIResponse | undefined>(undefined);
  const {data: allDatasets } = useDatasetsQuery();
  
  useEffect(() => {
    setDatasets(allDatasets)
  }, [allDatasets]);


  return (
    <AppLayout>
      <SearchSection
        data={datasets}
       />
    </AppLayout>
  )
}

export default WithPublicRoute(datasets)