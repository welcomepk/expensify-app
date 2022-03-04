// actions for filter

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

export const setStartDate = (startDate = "undefined") => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

export const setEndDate = (endDate = "undefined") => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};
export const setText = (text = "") => {
  return {
    type: "SET_TEXT",
    text,
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};
