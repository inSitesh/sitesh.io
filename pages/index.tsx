import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-12">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold tracking-wide text-3xl md:text-4xl md:pb-1 mb-1 text-black dark:text-white pt-6  ">
              Hi, I'm Sitesh 👋
            </h1>
            <h2 className="text-gray-700 tracking-wide dark:text-gray-200 mb-4">
              #Write{' '}
              <span className="font-semibold underline decoration-pink-500 underline-offset-2">
                #Buidl
              </span>{' '}
              #Ship
            </h2>
            <p className="font-bold text-transparent text-xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-blue-500 to-emerald-700 dark:text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-emerald-500 mb-14">
              Writing essays to make technology, Web 3.0 and complex concepts heard in the simplest
              way.
            </p>
            <div className="flex flex-col divide-y-grey-600 space-y-5 md:space-y-5"></div>
            <h3 className="text-xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 sm:text-2xl md:text-2xl md:leading-12 underline decoration-blue-500 underline-offset-8  pb-2">
              Recent posts
            </h3>
            {/* <p className="text leading-7 divide-grey-200 text-gray-500 dark:text-gray-400 ">
              <h2>{siteMetadata.description}</h2>
            </p> */}
          </div>
        </div>

        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article>
                  <a className="w-full" href={`/blog/${slug}`}>
                    <div className="space-y-1 xl:grid xl:grid-cols-3 xl:space-y-0 xl:items-baseline">
                      <div className="space-y-1 xl:col-span-3">
                        <div className="space-y-0">
                          <div className="flex flex-col justify-between md:flex-row">
                            <h2 className="mb-1 text-xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-sm font-medium leading-6 mb-1 text-gray-500 dark:text-gray-500">
                                <time dateTime={date}>{formatDate(date)}</time>
                              </dd>
                            </dl>
                          </div>
                          <div className=" text-gray-500 max-w-none dark:text-gray-400 leading-normal">
                            {summary}
                          </div>
                        </div>
                        {/* <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div> */}
                      </div>
                      {/* </a> */}
                    </div>
                  </a>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-semibold leading-6 pb-4">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-500 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
