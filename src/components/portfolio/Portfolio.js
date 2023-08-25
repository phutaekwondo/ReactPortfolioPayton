import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import { PhotoAlbum } from 'react-photo-album';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Portfolio() {

    // get instagram url from info
    const instagramUrl = info.socials.find(social => social.label === 'instagram').link;

    //get all images names from art_folder
    const art_path = '../../img/art';
    const images = require.context('../../img/art', true);
    const imagesName = images.keys().map((item, index) => {
        return art_path + '/' + item.replace('./', '');
    });

    const PhotoAlbumFeed = (imagePath) => { 
        //load image from imagePath
    }

    const photos = imagesName.map(src => PhotoAlbumFeed(src));


    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} playable={project.playable} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};