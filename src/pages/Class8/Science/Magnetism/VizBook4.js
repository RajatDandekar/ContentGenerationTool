import React from "react";
import axios from 'axios'
import { SubconceptTemplate1 } from "../Templates/SubconceptTemplate1";
import { OutermostContainer } from "./Common.elements";

// Chapter Info Elements importing
import { NavfunctionBottom, NavfunctionTop } from "./Navfunction";
import { ActiveChapterId } from "./ChapterInfo";
import { divArraycum } from "./ChapterInfo";
import { TOCIcon, TreeIcon } from "./PageIcons";
import bgm1 from "../Background/Kru sound.mp3"



export default () => {

  const PageNumber = 4;

  var SubConcepts = [];

  const unitProgress = divArraycum[1];

  // Tracks total divs in each Page
  const divTracker = divArraycum[0];

  /* Tracks Current DivId of the user */

  const [divId, setDivId] = React.useState(null)

  /* Update VizBook Progress */

  const showNext = (id_number) => {
    setDivId(id_number);
    if (PageNumber > 1) {
      const Chapter1VizBookDetails = {
        ActiveChapterId: ActiveChapterId[0],
        divNo: id_number + divTracker[PageNumber - 1],
        unitProgress: unitProgress[0]
      };
    }
    else if (PageNumber == 1) {
      const Chapter1VizBookDetails = {
        ActiveChapterId: ActiveChapterId[0],
        divNo: id_number,
        unitProgress: unitProgress[0]
      };
    }

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
    for (var i = 1; i <= Object.keys(VizContent).length; i++) {
      SubConcepts.push(<SubconceptTemplate1 PageNumber={PageNumber} SubconceptNumber={i}
        type={VizContent[`Subconcept${i}`][0]} key={i} />);
    }

  }, [])

  React.useEffect(() => {
    axios
      .get(`/userprogress`)
      .then((res) => {
        console.log(res.data)
        setProgressArray(res.data[ActiveChapterId[0]])
        console.log(ProgressArray)

      })
      .catch((err) => console.log(err))
  }, [])




  const [VizContent, setVizContent] = React.useState(null);
  const [ProgressArray, setProgressArray] = React.useState([0, 0]);

  return (

    <OutermostContainer>
      {NavfunctionTop(PageNumber)}
      {SubConcepts}
      {TreeIcon(PageNumber)}
      {TOCIcon(PageNumber)}
      {NavfunctionBottom(PageNumber)}
    </OutermostContainer>

  )
};
