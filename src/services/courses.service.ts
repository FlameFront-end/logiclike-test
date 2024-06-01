import axios from 'axios'

export const CoursesService = {
	async getCourses() {
		return await axios.get<Course[]>('https://logiclike.com/docs/courses.json')
	}
}
