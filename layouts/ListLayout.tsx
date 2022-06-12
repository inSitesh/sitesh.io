import Link from '@/components/Link'
// import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'
interface Props {
  posts: PostFrontMatter[]
  title: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div>
        <div className="pt-6 pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold pb-1 leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-l">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Find something new..."
              className="block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-xl dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <li key={slug} className="py-4">
                <a className="w-full" href={`/blog/${slug}`}>
                  <article>
                    <div className="space-y-1 xl:col-span-3">
                      <div className="flex flex-col justify-between md:flex-row">
                        <h3 className="mb-1 text-xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h3>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-500">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl>
                        {/* <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div> */}
                      </div>
                      <div className="text-gray-500 max-w-none dark:text-gray-400 leading-normal">
                        {summary}
                      </div>
                    </div>
                  </article>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
