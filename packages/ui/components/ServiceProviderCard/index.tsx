import { Button, Card } from 'antd'
import React, { useState } from 'react'
import ServiceProvider from 'components/ServiceProvider'

export default function ServiceProviderCard({ task, project }) {
  const { serviceProviders } = project
  const [showAllSps, setShowAllSps] = useState(false)
  return (
    <Card title="Connect with Service Providers" bordered={false}>
      <span>{showAllSps}</span>
      {serviceProviders?.map((serviceProvider, index) => {
        if (index < 3 || showAllSps)
          return (
            <ServiceProvider
              task={task}
              key={serviceProvider.serviceProviderId}
              serviceProvider={serviceProvider}
            />
          )
        return null
      })}
      {serviceProviders?.length > 3 ? (
        <Button block onClick={() => setShowAllSps(!showAllSps)}>
          {!showAllSps
            ? 'See all service providers'
            : 'show less service providers'}
        </Button>
      ) : null}
    </Card>
  )
}
