import { Lecture } from '../types/types'

type LectureResult = {
  totalTime: number
  completedLectures: number
  totalLectures: number
}

export const useCountLectures = (lecture: Lecture[]): LectureResult => {
  const getTotalTime = (lecture: Lecture[]) => {
    return lecture.reduce((acc, curr) => {
      return acc + curr.duration
    }, 0)
  }
  const totalTime = Math.round(getTotalTime(lecture) / 60)

  const getCompletedLectures = (lecture: Lecture[]) => {
    return lecture.reduce((acc, curr) => {
      return acc + (curr.completed ? 1 : 0)
    }, 0)
  }

  const completedLectures = getCompletedLectures(lecture)

  const getTotalLectures = (lecture: Lecture[]) => {
    return lecture.length
  }

  const totalLectures = Math.round(getTotalLectures(lecture) / 60)

  return {
    totalTime,
    completedLectures,
    totalLectures,
  }
}
