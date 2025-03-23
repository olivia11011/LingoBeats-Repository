import VideoPlayer from "../components/VideoPlayer";
import { useLocation } from "react-router-dom";

export default function MusicPlayer() {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <VideoPlayer src={state.path} />
    </div>
  );
}
