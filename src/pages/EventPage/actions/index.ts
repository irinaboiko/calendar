import { EventActionEnum, SetGuestsAction, SetEventsAction } from "../types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../../store/configureStore";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      const mockUsers = response.data;
      dispatch(EventActionCreators.setGuests(mockUsers));
    } catch (error) {
      console.log(error);
    }
  },
};
