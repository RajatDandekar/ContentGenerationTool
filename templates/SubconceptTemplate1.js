import React from 'react';
import axios from 'axios';
import {
    ContentContainer, ContentTitle, ContentText, ContentVideo, ContentText2,
    PopupOrSkip, PopupSkip
} from '../ContentGeneration/Common.elements';
import AiOutlineArrowDown from "react-icons/ai"

import { ActiveChapterId } from '../ContentGeneration/ChapterInfo';
import { unitProgress } from '../ContentGeneration/ChapterInfo';



const SubconceptTemplate1 = (props) => {

    const PageNumber = props.PageNumber;
    const SubconceptNumber = props.SubconceptNumber

    /* Tracks Current DivId of the user */

    const [divId, setDivId] = React.useState(null)

    /* Update VizBook Progress */

    const showNext = (id_number) => {
        setDivId(id_number);
        const Chapter1VizBookDetails = {
            ActiveChapterId: ActiveChapterId[0],
            divNo: id_number + divArraycum[PageNumber - 1],
            unitProgress: unitProgress[0]
        };

        axios
            .post('/user/updateVizBookProgress', Chapter1VizBookDetails)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))

    }


    React.useEffect(() => {
        axios
            .get(`/vizcontent/${ActiveChapterId[0]}/Pages/Page${PageNumber}`)
            .then((res) => {
                console.log(res.data)
                setVizContent(res.data)
                console.log(VizContent)

            })
            .catch((err) => console.log(err))
    }, [])


    const [VizContent, setVizContent] = React.useState(null);

    if (props.type == 1) {
        return (
            !(divId > (SubconceptNumber - 1)) ?

                null : (

                    <>
                        <ContentContainer id="${SubconceptNumber}">
                            <ContentTitle>{VizContent[`Subconcept${SubconceptNumber}`][1]}</ContentTitle>

                            <ContentText>
                                {VizContent[`Subconcept${SubconceptNumber}`][2]}
                            </ContentText>

                            <ContentVideo controls autoplay key={VizContent[`Subconcept${SubconceptNumber}`][2]}>
                                <source src={VizContent[`Subconcept${SubconceptNumber}`][4]} type="video/mp4" />
                            </ContentVideo>

                            <ContentText2>
                                ✨{VizContent[`Subconcept${SubconceptNumber}`][5]}
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
                            <ContentTitle>{VizContent[`Subconcept${SubconceptNumber}`][1]}</ContentTitle>

                            <ContentText>
                                {VizContent[`Subconcept${SubconceptNumber}`][2]}
                            </ContentText>

                            <ContentImage src={VizContent[`Subconcept${SubconceptNumber}`][3]}>
                            </ContentImage>

                            <ContentText2>
                                ✨{VizContent[`Subconcept${SubconceptNumber}`][5]}
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

export default SubconceptTemplate1

