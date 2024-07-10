// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'


// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
// import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Ad Revenue project ',
  description:
    'Revenue project'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <IntersectionProvider>
        {children}
          </IntersectionProvider>
        </body>
    </html>
  )
}

export default RootLayout
