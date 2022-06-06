import React from "react";
import {
  ContentTitle,
  UnStyledLink,
  UnStyledLinkLocked,
} from "./VizBookTOCelements";

import axios from 'axios'

import { FaLock } from "react-icons/fa";
import { ButtonCommon,ButtonCommonLocked } from "./VizBookTOCelements";

export default function TableofContents(props) {
  const ActiveChapterId = ["8S8"];
  const unitProgress = ["33"];

  axios
    .get(`/userprogress`)
    .then((res) => {
      console.log(res.data)
      setProgressArray(res.data[ActiveChapterId[0]])
      console.log(ProgressArray)
  
    })
    .catch((err) => console.log(err))

  const [ProgressArray, setProgressArray] = React.useState([0, 0]);
  
return (
    
  <>
  <ContentTitle>VizBook Contents</ContentTitle>

  {(ProgressArray[0] >= parseInt(0*parseFloat(unitProgress[0]))) ? 
        ( <UnStyledLink
          to="/Class8/Science/Chapter8Conservation/ConservationPage1"
          current={props.pageNo === 0}
        >
          <ButtonCommon>📜 Introduction</ButtonCommon>
        </UnStyledLink>) 
          :  ( <UnStyledLinkLocked
            to="/Class8/Science/Chapter8Conservation/ConservationPage1"
            current={props.pageNo === 0}
          >
            <span> <FaLock/>  <ButtonCommon>📜 Introduction</ButtonCommon> </span>
          </UnStyledLinkLocked>) 
            }

{(ProgressArray[0] >= parseInt(1*parseFloat(unitProgress[0]))) ? 
        ( <UnStyledLink
          to="/Class8/Science/Chapter8Conservation/ConservationPage2"
          current={props.pageNo === 0}
        >
          <ButtonCommon>📜 Causes of Deforestation</ButtonCommon>
        </UnStyledLink>) 
          :  ( <UnStyledLinkLocked>
            <span> <ButtonCommonLocked>  🔒 Causes of Deforestation</ButtonCommonLocked> </span>
          </UnStyledLinkLocked>) 
            }


{(ProgressArray[0] >= parseInt(2*parseFloat(unitProgress[0]))) ? 
        ( <UnStyledLink
          to="/Class8/Science/Chapter8Conservation/ConservationPage3"
          current={props.pageNo === 0}
        >
          <ButtonCommon>📜 Consequences of Deforestation</ButtonCommon>
        </UnStyledLink>) 
          :  ( <UnStyledLinkLocked
            current={props.pageNo === 0}
          >
            <span>  <ButtonCommonLocked> 🔒 Consequences of Deforestation</ButtonCommonLocked></span>
          </UnStyledLinkLocked>) 
            }


{(ProgressArray[0] >= parseInt(3*parseFloat(unitProgress[0]))) ? 
        ( <UnStyledLink
          to="/Class8/Science/Chapter8Conservation/ConservationPage4"
          current={props.pageNo === 0}
        >
         <ButtonCommon>📜 Biosphere Reserves</ButtonCommon>
        </UnStyledLink>) 
          :  ( <UnStyledLinkLocked
            current={props.pageNo === 0}
          >
            <span> <ButtonCommonLocked>🔒 Biosphere Reserves</ButtonCommonLocked> </span>
          </UnStyledLinkLocked>) 
            }
  
</>
);
}



