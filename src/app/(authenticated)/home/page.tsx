'use client'

import { Typography, Row, Col, Card, Spin, Alert } from 'antd'
import { BellOutlined, StockOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: notifications, isLoading: isLoadingNotifications } =
    Api.notification.findMany.useQuery({ where: { userId: user?.id } })
  const { data: alerts, isLoading: isLoadingAlerts } =
    Api.alert.findMany.useQuery({ where: { userId: user?.id } })

  if (isLoadingNotifications || isLoadingAlerts) {
    return (
      <PageLayout layout="full-width">
        <Spin tip="Loading...">
          <Alert message="Loading data..." type="info" />
        </Spin>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Dashboard</Title>
      <Text>
        Get a quick overview of your accountancy activities and stay informed
        about important updates.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} md={12}>
          <Card title="Notifications" bordered={false} extra={<BellOutlined />}>
            {notifications?.length ? (
              notifications.map(notification => (
                <div key={notification.id}>
                  <Text>{notification.message}</Text>
                  <br />
                  <Text type="secondary">
                    {dayjs(notification.timestamp).format('YYYY-MM-DD HH:mm')}
                  </Text>
                </div>
              ))
            ) : (
              <Text>No notifications available.</Text>
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Alerts" bordered={false} extra={<StockOutlined />}>
            {alerts?.length ? (
              alerts.map(alert => (
                <div key={alert.id}>
                  <Text>{alert.message}</Text>
                  <br />
                  <Text type="secondary">
                    {dayjs(alert.timestamp).format('YYYY-MM-DD HH:mm')}
                  </Text>
                </div>
              ))
            ) : (
              <Text>No alerts available.</Text>
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
