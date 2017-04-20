export default function exampleReducer (state, action) {
  return state;
}

$.ajax({
        url: url,
        type: "POST",
        headers: {
          "application-id": appId,
          "secret-key": restKey,
          "Content-Type": "application/json",
          "application-type": "REST"
        },
        data: JSON.stringify({
          note: marked(state.text)
        })
      }).then((data, success) => {
        console.log("note saved = ", data, success);
      });
      return Object.assign({}, state, {
        isSent: true
      });
