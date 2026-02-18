import { getServerSession } from 'next-auth'

import { complete } from '@/actions/conversation'
import authOptions from '@/lib/auth-options'

import ChatPage from './chat-page'

export default async function Page() {
  const session = await getServerSession(authOptions)

  return (
    <ChatPage
      endpoint={complete}
      userImage={session?.user?.image}
      userName={session?.user?.name}
    />
  )
}
