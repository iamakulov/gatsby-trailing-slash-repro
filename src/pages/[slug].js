import React from "react";

const LocationIndex = ({ serverData, data, ...props }) => {
  if (serverData.error) {
    return <p>Error!</p>;
  }
  return <p>Hello world!</p>;
};

export default LocationIndex;

export const getServerData = async ({ url }) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    status: 200,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
      "Server-Timing": `nothing-to-see-here`,
    },
    props: {
      hits: {},
    },
  };
};
