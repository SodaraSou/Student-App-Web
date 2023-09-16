import React from "react";

function StudentCard() {
  return (
    <div className="p-3 bg-cyan rounded-4 d-flex align-items-center justify-content-between student-card">
      <img
        src=""
        className="rounded-circle bg-danger"
        height={100}
        width={100}
        alt="logo"
      />
      <div>
        <h3>Hello</h3>
        <p>Dara</p>
      </div>
    </div>
  );
}

export default StudentCard;
