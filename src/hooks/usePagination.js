import { useState } from "react";

export const usePagination = (items, numItemsPage = 4) => {
  const [numItemsToShow, setNumItemsToShow] = useState(numItemsPage)
  const firstItems = items?.slice(0, numItemsToShow) || []
  const showMore = () => {
    setNumItemsToShow(numItemsToShow + numItemsPage)
  }
  const theAreMore = items?.length > numItemsToShow

  return [firstItems, showMore, theAreMore]
}
