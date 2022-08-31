import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewMoreCard({ subCategory }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ minWidth: 250 }}
      className="border rounded view-more-card p-0 m-0"
      onClick={() => navigate(`/t/prescription`)}
    >
      <span className="">View More</span>
    </div>
  );
}
