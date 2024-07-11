"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({ roomTypeFilter, setRoomTypeFilter }) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}`);
  };

  return (
    <section className="bg-tertiary-light px-6 py-2 rounded-lg mx-2 md:mx-16">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-10 max-md:px-2 py-2 mb-2 capitalize rounded leading-tight dark:bg-white dark:text-black focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>

        {/* <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="w-9/12 px-4 py-2 mb-2 capitalize rounded leading-tight dark:bg-white dark:text-black focus:outline-none"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div> */}

        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
