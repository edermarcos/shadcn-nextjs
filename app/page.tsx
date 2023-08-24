import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <section className='min-h-screen grid place-content-center'>
      <section className='border'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          doloremque reiciendis aliquid eligendi velit sint distinctio veritatis
          quam, pariatur dolores veniam laboriosam unde perspiciatis eaque neque
          dolorum maxime, minus harum!
        </p>

        <div>
          <Button variant={'default'}>default</Button>
          <Button variant={'destructive'}>destructive</Button>
          <Button variant={'ghost'}>ghost</Button>
          <Button variant={'outline'}>outline</Button>
          <Button variant={'link'}>link</Button>
          <Button variant={'secondary'}>secondary</Button>
        </div>

        <div>
          <ModeToggle />
        </div>
      </section>
    </section>
  )
}

export default HomePage
