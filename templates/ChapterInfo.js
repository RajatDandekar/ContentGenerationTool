import React from "react";
import { useState } from "react";

const Chapters = {
  Magnetism: "8S13",


};

export const ActiveChapterId = Chapters[Magnetism];

const Standard = ActiveChapterId.split("")[0];
const ChapterNumber = ActiveChapterId.split("S")[1];

export function divInfo() {

  React.useEffect(() => {
    axios
      .get(`/vizcontent/${ActiveChapterId}/Pages`)
      .then((data) => {
        data.forEach(doc => {
          divArray.push(Object.keys(doc.data()).length - 1);
          TextTips.push(doc.data()["ConceptTitle"])
        })

      })
      .catch((err) => console.log(err))
  }, [])

  const [divArray, setdivArray] = React.useState(null);
  const [TextTips, setTextTips] = React.useState(null);

  CumulativeSum = new Array(divArray.length);
  CumulativeSum[0] = divArray[0] + 1;
  for (let i = 1; i < divArray.length; i++) {
    CumulativeSum[i] = CumulativeSum[i - 1] + divArray[i] + 1;
  }
  const divArraycum = CumulativeSum;

  const unitProgress = 100/CumulativeSum[CumulativeSum.length - 1]

 return ( 
   [divArraycum, unitProgress, TextTips]
   )

}

const Links =
  [`/Class${Standard}/Science/Chapter${ChapterNumber}/Introduction`
  ]

for (var i = 1; i <= VizContent.length; i++) {
  Links.push(`/Class${Standard}/Science/Chapter${ChapterNumber}/Page${i}`);
}

export const PageLinks = Links;

export const VizTreeImages = ["Path1", "Path2", "Path3"]