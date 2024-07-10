// React Imports
import { useContext } from 'react'

// Context Imports
import { IntersectionContext } from '@/contexts/intersectionContext'

export const useIntersection = () => {
  // Hooks
  const context = useContext(IntersectionContext)
  console.log('Contxt', context)
  if (!context) {
    console.warn('useIntersection must be used within a IntersectionProvider')
  }

  return context
}
