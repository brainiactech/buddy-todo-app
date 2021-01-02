import React from "react";
import { TableWrapper } from "../../styles/common.styles";

const UserList = ({ users, editUser, removeUser }) => (
  <div className="col-md-7" style={{paddingLeft: "30px"}}>
    <TableWrapper>
      <table style={{marginTop: "25px"}}>
      <thead>
					<tr>
					  <th className="text-center">No.</th>
					  <th className="text-center">name</th>
					  <th className="text-center">Action</th>
					  <th className="text-center">Action</th>
					</tr>
				  </thead>
        <tbody>
          {users.map(({ name }, index) => (
            <tr key={`task-${index}`}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{name}</td>
              <td className="text-center">
                <a onClick={() => editUser(index)}>Edit</a>
              </td>
              <td className="text-center">
                <a onClick={() => removeUser(index)}>Remove</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  </div>
);

export default UserList;
