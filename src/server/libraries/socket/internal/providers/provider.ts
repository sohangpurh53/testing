import { AuthorizeChannelResponse } from '../../socket.type'

export interface Provider {
  emit(channel: string, event: string, data: any): Promise<void>
  authorizeChannel(
    socketId: string,
    channel: string,
  ): Promise<AuthorizeChannelResponse>
  isActive(): boolean
}
