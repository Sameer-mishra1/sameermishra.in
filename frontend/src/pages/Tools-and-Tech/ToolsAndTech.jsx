import tableData from "./tableData";

export const ToolsAndTech = () => {
  return (
    <>
      <div id="toolsAndTech" className="h-screen bg-neutral-800 flex flex-col">
        <div className="text-white text-2xl flex justify-center pt-8">
          Skills and Tools
        </div>
        <div className="mt-8">
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
        </div>
      </div>
    </>
  );
};
