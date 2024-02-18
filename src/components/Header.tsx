import { ReactNode } from 'react'

interface HeaderProps {
    children: ReactNode
    image: {
        src: string
        alt: string
    }
}

export const Header = ({ children, image }: HeaderProps) => {
    return (
        <header>
            <img {...image} />
            {children}
        </header>
    )
}