import { useEffect, useState } from "react";

export const useSearch = (data) => {
  const [searchtext, setSearchText] = useState("");
  const [filteredRestraunt, setFilteredRestraunt] = useState(data);

  useEffect(() => {
    setFilteredRestraunt(data);
  }, [data]);

  const handleSearch = () => {
    const FilteredData = data.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext.toLocaleLowerCase())
    );
    setFilteredRestraunt(FilteredData);
  };
  return {
    searchtext,
    setSearchText,
    filteredRestraunt,
    handleSearch,
    setFilteredRestraunt,
  };
};
