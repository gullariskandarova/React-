import React from "react";
import "./index.scss"
const Tbale = ({users}) => {
    
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tbale;
