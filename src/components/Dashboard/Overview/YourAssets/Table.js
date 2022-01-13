import React, { useMemo } from "react";
import { useTable } from "react-table";
import { ASSETS_DATA } from "src/mock-data/ASSETS_DATA.js";
import { COLUMNS } from "./columns";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

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
                cell.column.id === "price" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] sm:table-cell text-slate-600 pr-4"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ) : cell.column.id === "volume" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] hidden sm:table-cell text-slate-600"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ) : cell.column.id === "liquidity" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] hidden sm:table-cell text-slate-600"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ) : cell.column.id === "name" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    <div className="flex items-center gap-4">
                      {<img src={cell.row.original.image} width={50} alt="" />}{" "}
                      <div>
                        {/* Coin Name */}
                        <div className="flex gap-1 items-center">
                          <div>{cell.render("Cell")}</div>
                          <div className="text-sm text-gray-400">
                            {cell.row.original.code}
                          </div>
                        </div>
                        {/* Percentage Difference */}
                        <div className="flex text-sm">
                          <div>
                            {cell.row.original.difference.charAt(0) === "+" ? (
                              <div className="flex gap-1 items-center">
                                <IoIosArrowDropupCircle className="text-green-600 mt-[1px]" />
                                <p className="text-green-600">
                                  {cell.row.original.difference}
                                </p>
                              </div>
                            ) : (
                              <div className="flex gap-1 items-center">
                                <IoIosArrowDropdownCircle className="text-red-600 mt-[1px]" />
                                <p className="text-red-600">
                                  {cell.row.original.difference}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                ) : cell.column.id === "id" ? (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] pr-6 hidden sm:table-cell"
                    {...cell.getCellProps()}
                  >
                    <p>
                      <img src="" alt="" />
                      {cell.render("Cell")}
                    </p>
                  </td>
                ) : (
                  <td
                    key={cell.column.id}
                    className="py-6 border-t-[1px] text-sm hidden sm:table-cell"
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
