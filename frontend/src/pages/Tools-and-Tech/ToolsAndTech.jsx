import tableData from "./tableData";
import tableDataDesktop from "./tableDataDesktop"
import { useEffect, useState } from "react";

export const ToolsAndTech = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <>
      <div id="toolsAndTech" className="h-screen bg-neutral-800 flex flex-col">
        <div className="text-white text-2xl flex justify-center pt-8">
          Skills and Tools
        </div>
        {isMobile ? (<div className="mt-8">
          <table className="flex justify-center m-5 text-white">
            <tbody>
              {tableData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cellData, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-12">
                      <img src={cellData} className="w-12 h-12" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>) : (
          <div className="mt-8">
          <table className="flex justify-center m-5 text-white">
            <tbody>
              {tableDataDesktop.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cellData, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-12">
                      <img src={cellData} className="w-12 h-12" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </>
  );
};
