import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import { PhotoAlbum } from 'react-photo-album';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Portfolio() {

    // get instagram url from info
    const instagramUrl = info.socials.find(social => social.label === 'instagram').link;
    console.log(instagramUrl);

    const PhotoAlbumFeed = (URL) => { 
        const img = new Image();
        img.src = URL;
        return {
            src: URL,
            width: img.naturalWidth,
            height: img.naturalHeight,
        }
    }

    const srcs = [
            'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/273660814_1884030088447317_3525661937518621648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Wrno80miSxcAX-ezLpA&_nc_oc=AQnv-R5blb0Du0pMveH9687kxMYqLYc_3Ca6HnoHVTi9p0DbTTguw2RabY2EP6Aj6jc&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfAFjLnNCDJRDWwDfa2-oFIJqg4XljYeTahuQyP5hi25zg&oe=6442BCF3',
            'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/273676043_1884030081780651_4648750466918319646_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=_PjDfHQeODEAX9tvCps&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfBicYacNglrjHsFKwqcKHbpoK6mtB-GaB4KCUU5vcnb4A&oe=64425282',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273619255_1884030121780647_492328552400340491_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=aCntICrGC5YAX_2w5NQ&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAm7YqspqEyZQRJZT0Z57-01TNgrOTfYVkBDir_cmw_Yw&oe=644260F2',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273629384_1884030058447320_2673501987206232339_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ajMpxGFpWh4AX8F2nd2&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDFuYt-EcAbswD0hhSjm8hJ4y9Dp-LhzORKIKEt3VtSzA&oe=64421C79',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273686276_1884030038447322_1160947984763383776_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=P-JMhkmdUiQAX_jfMsf&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBKyZ5MLVvEg6vmQTUrJ9kF5Xb-zdfkeoRwh6fGAHgyqw&oe=6442F8B1',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273622738_1884029978447328_5676514526804409737_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=EsUjlW-JvGkAX-lEw-E&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAlLK-as8p6cqVrmnFny6K6gs1Leu60m0vXH4U9kITTMw&oe=6441E919',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273682290_1884029995113993_7829677994863928523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=BETe1-beF9MAX9InzS4&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBzJgXRadGRym7WH-DS62ct0BhxJNrr0c1xdNQO6kOFqQ&oe=64427D27',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273591087_1884029931780666_7433652003614243387_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0Qoxaf-1AlkAX_2_s7Q&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBZ25DeToUs1llnpoMUYbNCy1pEYxiwj7jTHqtdRRi-Kg&oe=644219EB',
            'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/273598757_1884030125113980_8838587320543072611_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=06aK10E_qYsAX_HZ58f&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDwi24PdahcXw9hFokVUcROhNxXy8o6v_iQb8-HLXXw2Q&oe=644317F2',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/273917449_1887054544811538_7648652331638005695_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wgg6cxUCD0oAX_Fk-WT&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDgYN9Nq_ysJOziNalJSRIYvgyjzYNQ1q2a3jnvjGOJRQ&oe=64417D1C',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-9/200117375_1705726982944296_6491342507019202090_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OvLeKdfbob4AX-G3wC5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfD6wjytZ6Xw8nIvP42KaNqmedISddfgd4JEo9wAr5qJRQ&oe=6464D52D',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-9/186540414_1685733474943647_3690749928161744388_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=epj2SN16YHEAX-6M7rV&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBXR1IStOLA7WBBc_p7hQcfJzCbollC-iA8_QOR7NsoMg&oe=6464FD42',
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-9/66339951_1122141644636169_2616624450455470080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fr9XZjjGuccAX86_ltw&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAYTI1uUo-X5u5uDWSs1KttXp319UjM6mPq_4v0QU6tgA&oe=6464CB05',
    ]

    //photos contain list of PhotoAlbumFeed(src) for src in srcs
    const photos = srcs.map(src => PhotoAlbumFeed(src));


    return (
        <Box>
            {/* title for 'CODING' Section at the center width of page with underline */}
            {/* background color with haft transparent white */}

            <Box sx={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(255,255,255,0.5)'}}>
                <h2>CODING</h2>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            <Box sx={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(255,255,255,0.5)'}}>
                <h2>CODING</h2>
                <h1>ARTS</h1>
                {/* link to my instagram */}
                <a href={instagramUrl}>
                    <InstagramIcon sx={{fontSize: 50}}/>
                </a>
            </Box>
            <PhotoAlbum layout='rows' photos={photos} />
        </Box>
    );
};