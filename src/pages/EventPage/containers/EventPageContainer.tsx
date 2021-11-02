import React, { FC, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import EventsCalendar from "../../../commonComponents/Calendar";
import EventForm from "../../../commonComponents/EventForm";

const EventPageContainer: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Layout>
      <EventsCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setIsModalVisible(true)}>
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default EventPageContainer;
