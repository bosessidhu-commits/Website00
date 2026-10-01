import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AdminPanelModal } from "@/components/AdminPanelModal";
import { useEffect } from "react";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Staff & Management Portal — Danial's Cafe & Bistro, Faridkot" },
      {
        name: "description",
        content:
          "Private Staff & Management Command Center for Danial's Cafe & Bistro.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PortalRoutePage,
});

function PortalRoutePage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate({ to: "/" });
  };

  useEffect(() => {
    document.title = "Staff & Management Portal — Danial's Cafe & Bistro, Faridkot";
  }, []);

  return (
    <div className="min-h-screen bg-[#062c25] flex flex-col justify-center items-center p-2 sm:p-4">
      {/* Dedicated Fullscreen Admin Command Center */}
      <AdminPanelModal isOpen={true} onClose={handleClose} />
    </div>
  );
}
