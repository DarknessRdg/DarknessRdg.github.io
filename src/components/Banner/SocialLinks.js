import React from 'react'

const SOCIAL = [
    {icon: 'fab fa-github', link: 'https://github.com/DarknessRdg/'},
    {icon: 'fab fa-facebook', link: 'https://www.facebook.com/luan.dasilva.925'},
    {icon: 'fab fa-instagram', link: 'https://www.instagram.com/luan_26/'},
    {icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/luan-rodrigues-dev/'}
]

export default () => {
    return <div className="links-content">
        {SOCIAL.map(it => <span>
                <a href={it.link} className="white-text" target="_blank">
                    <i className={it.icon} />
                </a>
            </span>
        )}
    </div>
}
