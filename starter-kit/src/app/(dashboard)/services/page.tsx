import { PricingPlanType } from '@/types/pages/pricingTypes'
import PricingWrapper from '@/views/front-pages/pricing'

// Data Imports
import { getPricingData } from '@/app/server/actions'

const ServicesPage = async () => {
   // Vars
   const data = await getPricingData()

  return <PricingWrapper data={data}/>
}

export default ServicesPage