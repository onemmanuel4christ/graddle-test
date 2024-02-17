import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

// import { userColumns, userRows } from "../../datasource";
import { userColumns, userRows } from "../../datasource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = ({title}) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="#" className="link">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable bg-white rounded-md">
      <div className="datatableTitlle ">
      {title}
        <Link to="#" className="link newLink">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
