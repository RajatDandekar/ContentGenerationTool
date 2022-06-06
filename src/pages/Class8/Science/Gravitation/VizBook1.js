import React from "react";
import axios from 'axios'
import { SubconceptTemplate1 } from "../Templates/SubconceptTemplate1";
import { OutermostContainer } from "./Common.elements";

// Chapter Info Elements importing
import { NavfunctionBottom, NavfunctionTop } from "./Navfunction";
import { ActiveChapterId } from "./ChapterInfo";
import { divInfo } from "../Magnetism/ChapterInfo";
import { TOCIcon, TreeIcon } from "./PageIcons";
import bgm1 from "../Background/Kru sound.mp3"



export default () => {

  const PageNumber = 1;

  var SubConcepts = [];

  React.useEffect(() => {
    axios
      .get(`/vizcontent/${ActiveChapterId[0]}/Pages/Page${PageNumber}`)
      .then((res) => {
        console.log(res.data)
        setVizContent(res.data)
        console.log(VizContent)

      })
      .catch((err) => console.log(err))
    for (var i = 1; i <= VizContent.length; i++) {
      SubConcepts.push(<SubconceptTemplate1 PageNumber={PageNumber} SubconceptNumber={i}
        type={VizContent[`Subconcept${i}`][0]} key={i} />);
    }

  }, [])


  const [VizContent, setVizContent] = React.useState(null);
  return (

    <OutermostContainer>
      {NavfunctionTop[PageNumber]}
      {SubConcepts}
      {TreeIcon(PageNumber)}
      {TOCIcon(PageNumber)}
      {NavfunctionBottom[PageNumber]}
    </OutermostContainer>

  )
};
