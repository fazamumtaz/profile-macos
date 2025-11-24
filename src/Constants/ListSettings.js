import {
  BrainCircuit,
  Clock,
  Cloud,
  FolderClock,
  FolderDown,
  HardDrive,
  Trash2,
} from "lucide-react";

const LIST_INTERNET = [
  {
    img: "wifi",
    label: "Wi-Fi",
  },
  {
    img: "bluetooth",
    label: "Bluetooth",
  },
  {
    img: "internet",
    label: "Network",
  },
  {
    img: "internet",
    label: "VPN",
  },
];

const LIST_NOTIFICATION = [
  {
    img: "notif",
    label: "Notifications",
  },
  {
    img: "speaker",
    label: "Sound",
  },
  {
    img: "focus",
    label: "Focus",
  },
  {
    img: "timescreen",
    label: "Screen Time",
  },
];

const LIST_FILES_1 = [
  {
    icon: Clock,
    label: "Recents",
  },
  {
    icon: FolderClock,
    label: "Shared",
  },
];

const LIST_FILES_2 = [
  {
    icon: FolderDown,
    label: "Download",
  },
  {
    icon: Cloud,
    label: "iCloud",
  },
  {
    icon: BrainCircuit,
    label: "On My Brain",
  },
  {
    icon: HardDrive,
    label: "Drive",
  },
  {
    icon: Trash2,
    label: "Recently Deleted",
  },
];

const LIST_APPLE = [
  {
    label: "About This Mac",
    separator: true,
  },
  {
    label: "System Preferences...",
    separator: false,
  },
  {
    label: "App Store...",
    separator: true,
  },
  {
    label: "Recent Items",
    separator: true,
  },
  {
    label: "Force Quit...",
    separator: true,
  },
  {
    label: "Sleep",
    separator: false,
  },
  {
    label: "Restart...",
    separator: false,
  },
  {
    label: "Shut Down...",
    separator: true,
  },
  {
    label: "Lock Screen",
    separator: false,
  },
  {
    label: "Log Out User...",
    separator: false,
  },
];

const LIST_FINDER = [
  {
    label: "About Finder",
    separator: true,
  },
  {
    label: "Preferences",
    separator: true,
  },
  {
    label: "Empty Trash",
    separator: true,
  },
  {
    label: "Hide Finder",
    separator: false,
  },
  {
    label: "Hide Others",
    separator: false,
  },
  {
    label: "Show All",
    separator: false,
  },
];

export {
  LIST_INTERNET,
  LIST_NOTIFICATION,
  LIST_FILES_1,
  LIST_FILES_2,
  LIST_APPLE,
  LIST_FINDER,
};
