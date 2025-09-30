import Section from "@/components/section";

interface VideoData {
  id: string;
  title: string;
  embedUrl: string;
  thumbnailUrl?: string;
}

const videos: VideoData[] = [
  // Example structure:
  {
    id: "video1",
    title: "How to use VAPI Workflows 2025 | Tutorial in 2 minutes",
    embedUrl: "https://www.youtube.com/embed/OnQqeUMNdds?si=7KvOIcs1fLvbnekp",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video2",
    title: "How to build an AI Voice Appointment Setter | For any Website 2025",
    embedUrl: "https://www.youtube.com/embed/I9GGC8VGNts?si=fFVemY9XpR0SK3IH",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video3",
    title: "99% of n8n and Make Users at Risk: Secure Your AI Agents Now",
    embedUrl: "https://www.youtube.com/embed/7qfa-wKb888?si=Xy4aHLoPrS7OAsmB",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video4",
    title: "Why your voice agent is broken and How to fix it: RAG | Step-by-step ( Real Estate client )",
    embedUrl: "https://www.youtube.com/embed/_H460PF-lpM?si=W6YN7t_iE-RuwTsl",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video5",
    title: "How to add Knowledge bases in VAPI with TRIEVE | Tutorial in 6 minutes",
    embedUrl: "https://www.youtube.com/embed/chGi_7LuvNk?si=nxkL3wRzKuxFaPQo",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video5",
    title: "80K/mo AI voice Agents for Real Estate [Full-Explained]",
    embedUrl: "https://www.youtube.com/embed/9fBjqlfeWWk?si=u5GYzb_xzvxw_9t_",
    thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
   },
   {
    id: "video6",
    title: "5 $1M AI businesses to build in 2025 (Real Blueprint)",
    embedUrl: "https://www.youtube.com/embed/YzbRsq3ATPQ?si=sNJ81CDAyXFqAcfs",
    thumbnailUrl: "https://i.ytimg.com/vi/YzbRsq3ATPQ/mqdefault.jpg"
   },

   {
    id: "video7",
    title: "Prompt Injection Tutorial: AI Agent Under Attack",
    embedUrl: "https://www.youtube.com/embed/qmFPYhkrZDI?si=1bWgc7AiR5M5HD_k",
    thumbnailUrl: "https://i.ytimg.com/vi/qmFPYhkrZDI/mqdefault.jpg"
   },


   {
    id: "video8",
    title: "Build AI Agents with Vapi Web SDK | Dev Tutorial ( Tool Calls, Live Speech & Email Capture )",
    embedUrl: "https://www.youtube.com/embed/GWOmFuENfyE?si=i_ede_cZ9iYdMR_K",
    thumbnailUrl: "https://i.ytimg.com/vi/GWOmFuENfyE/mqdefault.jpg"
   },
   {
    id: "video9",
    title: "How To Built a Multilingual Appointment Setter for HR | VAPI WORKFLOWS TUTORIAL",
    embedUrl: "https://www.youtube.com/embed/oM78ic2OzQI?si=kve-mwDCh9Ny832k",
    thumbnailUrl: "https://i.ytimg.com/vi/HmzZy-k-f4g/mqdefault.jpg"
   },
   {
    id: "video10",
    title: "How To Build a Complex HR Technical Interviewer | VAPI WORKFLOWS TUTORIAL (PART 2)",
    embedUrl: "https://www.youtube.com/embed/HmzZy-k-f4g?si=c6TdI5RDKUoM7KO7",
    thumbnailUrl: "https://i.ytimg.com/vi/HmzZy-k-f4g/mqdefault.jpg"
   },
  
  ];

export default function VideoSection() {
  return (
    <Section title="Videos" subtitle="Latest Content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos?.reverse().map((video) => (
          <div key={video.id} className="aspect-video">
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </Section>
  );
} 