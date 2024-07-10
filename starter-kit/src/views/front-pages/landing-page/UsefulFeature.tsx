// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports

// SVG Imports
import Paper from '@assets/svg/front-pages/landing-page/Paper'
import Check from '@assets/svg/front-pages/landing-page/Check'
import User from '@assets/svg/front-pages/landing-page/User'
import LaptopCharging from '@assets/svg/front-pages/landing-page/LaptopCharging'
import Rocket from '@assets/svg/front-pages/landing-page/Rocket'
import Document from '@assets/svg/front-pages/landing-page/Document'

import { useIntersection } from '@/hooks/useIntersection'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Data
const feature = [
  {
    icon: <LaptopCharging color='var(--mui-palette-primary-main)' />,
    title: 'Guaranteed Service',
    description: 'You have 15 days replacement guarantee for our all services.'
  },
  {
    icon: <Rocket color='var(--mui-palette-primary-main)' />,
    title: 'Realistic',
    description: 'Our reviews look natural. Because we are very carefully about it.'
  },
  {
    icon: <Paper color='var(--mui-palette-primary-main)' />,
    title: 'Results Driven',
    description: 'Our service make sure your business thrives'
  },
  {
    icon: <Check color='var(--mui-palette-primary-main)' />,
    title: 'Customer Satisfaction',
    description: 'Our customers really live our services'
  },
  {
    icon: <User color='var(--mui-palette-primary-main)' />,
    title: 'Excellent Support',
    description: 'An easy-to-follow doc with lots of references and code examples.'
  },
  {
    icon: <Document color='var(--mui-palette-primary-main)' />,
    title: 'Well Documented',
    description: 'An easy-to-follow doc with lots of references.'
  }
]

const UsefulFeature = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='features' ref={ref} className='bg-backgroundPaper'>
      <div className={classnames('flex flex-col gap-12 pbs-12 pbe-[100px]', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='Useful Feature' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4' className='text-center'>
                <span className='relative z-[1] font-extrabold'>
                  Everything you need
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>{' '}
                to level up your business
              </Typography>
            </div>
            <Typography className='text-center'>
            Our main goal is providing an online presence to our customers as they deserve.
            </Typography>
          </div>
        </div>
        <div>
          <Grid container spacing={6}>
            {feature.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  {item.icon}
                  <Typography className='mbs-2' variant='h5'>
                    {item.title}
                  </Typography>
                  <Typography className='max-is-[364px] text-center'>{item.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default UsefulFeature
