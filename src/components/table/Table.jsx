const Table = ({
  filteredFlights,
  loading,
  noFlight,
  selectedDate,
  fromText,
  toText,
}) => {
  return (
    <div className="relative overflow-x-auto py-2 z-10 pb-10">
      {filteredFlights.length > 0 ? (
        <>
          {filteredFlights && (
            <div className="pt-2 pb-4">
              <h1 className="font-semibold text-black max-md:text-center max-md:mt-2">
                Data Parsed Successfully
              </h1>
              <h1 className="font-semibold max-md:mt-3 text-black text-center text-3xl">
                This date{" "}
                <span className="text-red-600 underline">
                  {filteredFlights.length}
                </span>{" "}
                Flight Found.
              </h1>
            </div>
          )}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  FIGHT
                </th>
                <th scope="col" className="px-6 py-3">
                  ARICRAFT
                </th>
                <th scope="col" className="px-6 py-3">
                  CLASS
                </th>
                <th scope="col" className="px-6 py-3">
                  FARE
                </th>
                <th scope="col" className="px-6 py-3">
                  ROUTE
                </th>
                <th scope="col" className="px-6 py-3 ">
                  DEPARURE
                </th>
                <th scope="col" className="px-6 py-3">
                  ARRIVAL
                </th>
                <th></th>
                <th scope="col" className="px-6 py-3">
                  DURATION
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredFlights.map((flight, index) => (
                <tr
                  key={index}
                  className={`text-center border-b border-red-400 ${
                    index % 2 == 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="px-6">
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <p key={index}>{segment.flightNumber}</p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <p key={index}>TK {segment.aircraft}</p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.class[0].map((cls, index) => (
                      <p key={index}>{cls}</p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.fareBasis[0].map((fare, index) => (
                      <p key={index}>{fare}</p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <p key={index}>
                        {segment.departure.iataCode +
                          "-" +
                          segment.arrival.iataCode}
                      </p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <p
                        className={`${
                          new Date(selectedDate).toDateString() ===
                            new Date(segment.departure.at).toDateString() &&
                          fromText === segment.departure.iataCode &&
                          toText === segment.arrival.iataCode
                            ? "bg-red-500 text-white"
                            : ""
                        }`}
                        key={index}
                      >
                        {segment.departure.at}
                      </p>
                    ))}
                  </td>
                  <td className="px-6">
                    {flight.itineraries[0].segments.map((segment, index) => (
                      <p key={index}>{segment.arrival.at}</p>
                    ))}
                  </td>
                  __
                  <td className="px-6">{flight.itineraries[0].duration}</td>
                  <td className="px-6">
                    <p>{flight.price}</p>
                    <button className="btn min-h-[2.1rem] h-[2.1rem] px-6 text-gray-200 bg-blue-900 hover:bg-blue-950 cursor-pointer">
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : loading ? (
        <div className="flex items-center justify-center py-10">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : noFlight === "no flight" ? (
        <div className="py-3">
          <p className="text-2xl text-black pb-2 font-semibold">
            No flight Available Provided Destination and date!
          </p>
          <p className="underline text-red-500">
            Note: Flight Available 22th, 23th, 24th November 2022!
          </p>
        </div>
      ) : (
        <div className="text-center py-3">
          <p className="text-3xl te text-black pb-2">
            Please Search by Destination and Flight date!
          </p>
          <p className="underline text-red-500">
            Note: Here Available 22th, 23th, 24th November 2022 flight!
          </p>
        </div>
      )}
    </div>
  );
};

export default Table;
