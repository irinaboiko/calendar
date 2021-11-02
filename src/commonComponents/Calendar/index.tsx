import React, { FC } from "react";
import { Calendar } from "antd";

import { IEvent } from "../../models/IEvent";

interface EventsCalendarProps {
  events: IEvent[];
}

const EventsCalendar: FC<EventsCalendarProps> = () => {
  return <Calendar />;
};

export default EventsCalendar;
