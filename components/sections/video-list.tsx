import { Marquee } from "@/components/ui/marquee";

const videos = [
  {
    id: 1,
    title: "Prime",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772275563/Drink_Prime_ivuet2.mp4",
  },
  {
    id: 2,
    title: "Boat",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772276584/Boat_metqv6.mp4",
  },
  {
    id: 3,
    title: "Trimmer",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772276950/Trimmer_commercial_chujxc.mp4",
  },
  {
    id: 4,
    title: "Maluma Vape",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277040/Maluma_ejaxgd.mp4",
  },
  {
    id: 5,
    title: "Chris Bar Vape",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277191/chris_bar_vape_n4itsv.mp4",
  },
  {
    id: 6,
    title: "Super Human Black",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277466/creatine_black_sfk9xa.mp4",
  },
  {
    id: 7,
    title: "Insane Labz",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277590/Insane_Whey_protien_c7pagd.mp4",
  },
  {
    id: 8,
    title: "Super Human Orange",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277984/Super_Human_Orange_rr4arv.mp4",
  },
  {
    id: 9,
    title: "Karma and Luck",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772278420/Karma_and_luck_yafx3i.mp4",
  },
  {
    id: 10,
    title: "Bliss",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279241/Bliss_commercial_Main_fzqkhz.mp4",
  },
  {
    id: 11,
    title: "Nike",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279054/nike_commercial_xnmuha.mp4",
  },
  {
    id: 12,
    title: "Airpods",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279334/airpods_pro_h98l6z.mp4",
  },
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  return (
    <div className="w-[520px] shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
      <div className="aspect-[16/10] overflow-hidden">
        <video
          src={video.src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}

export function VideoList() {
  return (
    <div className="mt-24 w-full overflow-hidden px-6">
      <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl text-center">
        Our Work in Motion
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
        See how we help founders and SaaS companies build category-defining
        media through strategic production and content that scales.
      </p>

      <div className="mt-16">
        <Marquee className="[--duration:50s] [--gap:1rem]" pauseOnHover>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Marquee>
        <Marquee className="[--duration:50s] [--gap:1rem]" pauseOnHover reverse>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
