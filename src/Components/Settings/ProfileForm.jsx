import {
  Briefcase,
  CaseSensitive,
  CaseUpper,
  Check,
  Columns3Cog,
  Facebook,
  Flag,
  Instagram,
  Loader2,
  MessageCircleMore,
  TreePalm,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { apiRequest } from "../../Utils/api";

const ProfileForm = ({
  userData,
  onChange,
  isSaving,
  setIsSaving,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullname: "",
    job: "",
    country: "",
    city: "",
    about: "",
    instagram: "",
    facebook: "",
    twitter: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // autofill dulu
  useEffect(() => {
    if (userData) {
      setFormData(
        {
          fullname: userData.fullname || "",
          job: userData.job || "",
          country: userData.country || "",
          city: userData.city || "",
          about: userData.about || "",
          facebook: userData.facebook || "",
          twitter: userData.twitter || "",
          instagram: userData.instagram || "",
        },
        [userData]
      );
    }
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      await apiRequest("/user", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      setSuccessMessage("Berhasil memperbarui data");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      console.log("Profile berhasil diupdate");
    } catch (error) {
      alert("Gagal update profile: " + error.message);
    } finally {
      isSaving(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        disabled={isSaving}
        className={`absolute p-2 right-5 top-3.5 rounded-full group transition-colors ${
          isSaving
            ? "bg-gray-300 cursor-not-allowed"
            : "hover:bg-linear-to-tl hover:from-sky-500 hover:to-blue-400"
        }`}
      >
        {isSaving ? (
          <Loader2 className="w-5 h-5 stroke-zinc-600 animate-spin" />
        ) : (
          <Check className="w-5 h-5 group-hover:stroke-white transition-none" />
        )}
      </button>

      {/* ✅ Success message */}
      {successMessage && (
        <div className="absolute top-14 right-5 bg-green-500 text-white px-4 py-2 rounded-lg text-sm animate-fade-in">
          {successMessage}
        </div>
      )}

      {/* image */}
      <div className="w-full text-center">
        <img
          src="/profile.png"
          className="rounded-full aspect-square h-20 w-20 mx-auto mb-2"
          alt=""
        />
        <p className="">Photo Profile</p>
      </div>

      {/* grid form */}
      <h1 className="font-medium my-3">Edit Profile</h1>
      {/* FullName */}
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Full Name"
            required
          />
          <CaseUpper className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* Job */}
        <div className="relative">
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Your Job"
          />
          <Briefcase className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* Country */}
        <div className="relative">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Country"
          />
          <Flag className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* City */}
        <div className="relative">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="City"
          />
          <TreePalm className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* about */}
        <div className="relative col-span-2">
          <textarea
            type="text"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 min-h-20"
            placeholder="Tell me more about you"
          />
          <MessageCircleMore className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
      </div>

      {/* Social Media */}
      <h1 className="font-medium my-3 mt-5">Edit Social Media</h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="relative">
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center pl-8 py-1 w-full text-zinc-700 h-8"
            placeholder="@ Instagram"
          />
          <Instagram className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center pl-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Facebook URL"
          />
          <Facebook className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center pl-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Twitter Link"
          />
          <Twitter className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
