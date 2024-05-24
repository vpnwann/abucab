
import Link from "next/link";


export default function Home() {
  return (
    <section class="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" autoPlay={true}
            src="/as.mp4"
            type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content    space-y-2 z-10" style={{marginTop:"200px"}}>
        <h1 class="font-light text-6xl" style={{fontFamily:'teko'}}>ABU CABS</h1>
        <h3 class="font-light text-3xl"></h3>
        <Link   href="/Cab" class="relative">
        <span class="absolute top-0 left-0 mt-1 ml-1 h-1 w-full rounded bg-gray-700"></span>
        <span class="fold-bold relative inline-block h-8 w-full rounded border-2 border-black bg-black px-3 py-1 text-base-3 font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">Book Now !</span>
    </Link>
    </div>
</section>
  );
}
