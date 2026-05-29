export function Mascot() {
  return (
    <div className="relative h-[72px] w-[72px]" aria-hidden="true">
      <span className="absolute left-2.5 top-1 h-6 w-6 -rotate-12 rounded-t-lg border-[3px] border-[#4a372b] bg-[#d9a56b]" />
      <span className="absolute right-2.5 top-1 h-6 w-6 rotate-12 rounded-t-lg border-[3px] border-[#4a372b] bg-[#d9a56b]" />
      <span className="absolute inset-x-2 bottom-1 top-3 rounded-[26px_26px_20px_20px] border-[3px] border-[#4a372b] bg-[#d9a56b]" />
      <span className="absolute left-6 top-9 h-2 w-2 rounded-full bg-[#2a211d]" />
      <span className="absolute right-6 top-9 h-2 w-2 rounded-full bg-[#2a211d]" />
      <span className="absolute left-8 top-11 h-1.5 w-2 rounded-full bg-[#72523f]" />
      <span className="absolute bottom-0 left-4 h-4 w-10 rounded border-[3px] border-[#4a372b] bg-[#fff2d6]" />
    </div>
  );
}
