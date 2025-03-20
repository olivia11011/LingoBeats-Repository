import PlayButton from "../components/PlayButton";
import Player from "../components/Player";

export default function MusicPlayer() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <Player />
    </div>
  );
}
