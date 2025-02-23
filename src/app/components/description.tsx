'use client'
import { FC, useState } from 'react'
import Icard from './imageCards'

interface desprops {
  link?: string
  email?: string
  number?: number
  name?: string
  position?: string
  education?: string
  experience?: string
  teaching?: string
  research?: string
  publication?: string
  supervision?: string
  responsibility?: string
  anyother?: string
}

const Description: FC<desprops> = ({
  name,
  position,
  education,
  experience,
  publication,
  anyother,
}) => {
  const [selectedCell, setSelectedCell] = useState<number | null>(null)

  const handleCellClick = (index: number) => {
    setSelectedCell(index)
  }

  return (
    <div className='grid h-6/10 w-7/10 grid-cols-[30%,70%] gap-0 rounded-lg border border-none bg-white shadow-md ring-offset-2'>
      <Icard link='#' number={218718112} email='jhu.edu.co.in' />
      <div className='flex flex-col items-start bg-gray-200 p-4'>
        <div className='mb-2 text-3xl font-bold text-iip'>{name}</div>
        <div className='mb-12 text-xl text-iip'>{position}</div>
        <table className='w-full table-auto border-none'>
          <tr className='border-none'>
            {['Education', 'Experience', 'Research & Publications', 'More'].map((text, index) => (
              <td
                key={index}
                className={`box-border w-1/4 cursor-pointer border-iip p-[0.4rem] text-center font-sans ${
                  selectedCell === index
                    ? 'bg-iip text-white underline decoration-white'
                    : 'bg-white text-iip transition-all hover:border-b-[0.20rem] hover:p-[0.45rem]'
                } ${index === 3 ? 'border-r-0 hover:border-b-4' : 'border-r-2'} ${index === 0 ? 'rounded-l-md' : ''} ${
                  index === 3 ? 'rounded-r-md' : ''
                }`}
                onClick={() => handleCellClick(index)}
              >
                {text}
              </td>
            ))}
          </tr>
        </table>
        <div className='content wrap invisible w-full overflow-y-auto bg-white text-xs text-black'>
          {selectedCell === 0 && <div className='text-sm text-black'>{education}</div>}
          {selectedCell === 1 && <div className='text-sm text-black'>{experience}</div>}
          {selectedCell === 2 && <div className='text-sm text-black'>{publication}</div>}
          {selectedCell === 3 && <div className='text-sm text-black'>{anyother}</div>}
        </div>
      </div>
    </div>
  )
}

export default Description
