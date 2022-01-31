import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id="4bd89547-9fd3-4b19-a4d2-898508af89a5"
        src="https://umamisitev2.herokuapp.com/umami.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
