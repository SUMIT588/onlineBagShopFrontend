import React from "react";
import { loadingState } from "../../store/atom/loadingState";
import { useRecoilValue } from "recoil";

function Loading() {
  const isLoading = useRecoilValue(loadingState);

  if (!isLoading) return null; // Hide when not loading

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
}

export default Loading;
