import { useEffect, useState } from "react";
import { ItemType } from "../types";
import { adjustedPrice } from "../helpers";

function useData() {
  const [data, setData] = useState<any>(null);

  async function getData() {
    fetch("data.json")
      .then((res) => res.json())
      .then(setData);
  }

  function alphabeticSort(): [] | ItemType[] {
    if (!data) return [];

    const sortedArr = data?.items.sort((a: any, b: any) => {
      const aInitial = a.name.toLowerCase();
      const bInitial = b.name.toLowerCase();

      if (aInitial > bInitial) return 1;

      if (bInitial > aInitial) return -1;

      return 0;
    });

    return sortedArr;
  }
  function sortBy(field: string): [] | ItemType[] {
    if (!data) return [];

    const sortedArr = data?.items.sort((a: any, b: any) => {
      const aInitial =
        field === "adjusted" ? adjustedPrice(a.price, a.quantity) : a[field];
      const bInitial =
        field === "adjusted" ? adjustedPrice(b.price, b.quantity) : b[field];

      if (aInitial > bInitial) return 1;

      if (bInitial > aInitial) return -1;

      return 0;
    });

    return sortedArr;
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    data: alphabeticSort(),
    sortBy,
  };
}

export default useData;
