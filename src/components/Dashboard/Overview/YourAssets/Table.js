import React, { useMemo } from "react";
import { useTable } from "react-table";
import ASSETS_DATA from "src/mock-data/ASSETS_DATA.json";
import { COLUMNS } from "./columns";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => ASSETS_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table className="border-collapse w-full" {...getTableProps()}>
      <thead className="text-left text-sm text-gray-400">
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup} {...headerGroup.getHeaderGroupProps}>
            {headerGroup.headers.map((column) => (
              <th
                className="pb-6 hidden sm:table-cell"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row} {...row.getRowProps()}>
              {row.cells.map((cell) =>
                cell.column.id === "image" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 text-velstand-primary flex gap-1.5 items-center cursor-pointer hover:text-green-600"
                    {...cell.getCellProps()}
                  >
                    {<img src={cell.render("Cell")} alt="" />}{" "}
                  </td>
                ) : cell.column.id === "status" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 hidden sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    <p className="bg-green-100 text-green-600 font-bold text-xs py-2 px-4 text-center rounded-2xl mr-4">
                      <img src="" alt="" />
                      {cell.render("Cell")}
                    </p>
                  </td>
                ) : cell.column.id === "id" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 pr-6 hidden sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    <input
                      type="checkbox"
                      className="checked:bg-green-500 cursor-pointer mt-1 h-5 w-5 text-gray-600 hidden sm:inline"
                    />
                  </td>
                ) : (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 text-sm hidden sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                )
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
