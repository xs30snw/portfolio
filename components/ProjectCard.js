import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import { SiGithub as IconGithub } from 'react-icons/si';

function ProjectCard({ project }) {
    const { t } = useTranslation('projects');

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
                            {t('project-card__link')}
                        </a>
                    </li>
                    <li>
                        <a href={project.sourceLink} target='_blank' className='project-card__link-github' rel="noreferrer">
                            <IconGithub role='img' aria-label='GitHub' />
                        </a>
                    </li>
                </ul>
            </section>
            
        </article>
    </>)
}

export default ProjectCard;