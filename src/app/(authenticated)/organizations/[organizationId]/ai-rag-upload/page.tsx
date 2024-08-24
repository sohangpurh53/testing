'use client'

import { useState, useEffect } from 'react'
import { Typography, Upload, Button, List, Spin, Row, Col } from 'antd'
import { UploadOutlined, FileTextOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AIRAGFileUploadPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: generateText } = Api.rag.generateText.useMutation()

  const handleUpload = async ({ file }: any) => {
    setLoading(true)
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      const response = await generateText({
        prompt: 'Generate a summary of the document.',
        tags: [key],
      })
      setUploadedFiles(prev => [
        ...prev,
        { url, key, summary: response.answer, date: new Date() },
      ])
      enqueueSnackbar('File uploaded and processed successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to upload and process file.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title>AI RAG File Upload</Title>
          <Paragraph>
            Upload your files to leverage AI capabilities for document analysis
            and information retrieval.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Upload customRequest={handleUpload} showUploadList={false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
      {loading && (
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Spin tip="Processing..." />
        </Row>
      )}
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <List
            header={<div>Uploaded Files</div>}
            bordered
            dataSource={uploadedFiles}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<FileTextOutlined />}
                  title={
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      File Link
                    </a>
                  }
                  description={`Uploaded on: ${dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}`}
                />
                <div>{item.summary}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
