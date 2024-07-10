// export default function Page() {
//   return <h1>Home page! for Demo</h1>
// }
// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LandingPage = () => {
  // Vars
  const mode = getServerMode()

  return <LandingPageWrapper mode={mode} />
}

export default LandingPage

// export default function Page() {
//   return <h1>Home page!</h1>
// }
