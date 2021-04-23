import { useIsFetching, useIsMutating } from 'react-query'
import { Progress } from 'antd'
import React from 'react'

export default function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return isFetching || isMutating ? (
    <Progress
      style={{ position: 'fixed', top: -12, left: 0, zIndex: 99999 }}
      strokeColor={{
        from: '#66bb6a',
        to: '#5c6bc0',
      }}
      percent={100}
      showInfo={false}
      status="active"
    />
  ) : null
}
