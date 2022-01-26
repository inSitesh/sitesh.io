import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="max-w-3xl px-6 mx-auto sm:px-6 xl:max-w-4xl xl:px-14">{children}</div>
}
