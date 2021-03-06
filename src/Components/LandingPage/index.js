import React, {useState} from 'react';
import video from '../../Videos/video.mp4';
import {LandingPageContain, LandingBg, VideoBg, LandingContent, LandingH1, LandingP, LandingBtnWrapper, ArrowForward, ArrowRight} from './LandingPageElements';
import {Button} from '../ButtonElement';
import myPDF from '../../Files/Resume.pdf';

const LandingPage = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const downloadFile = () => {
        window.location.href = myPDF;
    }
    return (
        <LandingPageContain id='Home'>
            <LandingBg>
                {/* Video by Pressmaster from Pexels */}
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </LandingBg>
            <LandingContent>
                <LandingH1>Welcome, My Name is Armando Valdez</LandingH1>
                <LandingP>
                    Senior Computer Science Major and Mathematics Minor at Gonzaga University.
                </LandingP>
                <LandingBtnWrapper>
                    <Button onClick={downloadFile} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Download resume {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </LandingBtnWrapper>
            </LandingContent>
        </LandingPageContain>
    );
};

export default LandingPage;
