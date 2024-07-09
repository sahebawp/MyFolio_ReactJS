import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App h-full w-screen flex overflow-hidden">
      <div className="Container bg-[#C1C1C1]">
        <nav className="bg-[#353535] text-white py-2 flex items-center">
          <ul className="nav-links flex flex-row px-4 justify-end space-x-4 items-end max-h-[100%]">
            <li>
              <img className="w-10 h-10 hover:cursor-pointer" src="./images/app-development.png" alt="" />
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-[#D6D0C7] font-mono font-bold">Socials</a>
            </li>
            <li className="mr-4">
              <a href="#work_exp" className="hover:text-[#D6D0C7] font-mono font-bold">Experiences</a>
            </li>
            <li><a href="#work_project" className="hover:text-[#D6D0C7] font-mono font-bold">Projects</a></li>
          </ul>
        </nav>

        <div className="MainSection mx-2 my-5 p-10 lg:pl-10 flex lg:flex-row flex-col justify-between items-center bg-[#8C8C8C] shadow-2xl rounded-md">
          <span className="w-full lg:w-1/2 flex justify-center items-center lg:order-2">
            <img className="SideImage h-[60%] w-[80%]" data-te-lazy-load-init data-te-lazy-delay="1500" src="./images/side_image_new2.webp" alt="" />
          </span>
          <span className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:order-1 mt-5 lg:mt-0">
            <div className="self-center lg:self-end">
              <img className="h-1/2 w-1/2 border-solid border-4 border-white rounded-lg shadow-2xl" data-te-lazy-load-init data-te-lazy-delay="1500" src='./images/Profile_image.jpeg' alt="" />
            </div>
            <div className="p-5">
              <h6 className="text-xl font-mono text-white font-semibold text-center lg:text-left">
                Testing Associate in Amazon, Experienced in Python, Selenium, Pytest, Robot Framework
              </h6>
            </div>
          </span>
        </div>

        <div className="bg-slate-600 h-[1px] mx-4 lg:ml-[250px] lg:mr-[250px]"></div>

        <div className="flex my-5 mx-5 px-5 py-5 flex-wrap justify-center">
          <div className="w-[250px] max-h-[100%] font-mono bg-[#D1D1D1] border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-2 mb-5">
            <div className="px-8 py-8">
              <a href="#">
                <img className="rounded-t-lg w-full h-full" data-te-lazy-load-init data-te-lazy-delay="1500" src="./images/coding.png" alt="" />
              </a>
            </div>
            <div className="px-3 py-3">
              <a href="#">
                <h5 className="mb-2 text-2xl w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">Projects!</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">See my projects</p>
              <a id="work_project" href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-[250px] max-h-[100%] font-mono bg-[#D1D1D1] border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-2 mb-5">
            <div className="px-8 py-8">
              <a href="#">
                <img className="rounded-t-lg w-full h-full" data-te-lazy-load-init data-te-lazy-delay="1500" src="./images/working-time.png" alt="" />
              </a>
            </div>
            <div className="px-3 py-3">
              <a href="#">
                <h5 className="mb-2 text-lg w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">Work Experiences!</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Efforts!</p>
              <a id="work_exp" href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-[250px] max-h-[100%] font-mono bg-[#D1D1D1] border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-2 mb-5">
            <div className="px-8 py-8">
              <a href="#">
                <img className="rounded-t-lg w-full h-full" data-te-lazy-load-init data-te-lazy-delay="1500" src="images/gamer.png" alt="" />
              </a>
            </div>
            <div className="px-3 py-3">
              <a href="#">
                <h5 className="mb-2 text-2xl w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">Gaming!</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join my Gaming journey!</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container inline-block py-10 justify-center items-center">
          <div className="flex items-center justify-center">
            <a href="https://www.youtube.com/@fighterchulbul6260" target="_blank" rel="noopener noreferrer">
              <div className="mx-5 flex flex-col group">
                <img className="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/youtube_new.png" alt="" />
              </div>
              <span className="hidden group-hover:inline-block">YouTube</span>
            </a>

            <a href="https://www.instagram.com/mandalsaheb/" target="_blank" rel="noopener noreferrer">
              <div className="mx-5 flex flex-col group">
                <img className="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/instagram.png" alt="" />
              </div>
              <span className="hidden group-hover:inline-block">Instagram</span>
            </a>

            <a href="https://www.linkedin.com/in/saheb-mandal-a1b227203/" target="_blank" rel="noopener noreferrer">
              <div className="mx-5 flex flex-col group">
                <img className="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/linkedin.png" alt="" />
              </div>
              <span className="hidden group-hover:inline-block">LinkedIn</span>
            </a>

            <a href="https://github.com/sahebawp" target="_blank" rel="noopener noreferrer">
              <div className="mx-5 flex flex-col group">
                <img className="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/github.png" alt="" />
              </div>
              <span className="hidden group-hover:inline-block">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
