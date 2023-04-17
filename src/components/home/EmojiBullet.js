import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    let detectedDarkMode = true;
    try
    {
        detectedDarkMode = eval(localStorage.getItem('darkMode'));
    }
    catch(e)
    {
        console.log(e);
    }


    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}
            </Box>
            <Box component={'span'} fontWeight={700} fontSize={'1rem'}
                style={
                    detectedDarkMode?
                    {
                        WebkitTextStroke: '0.3px #000000',
                        WebkitTextFillColor: '#ffffff',
                    }
                    :
                    {
                        WebkitTextStroke: '0.3px #ffffff',
                        WebkitTextFillColor: '#000000',
                    }
                }>
                {text}
            </Box>
        </Box>
    );
}

export default EmojiBullet;