import React from "react";
import { TableWrapper } from "../../styles/common.styles";

const TaskList = ({ tasks, editTask, removeTask }) => (
  <div className="col-md-7" style={{paddingLeft: "30px"}}>
    <TableWrapper>
      <table style={{marginTop: "25px"}}>
      <thead>
					<tr>
					  <th className="text-center">No.</th>
					  <th className="text-center">description</th>
					  <th className="text-center">Action</th>
					  <th className="text-center">Action</th>
					</tr>
				  </thead>
        <tbody>
          {tasks.map(({ description }, index) => (
            <tr key={`task-${index}`}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{description}</td>
              <td className="text-center">
                <a onClick={() => editTask(index)}>Edit</a>
              </td>
              <td className="text-center">
                <a onClick={() => removeTask(index)}>Remove</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  </div>
);

export default TaskList;
