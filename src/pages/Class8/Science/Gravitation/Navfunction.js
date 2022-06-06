import React from 'react'
import {divArraycum} from "./ChapterInfo";
import {PageLinks} from "./ChapterInfo";
import {TextTips} from "./ChapterInfo";

import { RowNav, HomeLink,MobileLink } from './Common.elements';
import Pagebarfunction from "./Pagebarfunction"


const value = (PageId, PageNumber) => {

        if (PageId == PageNumber + 1) {
            return divArraycum[PageNumber - 1]
        }

        else {
            return 0;
        }

}

export const NavfunctionTop = (PageNumber) => {
    var PagebarTop = [];

    PagebarTop.push(<Pagebarfunction number={1} link="${PageLinks[1]}"
    current={PageNumber == 1} 
    enabled={ProgressArray[0] >= 0 * parseInt(parseFloat(unitProgress[0]))} 
    text={"TextTips[0]"} />)

    for (var i = 0; i <TextTips.length-1; i++) {
        PagebarTop.push(<Pagebarfunction number={1} link="${PageLinks[i+1]}"
        current={PageNumber == i+2} 
        enabled={ProgressArray[0] >= divArraycum[i] * parseInt(parseFloat(unitProgress[0]))} 
        text={"TextTips[i+1]"} />);
      }

    return (
        <RowNav>
            <HomeLink to="${PageLinks[0]}"> <FcHome size={42} /></HomeLink>
            {PagebarTop}
        </RowNav>
    )
}

export const NavfunctionBottom = (PageNumber) => {
    var PagebarBottom = [];

    PagebarTop.push(<Pagebarfunction number={1} link="${PageLinks[1]}"
    current={PageNumber == 1} 
    enabled={ProgressArray[0] >= 0 * parseInt(parseFloat(unitProgress[0]))} 
    text={"TextTips[0]"} />)

    for (var i = 0; i <TextTips.length-1; i++) {
        PagebarTop.push(<Pagebarfunction number={1} link="${PageLinks[i+1]}"
        current={PageNumber == i+2} 
        showNextId={value(i+2, PageNumber)}
        enabled={ProgressArray[0] >= divArraycum[i] * parseInt(parseFloat(unitProgress[0])) || i+2==PageNumber}  
        text={"TextTips[i+1]"} />);
      }

    return (
        <RowNav>
            <MobileLink to="${PageLinks[${PageNumber-1}]}"> <FcPrevious size={45} /></MobileLink>
            <HomeLink to="${PageLinks[0]}"> <FcHome size={42} /></HomeLink>
            {PagebarBottom}
            <MobileLink onClick={() => {
                showNext(divArraycum[divArraycum.length - 1])
            }} to="${PageLinks[${PageNumber+1}]}"> <FcNext size={45} /></MobileLink>
        </RowNav>
    )
}


