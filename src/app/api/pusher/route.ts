import { Authentication } from '@/core/authentication'
import { SocketService } from '@/server/libraries/socket'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const socket_id = formData.get('socket_id') as string
    const channel_name = formData.get('channel_name') as string

    const session = await Authentication.getSession()

    const user = session?.user

    if (user) {
      const auth = await SocketService.authorizeChannel(socket_id, channel_name)

      return NextResponse.json(auth)
    } else {
      return new NextResponse('Pusher authentication request failed', {
        status: 403,
      })
    }
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 })
  }
}
