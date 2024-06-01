import { FC, useEffect, useState } from 'react'

import CourseCard from '../../components/CourseCard/CourseCard.tsx'

import { Nav } from '../../components'
import { CoursesService } from '../../services/courses.service.ts'

import s from './HomePage.module.scss'

const HomePage: FC = () => {
	const [allCourses, setAllCourses] = useState<Course[]>([])
	const [activeTag, setActiveTag] = useState<string>('Головоломки')
	const [filterCourses, setFilterCourses] = useState<Course[]>([])

	useEffect(() => {
		CoursesService.getCourses().then(r => setAllCourses(r.data))
	}, [])

	useEffect(() => {
		const filteredArray = allCourses.filter(course =>
			course.tags.includes(activeTag)
		)
		setFilterCourses(filteredArray)
	}, [activeTag])

	return (
		<div className={s.wrapper}>
			<Nav
				courses={allCourses}
				activeTag={activeTag}
				setActiveTag={setActiveTag}
			/>
			<div className={s.list}>
				{filterCourses.map(item => (
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
