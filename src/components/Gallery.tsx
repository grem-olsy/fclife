import { useState } from 'react'
import './Gallery.css'

interface Props {
	images: string[]
	alt: string
}

export default function Gallery({ images, alt }: Props) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [lightboxOpen, setLightboxOpen] = useState(false)

	return (
		<>
			{/* Основная галерея */}
			<div className='gallery'>
				<div className='gallery-main'>
					<img
						src={images[activeIndex]}
						alt={`${alt} — фото ${activeIndex + 1}`}
						onClick={() => setLightboxOpen(true)}
					/>
				</div>
				{images.length > 1 && (
					<div className='gallery-thumbs'>
						{images.map((img, i) => (
							<img
								key={i}
								src={img}
								alt={`${alt} — миниатюра ${i + 1}`}
								className={i === activeIndex ? 'active' : ''}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
			</div>

			{/* Лайтбокс — увеличенное фото при клике */}
			{lightboxOpen && (
				<div className='lightbox' onClick={() => setLightboxOpen(false)}>
					<div
						className='lightbox-content'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className='lightbox-close'
							onClick={() => setLightboxOpen(false)}
						>
							×
						</button>
						<button
							className='lightbox-prev'
							onClick={() =>
								setActiveIndex((prev) =>
									prev > 0 ? prev - 1 : images.length - 1,
								)
							}
						>
							‹
						</button>
						<img
							src={images[activeIndex]}
							alt={`${alt} — фото ${activeIndex + 1}`}
						/>
						<button
							className='lightbox-next'
							onClick={() =>
								setActiveIndex((prev) =>
									prev < images.length - 1 ? prev + 1 : 0,
								)
							}
						>
							›
						</button>
					</div>
				</div>
			)}
		</>
	)
}
