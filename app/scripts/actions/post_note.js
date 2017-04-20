import container from "../containers/all.js";
import { connect } from "react-redux";

export default function postNote(note) {
  // console.log("saved pressed");
  // //All async action creators should return a function that takes 'dispatch' as its argument
  // return function(dispatch) {
  console.log(note);
  // dispatch( { type: "GET_NOTES" });

  //Do the ajax call
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "https://api.backendless.com/v1/data/markdown",
    headers: {
      "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
      "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
      "Content-Type": "application/json",
      "application-type": "REST"
    },

    data: JSON.stringify({
      notes: note
    })
  }).then((data, response) => {
    //After the ajax call dispatch the GET NOTES type ???
    console.log(data, response);
  });
}
