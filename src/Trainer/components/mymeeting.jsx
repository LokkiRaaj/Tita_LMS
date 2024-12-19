import React, { useEffect, useState } from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainermeetingHead from "../layout/Meeting/mymeetings-head";
import TrainerCalendar from "../layout/Meeting/calendar";


function TrainerMymeetings() {
  return (
    <>
      <div className="meeting-container">
        <TrainerSidebar />
        <div className="dashboard-main-wrapper">
          <TrainerHeader />
          <div className="dashboard-body">
            <TrainermeetingHead />
            <TrainerCalendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerMymeetings;