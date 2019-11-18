import React, { useState, useRef, useEffect } from "react";
import getEvents from "../services/getEvents";

const SearchInput = props => {
  const mounted = useRef();

  useEffect(() => {
    console.log(mounted);
    let details;

    if (!mounted.current) {
      mounted.current = true;
    } else {
      details = getEvents(props.id);
    }
  });

  return (
    <div className="SearchInput">
      <input id="event-input" type="text" placeholder="search for events" />
    </div>
  );
};

export default SearchInput;
