import { Box } from "@mui/material";
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/LAINGUYENVINHPHU_resume.pdf";
import logo from '../img/logo.png';
import { info } from "../info/Info";
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";

const links = [
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Projects',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'0.7rem'}>
                <li>
                    <a href={resume} target="_blank">
                        resumé
                    </a>
                </li>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <Box component={'img'} src={logo} alt={'logo'} padding={'0.5rem'}
                                sx={{
                                    height: 60,
                                    width: 60,
                                    maxHeight: 70,
                                    maxWidth: 70,
                                }} />}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}