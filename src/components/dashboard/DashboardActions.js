import axios from "axios";

import MessagesAction from "@common/messages/MessagesActions";

export default function GetHeroes() {

  return dispatch =>
    new Promise(async (resolve, reject) => {
      await MessagesAction(dispatch, "loading", true);

      return axios({
        method: "GET",
        url: "https://api.cmdvault.com/api/v1/catalog",
      })
        .then(async response => {
          await MessagesAction(dispatch, "loading", false);

          resolve(
            dispatch({
              type: "GET_HEROES",
              data: response.data
            })
          );
        })
        .catch(error => reject({ message: error.response.data.error }));
    }).catch(async err => {
      await MessagesAction(dispatch, "error", err.message);

      throw err.message;
    });
}
