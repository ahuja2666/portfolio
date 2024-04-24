import React from 'react'

const AnimatedButton = ({ btnText }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden  p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center  bg-[#282c33]  py-2 px-4 text-base font-medium  backdrop-blur-3xl hover:text-[#ABB2BF]">
        {btnText}
      </span>
    </button>
  )
}

export default AnimatedButton