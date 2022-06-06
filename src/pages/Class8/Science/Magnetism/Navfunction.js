import React from 'react';
import { useState, useEffect } from 'react';
import { TextTips, divArraycum } from './ChapterInfo';
import { PageLinks } from './ChapterInfo';
import { RowNav, HomeLink, MobileLink } from './Common.elements';
import Pagebarfunction from "./Pagebarfunction";
import { FcHome, FcPrevious, FcNext } from 'react-icons/fc';
import { ActiveChapterId } from './ChapterInfo';
import axios from 'axios';


const Navfunction = (props) => {

    const value = (PageId, PageNumber) => {

        if (PageId == PageNumber + 1) {
            return divArraycumulative[PageNumber - 1]
        }

        else {
            return 0;
        }

    }

    const PageNumber = props.PageNumber;

    React.useEffect(() => {
        axios
            .get(`/userprogress`)
            .then((res) => {
                console.log(res.data);
                setProgressArray(res.data[ActiveChapterId]);
                console.log(ProgressArray);
            })
            .catch((err) => console.log(err));
    }, []);


    const [ProgressArray, setProgressArray] = React.useState([0, 0]);

    const [PageTextTips, setPageTextTips] = useState(() => {
        return JSON.parse(localStorage.getItem('PageTextTips')) || TextTips;
    });


    const [divArraycumulative, setdivArraycumulative] = useState(() => {
        return JSON.parse(localStorage.getItem('divArraycumulative')) || divArraycum;
    });

    useEffect(() => {
        localStorage.setItem('PageTextTips', JSON.stringify(PageTextTips));
    }, [PageTextTips]);


    useEffect(() => {
        localStorage.setItem('divArraycumulative', JSON.stringify(divArraycumulative));
    }, [divArraycumulative]);

    const UnitProgress = 100 / divArraycumulative[0];

    console.log(PageTextTips)

    
    var PagebarTop = [];
    var PagebarBottom = [];
    PagebarTop.push(<Pagebarfunction number={1} link={"/"}
        current={PageNumber === 1}
        enabled={ProgressArray[0] >= 0 * UnitProgress}
        text={`${PageTextTips[0]}`} key={0} />)

    for (var i = 0; i < 4; i++) {
        PagebarTop.push(<Pagebarfunction number={i + 2} link={"/"}
            current={PageNumber === i + 2}
            enabled={ProgressArray[0] >= divArraycumulative[0] * UnitProgress}
            text={`${PageTextTips[0]}`} key={i} />);
    }

    PagebarBottom.push(<Pagebarfunction number={1} link={"/"}
        current={PageNumber === 1}
        enabled={ProgressArray[0] >= 0 * UnitProgress}
        text={`${PageTextTips[0]}`} key={0} />)

    for (var i = 0; i < 4; i++) {
        PagebarBottom.push(<Pagebarfunction number={i + 2} link={"/"}
            current={PageNumber === i + 2}
            showNextId={value(i + 2, PageNumber)}
            enabled={ProgressArray[0] >= divArraycumulative[0] * UnitProgress || i + 1 == PageNumber}
            text={`${PageTextTips[0]}`} key={i} />);
    }

    console.log(TextTips)


    if (props.type == "Top") {
        return (
            <RowNav>
            <HomeLink to="/"> <FcHome size={42} /></HomeLink>
            {PagebarTop}

        </RowNav>
        )
    }

    else if (props.type == "Bottom") {
        return (
            <RowNav>
            <HomeLink to="/"> <FcHome size={42} /></HomeLink>
            {PagebarBottom}

        </RowNav>
        )

    }

}

export default Navfunction

