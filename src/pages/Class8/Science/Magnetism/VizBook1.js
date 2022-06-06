import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { OutermostContainer } from "./Common.elements";
import SubconceptTemplate from "./SubconceptTemplate";
import { db } from "./config";
import { collection, getDocs, onSnapshot, query, getDoc, doc } from "firebase/firestore";

// Chapter Info Elements importing
import Navfunction from "./Navfunction";
import { ActiveChapterId } from "./ChapterInfo";
import { divArraycum, TextTips, PageLinks } from "./ChapterInfo";
import { Types } from './ChapterInfo';
import { PageContents } from "./ChapterInfo";


//import { TOCIcon, TreeIcon } from "./PageIcons";



export default () => {

  const PageNumber = 1;
  
  var Subconcepts = [];

  const [PageContent, setPageContent] = useState(() => {
    return JSON.parse(localStorage.getItem('VizBook1Contents')) || PageContents[PageNumber-1];
  });


useEffect(() => {
    localStorage.setItem('VizBook1Contents', JSON.stringify(PageContent));
  }, [PageContent]);

  // Store array of subconcepts in a single array. The props of pagenumber, subconcept number and subconcept type are passed to the
  //function SubconceptTemplate1

  for (var i = 1; i < Object.keys(PageContent).length; i++) {
    Subconcepts.push(<SubconceptTemplate PageNumber={PageNumber} SubconceptNumber={PageContent[`Subconcept${i}`][0]} type={1} key={i} />);
}

  return (

    <OutermostContainer>
    <Navfunction PageNumber={PageNumber} type = {"Top"}/> 
      {Subconcepts}
      {/*     {NavfunctionTop(PageNumber)}
      {SubConcepts}
     {TreeIcon(PageNumber)}
      {TOCIcon(PageNumber)}
     {NavfunctionBottom(PageNumber)} */}
    <Navfunction PageNumber={PageNumber} type = {"Bottom"}/> 
    </OutermostContainer>

  )
};
