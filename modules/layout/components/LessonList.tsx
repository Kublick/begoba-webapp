import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { PlayIcon } from '@heroicons/react/solid'
import { Lesson, Lecture } from '../../types/types'
import { useCountLectures } from '../../hooks/useCountLectures'

export const LessonList = ({ id, title, lecture }: Lesson): JSX.Element => {
  const { totalTime, completedLectures, totalLectures } =
    useCountLectures(lecture)

  return (
    <div>
      <Disclosure>
        {({ open }): JSX.Element => (
          <>
            <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <Disclosure.Button className="w-full text-sm font-medium text-left text-gray-900 ">
                <div className="flex justify-between w-full">
                  {title}
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-500`}
                  />
                </div>
                <span className="text-xs font-thin">
                  {completedLectures} / {totalLectures} | {totalTime} min
                </span>
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="px-4 text-sm text-gray-500">
              {lecture.map((lect: Lecture, i: number) => (
                <ul key={i} className="cursor-pointer">
                  <li
                    className="flex items-center gap-2 text-sm"
                    onClick={() => console.log(lect.id)}
                  >
                    <input
                      type="checkbox"
                      className="border-2 focus:outline-hidden focus:ring-transparent "
                    />
                    <div className="px-2 py-2">
                      <span>{i + 1}. </span>
                      <span className="font-thin text-gray-900 ">
                        {lect.title}
                      </span>

                      <div className="flex items-center gap-1 mt-1 text-xs font-thin">
                        <PlayIcon className="w-4 h-4" />
                        <span className="text-gray-900">
                          {Math.round(lect.duration / 60)}min
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
