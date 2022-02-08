export type Course = {
  id: string
  title: string
  lecture: Lecture[]
}

export type Lecture = {
  id: string
  title: string
  duration: number
  completed: boolean
  url: string
}
