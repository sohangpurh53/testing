'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
  Popconfirm,
} from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AccountManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingAccount, setEditingAccount] =
    useState<Prisma.AccountGetPayload<{
      include: { user: true; organization: true }
    }> | null>(null)
  const [searchText, setSearchText] = useState('')

  const {
    data: accounts,
    isLoading,
    refetch,
  } = Api.account.findMany.useQuery({
    where: {
      OR: [
        { user: { name: { contains: searchText } } },
        { organization: { name: { contains: searchText } } },
      ],
    },
    include: { user: true, organization: true },
  })

  const { mutateAsync: createAccount } = Api.account.create.useMutation()
  const { mutateAsync: updateAccount } = Api.account.update.useMutation()
  const { mutateAsync: deleteAccount } = Api.account.delete.useMutation()

  const handleAdd = () => {
    setEditingAccount(null)
    setIsModalVisible(true)
  }

  const handleEdit = (
    record: Prisma.AccountGetPayload<{
      include: { user: true; organization: true }
    }>,
  ) => {
    setEditingAccount(record)
    setIsModalVisible(true)
  }

  const handleDelete = async (id: string) => {
    await deleteAccount({ where: { id } })
    enqueueSnackbar('Account deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingAccount) {
        await updateAccount({ where: { id: editingAccount.id }, data: values })
        enqueueSnackbar('Account updated successfully', { variant: 'success' })
      } else {
        await createAccount({ data: values })
        enqueueSnackbar('Account created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving account', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'User',
      dataIndex: ['user', 'name'],
      key: 'user',
    },
    {
      title: 'Organization',
      dataIndex: ['organization', 'name'],
      key: 'organization',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (text: number) => text.toString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        _: any,
        record: Prisma.AccountGetPayload<{
          include: { user: true; organization: true }
        }>,
      ) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this account?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Account Management</Title>
      <Text>Manage your financial records efficiently.</Text>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search accounts"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          prefix={<SearchOutlined />}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          Add Account
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={accounts}
        loading={isLoading}
        rowKey="id"
      />
      <Modal
        title={editingAccount ? 'Edit Account' : 'Add Account'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={editingAccount || { balance: 0 }}
          layout="vertical"
        >
          <Form.Item
            name="balance"
            label="Balance"
            rules={[{ required: true, message: 'Please input the balance!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
