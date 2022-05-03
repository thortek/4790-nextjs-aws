import Head from 'next/head'
import { useAuthenticator } from '@aws-amplify/ui-react'


export default function Home() {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(user)

  return (
    <div>
      <Head>
        <title>Movie Browser</title>
      </Head>

      <main>
        <h1>Welcome to my Next.js App {user.attributes.name} {user.attributes.family_name} of {user.attributes.email}!</h1>
      </main>
    </div>
  )
}