import { FC, useEffect, useState } from 'react'

import CourseCard from '../../components/CourseCard/CourseCard.tsx'

import { Nav } from '../../components'
import { CoursesService } from '../../services/courses.service.ts'

import s from './HomePage.module.scss'

const HomePage: FC = () => {
	const [courses, setCourses] = useState<Course[]>([])
	const [active, setActive] = useState<number>(0)

	useEffect(() => {
		CoursesService.getCourses().then(r => setCourses(r.data))
	}, [])

	return (
		<div className={s.wrapper}>
			<Nav courses={courses} active={active} setActive={setActive} />
			<div className={s.list}>
				{courses.map(item => (
					<CourseCard
						key={item.id}
						bgColor={item.bgColor}
						name={item.name}
						image={item.image}
					/>
				))}
			</div>
		</div>
	)
}

export default HomePage
