import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PostContainer({ children }: Props) {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-4 xl:max-w-3xl xl:px-6 xl:px-14">{children}</div>
  )
}
