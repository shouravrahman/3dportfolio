const Loader = () => {
   return (
      <div className='flex items-center justify-center h-dvh w-full bg-black text-white'>
         <div className='flex flex-col items-center'>
            {/* Rotating 3D Cube */}
            <div className='loader-cube'>
               <div className='cube'>
                  <div className='cube-face cube-face-front'></div>
                  <div className='cube-face cube-face-back'></div>
                  <div className='cube-face cube-face-left'></div>
                  <div className='cube-face cube-face-right'></div>
                  <div className='cube-face cube-face-top'></div>
                  <div className='cube-face cube-face-bottom'></div>
               </div>
            </div>
            {/* Loader Text */}
            <h2 className='mt-6 text-2xl'>Loading, please wait...</h2>
         </div>
      </div>
   );
};

export default Loader;
