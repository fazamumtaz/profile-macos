import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { AlertCircle } from "lucide-react";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  const dialogRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.2,
      });

      // Animate dialog with bounce effect
      gsap.fromTo(
        dialogRef.current,
        {
          scale: 0.7,
          opacity: 0,
          y: -20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    // Animate out
    gsap.to(dialogRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: onClose,
    });
  };

  const handleConfirm = () => {
    // Animate out
    gsap.to(dialogRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: onConfirm,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 opacity-0"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-60 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 p-6 pb-4">
            <div className="mt-1">
              <AlertCircle
                className="w-6 h-6 stroke-[#007AFF]"
                strokeWidth={2}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                {title || "Confirm Action"}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {message || "Are you sure you want to continue?"}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 px-6 pb-5 pt-2">
            <button
              onClick={handleClose}
              className="px-5 py-1.5 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-5 py-1.5 rounded-lg text-sm font-medium bg-[#007AFF] text-white hover:bg-[#0051D5] transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
