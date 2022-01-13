import React, { useMemo } from "react";
import { useTable } from "react-table";
import TRANSACTIONS_DATA from "src/mock-data/TRANSACTIONS_DATA.json";
import { COLUMNS } from "./columns";
import { HiOutlineExternalLink } from "react-icons/hi";
import clsx from "clsx";

export default function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TRANSACTIONS_DATA, []);

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
                cell.column.id === "swap" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 pr-4 text-sm text-velstand-primary flex gap-1.5 items-center cursor-pointer hover:text-green-600"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")} <HiOutlineExternalLink size={20} />
                  </td>
                ) : cell.column.id === "status" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-2 hidden sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    <p
                      className={clsx({
                        "bg-green-100 text-green-600 font-bold text-xs py-2 px-4 text-center rounded-xl mr-4":
                          cell.value === "Success",
                        "bg-gray-100 text-gray-600 font-bold text-xs py-2 px-4 text-center rounded-xl mr-4":
                          cell.value === "Pending",
                        "bg-red-100 text-red-600 font-bold text-xs py-2 px-4 text-center rounded-xl mr-4":
                          cell.value === "Cancelled",
                      })}
                    >
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
