import { Suspense } from "react";
import VideoComponent from "./_components/VideoComponent";

const demoVideo = "https://cdn.onc-prod.intergalactic.space/Neutrinos_audio_1b0a6a37a3.mp4";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>DEMO</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent videoUrl={demoVideo} />
      </Suspense>
    </main>
  );
}
