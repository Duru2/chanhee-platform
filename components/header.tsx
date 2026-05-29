export function Header() {
  return (
    <header className="fixed top-0 z-20 flex w-full flex-col gap-4 bg-gradient-to-b from-ink/75 to-transparent px-5 py-4 text-cream md:flex-row md:items-center md:justify-between md:px-14">
      <a className="flex items-center gap-3 font-display text-lg font-black" href="/">
        <span className="relative grid h-11 w-11 -rotate-3 place-items-center rounded-2xl border-2 border-cream/65 bg-cream/15">
          <span className="absolute bottom-2 h-4 w-6 rounded-b-lg border-2 border-t-0 border-cream" />
          <span className="absolute top-2 h-4 w-4 rotate-45 rounded-br-xl rounded-tl-xl border-l-[3px] border-t-[3px] border-[#9fd08b]" />
          <span className="relative font-black">C</span>
        </span>
        <span>Chanhee OS</span>
      </a>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
        <a href="/dev">Dev</a>
        <a href="/youtube">YouTube</a>
        <a href="/writing">Writing</a>
        <a href="/pte">PTE</a>
        <a href="/life">Life</a>
        <a href="/board">Board</a>
        <a href="/now">Now</a>
        <a href="/map">Map</a>
        <a href="/ask">AI</a>
      </nav>
    </header>
  );
}
