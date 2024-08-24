import { Provider } from './internal/providers/provider'
import { PusherProvider } from './internal/providers/pusher/pusher.provider'
import { AuthorizeChannelResponse } from './socket.type'

class Service {
  private provider: Provider = new PusherProvider()

  isActive(): boolean {
    if (this.provider) {
      return this.provider?.isActive()
    }

    return false
  }

  async emit(channel: string, event: string, data?: any): Promise<void> {
    if (this.provider) {
      await this.provider.emit(channel, event, data)
    }
  }

  async authorizeChannel(
    socketId: string,
    channel: string,
  ): Promise<AuthorizeChannelResponse> {
    if (this.provider) {
      return this.provider.authorizeChannel(socketId, channel)
    }
  }
}

class Singleton {
  static service = new Service()
}

export const SocketService = Singleton.service
