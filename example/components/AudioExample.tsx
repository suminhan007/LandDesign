import React from "react";
import Title from "../../packages/Title";
import Audio from "../../packages/Audio";

export default function AudioExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <div className="flex justify-center gap-24 border p-32">
          <Audio />
        </div>
      </div>
    </div>
  );
}