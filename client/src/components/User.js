import React from "react";

const User = ({ label, value, editMode, onChange }) => {
  return (
    <div className="mb-3 row">
      <div class="row align-items-start">
        <div class="col">
          <label className="col-form-label w-auto">{label}</label>
        </div>
        <div className="col-sm-10">
          {editMode ? (
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={(e) => onChange(e)}
            />
          ) : (
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
