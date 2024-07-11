"use client";

import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      setRoomTypeFilter={setRoomTypeFilter}
    />
  );
};

export default PageSearch;
