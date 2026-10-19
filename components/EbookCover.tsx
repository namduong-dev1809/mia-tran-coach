// The free guide's cover, drawn in HTML/CSS so no image is needed.
export default function EbookCover() {
  return (
    <div className="relative mx-auto w-64 sm:w-72" aria-hidden="true">
      <div className="absolute -inset-8 -z-10 rounded-full bg-blush blur-2xl" />
      <div
        className="book-float relative aspect-[3/4] rounded-r-xl rounded-l-sm bg-clay p-7 text-white shadow-[20px_25px_40px_-10px_rgba(80,30,10,0.45)]"
        style={{ transform: "perspective(1200px) rotateY(-18deg) rotateX(4deg)" }}
      >
        <div className="absolute inset-y-0 left-3 w-px bg-white/25" />
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/80">Free guide</p>
        <p className="mt-6 font-serif text-[2rem] leading-[1.05]">Land your first freelance client in 30 days</p>
        <p className="mt-4 text-sm text-white/85">7 simple steps for designers</p>
        <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/30 pt-3 text-xs">
          <span>Mia Tran</span>
          <span className="font-serif text-lg">07</span>
        </div>
      </div>
    </div>
  );
}
