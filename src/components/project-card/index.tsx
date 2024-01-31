import Image from "next/image";
import styles from "./styles.module.scss";
import LinkButton from "../link-button";
import Link from 'next/link';



interface ProjectCardProps {
	title: string,
	src: string,
	url: string,
	techStack: string[],
	description: string
}

export default function ProjectCard(props: ProjectCardProps) {

	const { title, src, techStack, url, description } = props;
	return (
		<div className={styles['card-container']}>
			<div className={styles['card']}>
				<div className={styles['project-image']}>
					<Image alt={'project_image'} src={src} className="object-cover" width={350} height={350} priority={true}/>
				</div>
				<p className={'text-xl text-zinc-900 pb-5'}>&gt; {title}</p>
				<p className="text-amber-900">- {description}</p>
			</div>
			<div className={styles['link-container']}>
				<Link href={url} className={styles["link"]}>
					<LinkButton lable={"To Site"}/>
				</Link>
			</div>
		</div>
	)
}