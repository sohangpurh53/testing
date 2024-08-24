'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  InputNumber,
  Button,
  Upload,
  Spin,
  Row,
  Col,
  Card,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function StockItemDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { stockItemId } = params

  const {
    data: stockItem,
    isLoading,
    refetch,
  } = Api.product.findUnique.useQuery({
    where: { id: stockItemId },
    include: { organization: true },
  })

  const { mutateAsync: updateStockItem } = Api.product.update.useMutation()
  const { mutateAsync: uploadFile } = useUploadPublic()

  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    if (stockItem) {
      form.setFieldsValue({
        name: stockItem.name,
        description: stockItem.description,
        price: stockItem.price,
        stockQuantity: stockItem.stockQuantity,
      })
    }
  }, [stockItem, form])

  const handleUpdateStockQuantity = async (values: any) => {
    try {
      await updateStockItem({
        where: { id: stockItemId },
        data: { stockQuantity: values.stockQuantity },
      })
      enqueueSnackbar('Stock quantity updated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update stock quantity', { variant: 'error' })
    }
  }

  const handleUpload = async ({ file }: any) => {
    try {
      const response = await uploadFile({ file })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      setFileList([...fileList, response.url])
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <Spin />
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Card>
            <Title level={2}>Stock Item Details</Title>
            <Paragraph>
              View and update the details of the stock item. You can also upload
              related files such as invoices and images.
            </Paragraph>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateStockQuantity}
            >
              <Form.Item label="Name" name="name">
                <Text>{stockItem?.name}</Text>
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Text>{stockItem?.description}</Text>
              </Form.Item>
              <Form.Item label="Price" name="price">
                <Text>{stockItem?.price.toString()}</Text>
              </Form.Item>
              <Form.Item label="Stock Quantity" name="stockQuantity">
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Stock Quantity
                </Button>
              </Form.Item>
            </Form>
            <Upload
              customRequest={handleUpload}
              fileList={fileList}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
