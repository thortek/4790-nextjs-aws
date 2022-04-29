import { Amplify, AuthModeStrategyType } from 'aws-amplify'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import config from '../aws-exports'
import { Authenticator, AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import '../styles/globals.css'

Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
})

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    name: {
      placeholder: 'First Name',
      order: 2,
    },
    family_name: {
      placeholder: 'Last Name',
      order: 3,
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Authenticator variation="modal" formFields={formFields}>
        {({ signOut, user }) => (
          <>
            <ResponsiveAppBar user={user} signOut={signOut} />
            <Component {...pageProps} />
          </>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}

export default MyApp
