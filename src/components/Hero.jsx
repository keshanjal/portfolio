// /* eslint-disable react/no-unescaped-entities */
// import { styles } from '../style';
// import { my_image } from "../assets";
// import { Typewriter } from 'react-simple-typewriter';

// const Hero = () => {
//   return (
//     <>
//       <section className='relative w-full h-screen mx-auto '>
//         <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//           <div className='flex flex-col justify-center items-center mt-5 '>
//             <div className='w-5 h-5 rounded-full bg-[#915eff]' />
//             <div className='w-1 sm:h-80 h-40 violet-gradient' />
//           </div>
//           <div className='flex gap-[10%] max-md:flex-col'>
//             <div>
//               <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Anjal</span></h1>
//               <p className={`${styles.heroSubText} mt-2 text-white`}>I am a Competitive Programmer  <br className='sm:block hidden' />, Android app developer and a MERN stack developer</p>
//             </div>
//             <div className='max-md:w-full max-md:h-full flex items-start justify-center w-[50%] h-auto'>
//               <img src={my_image} className="flex h-auto rounded-3xl w-[90%] max-md:w-[40%]  max-md:items-center max-md:mt-16 max-sm:w-[50%] max-sm:mt-14 max-[500px]:w-[70%] max-[500px]:mt-16 max-[300px]:w-[90%]" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero




/* eslint-disable react/no-unescaped-entities */
import { styles } from '../style';
import { my_image } from "../assets";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 md:px-10 lg:pl-20`}>
        {/* Left vertical line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text and image container */}
        <div className='flex gap-[10%] max-md:flex-col w-full'>
          {/* Text section */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{' '}
              <span className='text-[#915eff]'>
                <Typewriter
                  words={['Anjal']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                />
              </span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white`}>
              I am a{' '}
              <span className="text-[#915eff]">
                <Typewriter
                  words={[
                    'Competitive Programmer',
                    'Android App Developer',
                    'MERN Stack Developer'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </p>
          </div>

          {/* 👇 Image shifted right */}
          <div className='max-md:w-full max-md:h-full flex items-start justify-end w-[40%] h-auto ml-auto pr-4'>
            <img
              src={my_image}
              alt="profile"
              className="flex h-auto rounded-3xl w-[90%] max-md:w-[40%] max-md:items-center max-md:mt-16 max-sm:w-[50%] max-sm:mt-14 max-[500px]:w-[70%] max-[500px]:mt-16 max-[300px]:w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
