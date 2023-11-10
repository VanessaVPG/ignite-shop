const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProductImageSkeleton() {
  return (
    <>
      <div className={`${shimmer} relative bg-gray-300 overflow-hidden grid grid-cols-2 items-stretch gap-16 max-w-[1180px] w-full my-0 mx-auto`}>
        <div className="w-full flex justify-center items-center max-w-xl h-[656px] bg-gradient-to-b rounded-lg">
          <div className="w-[480px] h-[500px] bg-gray-300" />
        </div>
      </div>
    </>
  )
}

