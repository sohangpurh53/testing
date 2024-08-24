import { Api } from '@/core/trpc'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'

/**
 * @provider PusherClient
 * @description A client to listen to events using Pusher
 * @function
 * @usage `const pusherClient = usePusherClient();
 * if (pusherClient) {
 *  const channel = pusherClient.subscribe('private-my-channel')
 *  channel.bind('my-event', () => {
 *   console.log('Implement your logic here')
 *  })
 * }
 * `
 * @import import { usePusherClient } from '@/core/hooks/pusher'
 */
export const usePusherClient = () => {
  const [pusherClient, setPusherClient] = useState(null)

  const { data, isError } = Api.configuration.getPublic.useQuery()

  useEffect(() => {
    if (data && !isError) {
      const pusherKey = data['PUBLIC_PUSHER_KEY']
      const pusherCluster = data['PUBLIC_PUSHER_CLUSTER']

      if (!pusherKey || !pusherCluster) {
        console.error(
          'Set PUBLIC_PUSHER_KEY and PUBLIC_PUSHER_CLUSTER in your .env to activate',
        )
        return
      }

      const pusher = new Pusher(pusherKey, {
        cluster: pusherCluster,
        authEndpoint: '/api/pusher',
      })

      setPusherClient(pusher)
    }
  }, [data, isError])

  return pusherClient
}
