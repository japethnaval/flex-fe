import axiosClient from '@util/axios'
import { AddStudentFormData } from 'pages/dashboard/schemas/add-student.schema'
import { RemoveStudentFormData } from 'pages/dashboard/schemas/remove-student.schema'

export const removeStudent = async (data?: RemoveStudentFormData) => {
  const result = await axiosClient.post('/remove-student', {
    data,
  })

  return result.data
}

export const addStudent = async (data?: AddStudentFormData) => {
  const newStudent = await axiosClient.post('/add-student', {
    data,
  })
  return newStudent.data
}

export const students = async () => {
  const studentsRes = await axiosClient.get('/students')
  return studentsRes.data
}
