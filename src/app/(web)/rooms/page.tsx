"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import Search from "@/components/Search/Search";
import RoomCard from "@/components/RoomCard/RoomCard";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const roomType = searchParams.get("roomType");

    if (roomType) setRoomTypeFilter(roomType);
  }, []);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      // Apply room type filter

      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== "all" &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className="container mx-auto pt-10">
      <Search
        roomTypeFilter={roomTypeFilter}
        setRoomTypeFilter={setRoomTypeFilter}
        searchQuery={""}
        setSearchQuery={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="flex mt-20 justify-between flex-wrap mx-20 max-md:mx-0">
        {filteredRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
