export default function Loading() {
  const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  return (
    <>
      <div className={`${shimmer} bg-gray-300 w-3xl flex ml-auto min-h-[41rem]`}>
      <div className={` bg-gray-300 items-center justify-center rounded-lg h-full bg-gradient shadow-lg overflow-hidden p-1 cursor-pointer min-w-max`} />
    </div>
    </>
  )
}