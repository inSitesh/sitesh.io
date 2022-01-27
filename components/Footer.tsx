import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-10">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700 pb-14"></ul>

        {/* {all footer links} */}
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">About</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="https://twitter.com/inSitesh">Twitter</Link>
            <Link href="https://github.com/inSitesh">GitHub</Link>
            {/* <Link href="https://www.youtube.com/channel/">YouTube</Link> */}
          </div>
          <div className="flex flex-col space-y-4">
            {/* <Link href="/uses">
              <a className="text-gray-500 hover:text-gray-600 transition">Reccos</a>
            </Link>
            {/* <Link href="/snippets">
              <a className="text-gray-500 hover:text-gray-600 transition">Snippets</a>
            </Link>
            <Link href="/tweets">
              <a className="text-gray-500 hover:text-gray-600 transition">Tweets</a>
            </Link> */}
          </div>
        </div>

        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400 ">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
          {/* <div>{` • `}</div> */}

          {/* <Link href="/">{siteMetadata.title}</Link> */}
        </div>

        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">{`🍁`}</div> */}
      </div>
    </footer>
  )
}
