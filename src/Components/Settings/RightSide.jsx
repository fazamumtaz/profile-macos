import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import ProfileForm from "./ProfileForm";
import ActionButton from "./ActionButton";

const RightSide = ({ user, onClose }) => {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  return (
    <div className="w-2/3 rounded-r-xl bg-white p-5 pb-10 relative overflow-y-auto macos-scrollbar">
      <div className="absolute flex space-x-1">
        <ChevronLeft className="cursor-pointer" onClick={onClose} />
        <h2 className="text-md font-medium">User Settings</h2>
      </div>

      <div className="w-full h-full pt-5">
        <ProfileForm
          userData={user}
          formData={formData}
          onChange={handleFormChange}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />
        {/* Action Option */}
        <ActionButton />
        <div className="h-1 w-full"></div>
      </div>
    </div>
  );
};

export default RightSide;
