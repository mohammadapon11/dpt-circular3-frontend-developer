import React from "react";

const Table = ({ filteredFlights }) => {
  return (
    <div className="relative overflow-x-auto py-2 -z-10">
      {filteredFlights && (
        <h1 className="py-3 font-semibold text-black">
          Data Parsed Successfully
        </h1>
      )}
      <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-500 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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
            <th scope="col" className="px-6 py-3">
              DEPARURE
            </th>
            <th scope="col" className="px-6 py-3">
              ARRIVAL
            </th>
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
            <tr key={index} className="bg-white border-b border-red-200">
              <td className="px-6 py-4">
                {flight.itineraries[0].segments.map((segment) => (
                  <p>{segment.flightNumber}</p>
                ))}
              </td>
              <td className="px-6 py-4">
                {flight.itineraries[0].segments.map((segment) => (
                  <p>TK {segment.aircraft}</p>
                ))}
              </td>
              <td className="px-6 py-4">
                {flight.class[0].map((cls) => (
                  <p>{cls}</p>
                ))}
              </td>
              <td className="px-6 py-4">
                {flight.fareBasis[0].map((fare) => (
                  <p>{fare}</p>
                ))}
              </td>
              <td className="px-6 py-4">
                {flight.itineraries[0].segments.map((segment) => (
                  <p>
                    {segment.departure.iataCode +
                      "-" +
                      segment.arrival.iataCode}
                  </p>
                ))}
              </td>
              <td className="px-6 py-4">
                {flight.itineraries[0].segments.map((segment) => (
                  <p>{segment.departure.at}</p>
                ))}
              </td>
              <td className="px-6 py-4">
              {flight.itineraries[0].segments.map((segment) => (
                  <p>{segment.arrival.at}</p>
                ))}
              </td>
              <td className="px-6 py-4">{flight.itineraries[0].duration}</td>
              <td className="px-6 py-4">{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
