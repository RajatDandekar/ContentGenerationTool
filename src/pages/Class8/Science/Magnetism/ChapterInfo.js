import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { db } from "./config";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

const Chapters = {
  "Magnetism": "8S13",
};

export const ActiveChapterId = Chapters["Magnetism"];

const Standard = ActiveChapterId.split("")[0];
const ChapterNumber = ActiveChapterId.split("S")[1];

// Initializing Arrays related to the Chapter. Div Array denotes the number of SubConcepts in the chapter. 
// The Cumulative Sum array is important for us to track the unit progress.
let divArray = [];
let CumulativeSum = [];
let ChapterTips = [];
let Links = [`/Class${Standard}/Science/Chapter${ChapterNumber}/Introduction`];
let types = [];


// Extracting the chapter information from firebase and storing in the arrays.
async function ChapterInformation() {
  const RetrieveDocs = query(
    collection(db, "vizcontent", `${ActiveChapterId}`, "Pages")
  )
  onSnapshot(RetrieveDocs, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        divArray.push(Object.keys(change.doc.data()).length - 1);
        ChapterTips.push(change.doc.data()["ConceptTitle"]);
        Links.push(`/Class${Standard}/Science/Chapter${ChapterNumber}/Page${change.doc.id.split("Page")[1]}`);

      }
      if (change.type === "modified") {
        divArray[change.doc.id.split("Page")[1] - 1] = Object.keys(change.doc.data()).length - 1;
        ChapterTips[change.doc.id.split("Page")[1] - 1] = change.doc.data()["ConceptTitle"];
        Links[change.doc.id.split("Page")[1]] = `/Class${Standard}/Science/Chapter${ChapterNumber}/Page${change.doc.id.split("Page")[1]}`
      }
    });
    types.push("1")
    CumulativeSum[0] = divArray[0] + 1;
    for (let i = 1; i < divArray.length; i++) {
      CumulativeSum[i] = CumulativeSum[i - 1] + divArray[i] + 1;
    }
  })
}

ChapterInformation();


// Extracting the content of the entire page and storing it as a dictionary
let document = [];

async function PagesContent() {
  const RetrieveDocs = query(
    collection(db, "vizcontent", `${ActiveChapterId}`, "Pages")
  )
  onSnapshot(RetrieveDocs, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        document.push(change.doc.data())
      }
      if (change.type === "modified") {
        document[change.doc.id.split("Page")[1] - 1] = change.doc.data();
      }
    });
  })
}

PagesContent();

// Exporting the quantities which will be used in other pages as well. Paths for VizTrees have to be updated

export const divArraycum = CumulativeSum;

export const TextTips = ChapterTips;

export const PageLinks = Links;

export const Types = types;

export const VizTreeImages = ["Path1", "Path2", "Path3"];

export const PageContents = document;

