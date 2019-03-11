import messages from "@common/messages/MessagesReducers";
import user from "@components/login/LoginReducers";
import hero from "@components/dashboard/DashboardReducers";

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  messages,
  user,
  hero
};
