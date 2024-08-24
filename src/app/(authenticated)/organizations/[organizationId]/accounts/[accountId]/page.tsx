'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Upload,
  Spin,
  Row,
  Col,
  Card,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AccountDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()

  const accountId = params.accountId
  const {
    data: account,
    isLoading,
    refetch,
  } = Api.account.findUnique.useQuery({
    where: { id: accountId },
    include: { user: true, organization: true },
  })

  const { mutateAsync: updateAccount } = Api.account.update.useMutation()

  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    if (account) {
      form.setFieldsValue({
        balance: account.balance,
        userId: account.userId,
        organizationId: account.organizationId,
      })
    }
  }, [account])

  const handleUpdate = async (values: Prisma.AccountUpdateInput) => {
    try {
      await updateAccount({ where: { id: accountId }, data: values })
      enqueueSnackbar('Account updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update account', { variant: 'error' })
    }
  }

  const handleUpload = async ({ file }) => {
    try {
      const { url } = await upload({ file })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      // Handle the uploaded file URL as needed
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card>
            <Title level={2}>Account Details</Title>
            <Text>View and update the account information below.</Text>
            <Form form={form} layout="vertical" onFinish={handleUpdate}>
              <Form.Item
                name="balance"
                label="Balance"
                rules={[
                  { required: true, message: 'Please input the balance' },
                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item
                name="userId"
                label="User ID"
                rules={[
                  { required: true, message: 'Please input the user ID' },
                ]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                name="organizationId"
                label="Organization ID"
                rules={[
                  {
                    required: true,
                    message: 'Please input the organization ID',
                  },
                ]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Account
                </Button>
              </Form.Item>
            </Form>
            <Upload
              fileList={fileList}
              beforeUpload={file => {
                setFileList([file])
                return false
              }}
              onRemove={() => setFileList([])}
              customRequest={handleUpload}
            >
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
