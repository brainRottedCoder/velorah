import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { VideoBackground } from "@/components/VideoBackground"

export default function App() {
  return (
    <div className="relative flex h-svh flex-col overflow-hidden bg-background">
      <VideoBackground />
      <Navbar />
      <main className="relative z-10 flex flex-1 flex-col justify-center">
        <Hero />
      </main>
    </div>
  )
}
