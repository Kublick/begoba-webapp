import React from 'react'
import ReactPlayer from 'react-player'
import { close } from '../../../images/svg'
import { useCourses } from '../../hooks/useCourses'
import { Lesson } from '../../types/types'
import { LessonList } from './LessonList'

export const Layout = () => {
  const { data } = useCourses()
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className="py-4 text-white bg-udark">
        <div className="container mx-5 ">Titulo del curso</div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/7_23uYADjME"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between py-3 mx-2 border-b border-b-gray-200">
            <h1 className="sticky mx-2">Contenido del Curso</h1>
            <span className="mr-2 text-xs">{close}</span>
          </div>
          <div className="mx-2">
            {Object.values(data).map((item: any) => (
              <LessonList
                key={item.id}
                id={item.id}
                title={item.title}
                lecture={item.lecture}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
