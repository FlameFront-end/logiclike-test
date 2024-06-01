import { FC } from 'react'

import s from './CourseCard.module.scss'

type CourseCardProps = {
	bgColor: string
	name: string
	image: string
}

const CourseCard: FC<CourseCardProps> = ({ bgColor, name, image }) => {
	return (
		<div className={s.card}>
			<div className={s.imageWrapper} style={{ backgroundColor: bgColor }}>
				<img src={image} alt={`image ${name}`} />
			</div>
			<div className={s.name}>{name}</div>
		</div>
	)
}

export default CourseCard
