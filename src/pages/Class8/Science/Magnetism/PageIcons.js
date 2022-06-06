/* import React from 'react'

// CSS Importing
import {
    TreeDiv, ContentImage, NextPageDiv, FloatingBDivClose, ContentTitle, ContentImage3,
    FloatingB, FloatingBDiv
} from './Common.elements'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Icons Importing
import { FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Chapter Info Importing
//import { divArraycum } from './ChapterInfo';
import { VizTreeImages } from './ChapterInfo';
//import TableofContents from "../VizBookTOC";


export const TreeIcon = (PageNumber) => {
    //  Tree Icon states
    const [showtree, setShowTree] = React.useState(false);
    const tree_onClick = () => setShowTree(!showtree);
    return (
        <>
            {
                true
                &&
                <TreeDiv>
                    <CircularProgressbarWithChildren
                        //value={(PageNumber) * 100 / (divArraycum.length)}
                        styles={buildStyles({
                            pathColor: "#80BA4F",
                        })}
                    >
                        <ContentImage onClick={tree_onClick} src="https://firebasestorage.googleapis.com/v0/b/vizuaradelta.appspot.com/o/Images%2FScience%2FClass8%2FChapter%208%20Conservation%20Plants%2Fsprout.png?alt=media&token=e33d6a6a-294c-4214-ab67-ae068c624a33">
                        </ContentImage>
                    </CircularProgressbarWithChildren >
                </TreeDiv>
            }
            {showtree ? (
                <>
                    <NextPageDiv>
                        <FloatingBDivClose width={"50px"} onClick={tree_onClick}>
                            <FaWindowClose size={50}></FaWindowClose>
                        </FloatingBDivClose>

                        {(PageNumber != divArray.length) ?
                            <ContentTitle>
                                Your new VizTree has started to grow!
                            </ContentTitle>
                            : (
                                <ContentTitle>
                                    You have planted a new Viz Tree! Congratulations
                                </ContentTitle>
                            )
                        }
                        <ContentImage3 src="${VizTreeImages[PageNumber-1]}"></ContentImage3>

                    </NextPageDiv>
                </>
            ) : null}
        </>
    )
}

export const TOCIcon = (PageNumber) => {
    // Table of contents opener states
    const [showContent, setShowContent] = React.useState(false);
    const TableOfContentsOpener = () => {
        setShowContent(!showContent);
    };

    return (
        <>
            {

                true &&

                <FloatingB width={"70px"} onClick={TableOfContentsOpener}>
                    {showContent ? (
                        <>
                            <IconContext.Provider
                                value={{ color: 'white' }}>
                                <FaChevronDown size={20}></FaChevronDown>
                            </IconContext.Provider>
                        </>
                    ) : (
                        <>
                            <IconContext.Provider
                                value={{ color: 'white' }}>
                                <FaChevronUp size={20}></FaChevronUp>
                            </IconContext.Provider>
                        </>
                    )}
                </FloatingB>
            }

            {showContent ? (
                <>
                    <FloatingBDiv>
                        <FloatingBDivClose width={"50px"} onClick={TableOfContentsOpener}>
                            <FaWindowClose size={50}></FaWindowClose>
                        </FloatingBDivClose>
                        <TableofContents pageNo={1} />
                    </FloatingBDiv>
                </>
            ) : null}
        </>
    )
}
 */