import {
  Briefcase,
  CaseSensitive,
  Check,
  Facebook,
  Flag,
  Instagram,
  MessageCircleMore,
  TreePalm,
  Twitter,
} from "lucide-react";

const ProfileForm = ({ formData, onChange }) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   onChange({ ...formData, [name]: value });
  // };

  return (
    <>
      <div className="absolute p-2 right-5 top-3.5 hover:bg-linear-to-tl hover:from-sky-500 hover:to-blue-400 rounded-full group transition-colors">
        <Check className="w-5 h-5 group-hover:stroke-white transition-none" />
      </div>
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
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Badzlan Nur"
          />
          <CaseSensitive className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* Job */}
        <div className="relative">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Backend End"
          />
          <Briefcase className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* Country */}
        <div className="relative">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Indonesia"
          />
          <Flag className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* City */}
        <div className="relative">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Jakarta"
          />
          <TreePalm className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
        </div>
        {/* about */}
        <div className="relative col-span-2">
          <textarea
            type="text"
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
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Instagram Link"
          />
          <Instagram className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Facebook Link"
          />
          <Facebook className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Twitter Link"
          />
          <Twitter className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
