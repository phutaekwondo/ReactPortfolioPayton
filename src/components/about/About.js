import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box, Icon} from "@mui/material";
import {info} from "../../info/Info";
import { Margin, SubtitlesOutlined } from '@mui/icons-material';


export default function About() {
    const firstName = info.firstName.toLowerCase()
    const pastelColors = [
        '#FFB3BA',
        '#FFDFBA',
        '#FFFFBA',
        '#Baffc9',
        '#BAE1FF',
        '#FFBAF3'
    ]

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cat
                about {firstName} </p>
            <p><span style={{color: info.baseColor}}>about {firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}><strong> Proficient With</strong></p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
                <p style={{color: info.baseColor}}><strong> Exposed To</strong></p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{info.lastName.toLowerCase()} $</span> cd
                experience</p>
            <p><span style={{color: info.baseColor}}>experience <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.experiences.map((experience, index) => (
                    <li key={index}>
                        <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}>
                            <Box mr={'1rem'} style={{color: '#000000'}} fontSize={'1.2rem'}>&#x1F935; <strong>{experience.position}</strong></Box>
                        </Box>
                        <Box sx={{backgroundColor: '#0e151a'}} p={'0.5rem'} borderRadius={'0 0 0.5rem 0.5rem'}>
                            <Box mr={'1rem'} fontSize={'1rem'}>&#x1F3E2; <strong>{experience.company}</strong></Box>
                            <Box mr={'1rem'} fontSize={'1rem'}>&#x1F313; {experience.startDate} - {experience.endDate}</Box>
                            <Box mr={'1rem'} fontSize={'1rem'}>&#x1F4BB; {experience.describe}</Box>
                        </Box>
                    </li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={experienceText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}