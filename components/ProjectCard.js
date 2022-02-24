import Image from 'next/image';

function ProjectCard({ project }) {

    return (<>
        <article className='project-card'>

            <h3 className='project-card__title'>
                {project.title}
            </h3>

            <aside className='project-card__aside shadow'>
                <Image
                    src={project.thumbnail}
                    width={900}
                    height={900}
                    alt='text' />
            </aside>

            <section className='project-card__section flex'>
                <p className='project-card__excerpt'>
                    {project.excerpt}
                </p>
                <ul className='project-card__links'>
                    <li>
                        <a className='project-card__link link' href={project.previewLink} target='_blank' rel='noreferrer'>
                            Live Preview
                        </a>
                    </li>
                    <li>
                        <a className='project-card__link link' href={project.sourceLink} target='_blank' rel='noreferrer'>
                            Source
                        </a>
                    </li>
                </ul>
            </section>
            
        </article>
    </>)
}

export default ProjectCard;