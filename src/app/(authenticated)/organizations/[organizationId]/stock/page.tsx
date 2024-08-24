'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
  Popconfirm,
  Typography,
  Row,
  Col,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function StockManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchText, setSearchText] = useState('')

  const {
    data: stockItems,
    isLoading,
    refetch,
  } = Api.product.findMany.useQuery({
    where: { organizationId: params.organizationId },
    include: { organization: true },
  })

  const { mutateAsync: createStockItem } = Api.product.create.useMutation()
  const { mutateAsync: updateStockItem } = Api.product.update.useMutation()
  const { mutateAsync: deleteStockItem } = Api.product.delete.useMutation()

  const handleAdd = () => {
    setEditingItem(null)
    setIsModalVisible(true)
  }

  const handleEdit = item => {
    setEditingItem(item)
    setIsModalVisible(true)
    form.setFieldsValue(item)
  }

  const handleDelete = async id => {
    await deleteStockItem({ where: { id } })
    enqueueSnackbar('Stock item deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleOk = async () => {
    const values = await form.validateFields()
    if (editingItem) {
      await updateStockItem({ where: { id: editingItem.id }, data: values })
      enqueueSnackbar('Stock item updated successfully', { variant: 'success' })
    } else {
      await createStockItem({
        data: { ...values, organizationId: params.organizationId },
      })
      enqueueSnackbar('Stock item added successfully', { variant: 'success' })
    }
    setIsModalVisible(false)
    form.resetFields()
    refetch()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleSearch = e => {
    setSearchText(e.target.value)
  }

  const filteredItems = stockItems?.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: text => text.toString(),
    },
    {
      title: 'Stock Quantity',
      dataIndex: 'stockQuantity',
      key: 'stockQuantity',
      render: text => text.toString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Stock Management</Title>
          <Text>
            Manage your inventory efficiently by adding, editing, and deleting
            stock items.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Space style={{ marginBottom: 16 }}>
            <Input
              placeholder="Search stock items"
              value={searchText}
              onChange={handleSearch}
              prefix={<SearchOutlined />}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
              Add Stock Item
            </Button>
          </Space>
          <Table
            columns={columns}
            dataSource={filteredItems}
            loading={isLoading}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Col>
      </Row>
      <Modal
        title={editingItem ? 'Edit Stock Item' : 'Add Stock Item'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="stockQuantity"
            label="Stock Quantity"
            rules={[
              { required: true, message: 'Please enter the stock quantity' },
            ]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
