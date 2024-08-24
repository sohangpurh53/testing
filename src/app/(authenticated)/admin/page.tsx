'use client'

import { Table, Space, Button, Typography, Spin } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: users,
    isLoading,
    refetch,
  } = Api.user.findMany.useQuery({
    include: {
      organizationRoles: { include: { organization: true } },
      transactions: { include: { organization: true } },
      chatMessagesAsSender: { include: { receiver: true, organization: true } },
      chatMessagesAsReceiver: { include: { sender: true, organization: true } },
      accounts: { include: { organization: true } },
    },
  })

  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser({ where: { id: userId } })
      enqueueSnackbar('User deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete user', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => router.push(`/admin/edit/${record.id}`)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Title level={2}>Admin Dashboard</Title>
        <Text>
          As an admin, you can manage all user activity in this dashboard.
        </Text>
      </div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </PageLayout>
  )
}
