import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "voter") {
      navigate("/voter-dashboard");
    } else if (role === "candidate") {
      navigate("/candidate-dashboard");
    }
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelection("voter")}>I am a Voter</button>
      <button onClick={() => handleRoleSelection("candidate")}>
        I am a Candidate
      </button>
    </div>
  );
};

export default RoleSelection;