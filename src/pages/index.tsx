import { Button } from '@/components/ui'
import clsx from 'clsx'

export default function Home() {
  return (
    <div>
      <Button>Hello, World!</Button>
      <p className={clsx('font-bold')}>Hello,World!</p>
    </div>
  )
}
