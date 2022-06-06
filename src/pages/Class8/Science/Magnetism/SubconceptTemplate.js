import React from 'react';
import axios from 'axios';
import {
    ContentContainer, ContentTitle, ContentText, ContentVideo, ContentText2,
    PopupOrSkip, PopupSkip, ContentImage
} from './Common.elements';
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ActiveChapterId } from './ChapterInfo';
import { divArraycum } from './ChapterInfo';
import { db } from "./config";
import { collection, getDocs, onSnapshot, query, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';

import { PageContents } from './ChapterInfo';


const SubconceptTemplate = (props) => {

    const PageNumber = props.PageNumber;
    const SubconceptNumber = props.SubconceptNumber;
    const unitProgress = 100 / divArraycum[divArraycum.length - 1];

    console.log(PageContents)


    const [PageContent, setPageContent] = useState(() => {
        return JSON.parse(localStorage.getItem('pagecontentsstored')) || PageContents[PageNumber-1];
      });


    useEffect(() => {
        localStorage.setItem('pagecontentsstored', JSON.stringify(PageContent));
      }, [PageContent]);

/*     useEffect(() => {
        const items = JSON.parse(localStorage.getItem('pagecontentsstored'));
        if (items) {
            setPageContent(items);
        }
    }, [PageContent]); */


    console.log(PageContent)



    const [divId, setDivId] = React.useState(null);

    const showNext = (id_number) => {
        setDivId(id_number);
        const Chapter1VizBookDetails = {
            ActiveChapterId: ActiveChapterId[0],
            divNo: (PageNumber == 1 ? id_number : id_number + divArraycum[PageNumber - 1]),
            unitProgress: unitProgress[0]
        };

        axios
            .post('/user/updateVizBookProgress', Chapter1VizBookDetails)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))

    }


    if (props.type == 1) {
        return (
            (divId > (SubconceptNumber - 1)) ?

                null : (

                    <>

                        <ContentContainer id="${SubconceptNumber}">
                            <ContentTitle>{PageContent[`Subconcept${SubconceptNumber}`][1]}</ContentTitle>

                            <ContentText>
                                {PageContent[`Subconcept${SubconceptNumber}`][2]}
                            </ContentText>

                            <ContentVideo controls autoplay key={PageContent[`Subconcept${SubconceptNumber}`][2]}>
                                <source src={PageContent[`Subconcept${SubconceptNumber}`][4]} type="video/mp4" />
                            </ContentVideo>

                            <ContentText2>
                                ✨{PageContent[`Subconcept${SubconceptNumber}`][5]}
                            </ContentText2>
                        </ContentContainer>
                        <PopupOrSkip>
                            {/* <PopupButton onClick={popup}>Pop quiz</PopupButton> */}
                            <Link to="${SubconceptNumber+1}" spy={true} smooth={true} >
                                <PopupSkip onClick={() => {
                                    showNext(SubconceptNumber)
                                }}>
                                    Continue <AiOutlineArrowDown></AiOutlineArrowDown>
                                </PopupSkip>
                            </Link>
                        </PopupOrSkip>

                    </>
                )

        )
    }

    else if (props.type == 2) {
        return (
            !(divId > (SubconceptNumber - 1)) ?

                null : (

                    <>
                        <ContentContainer id="${SubconceptNumber}">
                            <ContentTitle>{PageContent[`Subconcept${SubconceptNumber}`][1]}</ContentTitle>

                            <ContentText>
                                {PageContent[`Subconcept${SubconceptNumber}`][2]}
                            </ContentText>

                            <ContentImage src={PageContent[`Subconcept${SubconceptNumber}`][3]}>
                            </ContentImage>

                            <ContentText2>
                                ✨{PageContent[`Subconcept${SubconceptNumber}`][5]}
                            </ContentText2>

                        </ContentContainer>
                        <PopupOrSkip>
                            {/* <PopupButton onClick={popup}>Pop quiz</PopupButton> */}
                            <Link to="${SubconceptNumber+1}" spy={true} smooth={true} >
                                <PopupSkip onClick={() => {
                                    showNext(SubconceptNumber)
                                }}>
                                    Continue <AiOutlineArrowDown></AiOutlineArrowDown>
                                </PopupSkip>
                            </Link>
                        </PopupOrSkip>
                    </>
                )

        )
    }
}

export default SubconceptTemplate

