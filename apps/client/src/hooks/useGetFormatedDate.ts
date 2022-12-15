import moment from 'moment'
import React, { useMemo } from 'react'

const useGetFormatedDate = (data:string) :string => {
  return useMemo(()=>moment (data?.split('T')?.[0]).format('D MMMM YYYY'),[data]);
}

export default useGetFormatedDate