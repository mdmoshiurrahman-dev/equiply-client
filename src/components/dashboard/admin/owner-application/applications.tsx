import React, { Suspense } from 'react'
import { ApplicationsTable } from './application-table'
import TableSkeleton from './TableSkeleton'

export const Applications = () => {
  return (
    <Suspense fallback ={<TableSkeleton/>}>
      <ApplicationsTable/>
    </Suspense>
  )
}

export default Applications