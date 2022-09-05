import React from 'react'
import Timeline from '../components/experience/Timeline'

function Experience() {
  return (
    <div className="py-[5rem]">
      <h1 className="font-kaushan text-3xl sm:text-5xl font-bold mb-10 sm:mb-20 text-center">
        Experience
      </h1>
      <div className="mx-auto max-w-[1120px]">
        <Timeline />
      </div>
    </div>
  )
}

export default Experience