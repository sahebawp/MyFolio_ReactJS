import logo from './logo.svg';
import './App.css';
// import appdevelopment from "./assets/app-development.png"
// import workExperienece from "./assets/working-time.png"

function App() {
  return (
    <div className="App">
        <div class="Container h-full w-full bg-[#C1C1C1] justify-center">
        <nav class="bg-[#353535] text-white py-2 flex items-center">
            <ul class="nav-links flex flex-row px-4 justify-end space-x-4 items-end max-h-[100%]]">
                <li class="mr-4"><a href="#" class="hover:text-yellow-400">Home</a></li>
                <li>
                    <img class="w-10 h-10 hover:cursor-pointer" src="./images/app-development.png " alt="" />
                </li>
                <li class="mr-4">
                    <a href="#" class="hover:text-[#D6D0C7] font-mono font-bold">Socials</a>
                </li>
                <li class="mr-4">
                    <a href="#work_exp" class="hover:text-[#D6D0C7] font-mono font-bold">Experiences</a>
                </li>
                <li><a href="#work_project" class="hover:text-[#D6D0C7] font-mono font-bold">Projects</a></li>
            </ul>
            {/* <input type="text" class="border text-black h-[50%] border-white rounded-lg py-2 ml-auto" /> */}
        </nav>
        {/* <!-- Hero sectio */}
        <div class="MainSection mx-2 my-5 px-64 py-10  flex justify-between items-center flex-row-reverse bg-[#8C8C8C] shadow-2xl rounded-md">
            <span>
                <img class="SideImage h-[60%] w-[80%]" src="./images/side_image_new2.webp" alt="" />
            </span>
            <span class="mx-4 w-1/2 flex justify-center flex-col items-center">
                <div class=" place-self-end ">
                    <img class="h-1/2 w-1/2 border-solid border-4 border-white rounded-lg shadow-2xl " src='./images/Profile_image.jpeg'>
                    </img>
                </div>
                <div class="p-5 place-self-start">
                    <h6 class="text-xl font-mono text-white font-semibold  ">
                        Aspiring Web Developer! Working as Automation Engineer in Amazon
                    </h6>
                </div>
                
            </span>
        </div>
        {/* <!-- divider line --> */}
        <div class="bg-slate-600 px-9 h-[1px] ml-[250px] mr-[250px]"></div>
        {/* <!-- Showcase section --> */}
        <div class="flex my-5 mx-5 px-5 py-5 ">
            <div class=" w-[100%]  bg-[#8C8C8C] flex items-center justify-evenly">
                {/* <!-- Projects --> */}
                <div
                    class="w-[250px] max-h-[100%] font-mono  bg-[#D1D1D1] border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-8 py-8">
                        <a href="#">
                            <img class="rounded-t-lg w-full  h-full" src="./images/coding.png" alt="" />
                        </a>
                    </div>
                    <div class="px-3 py-3">
                        <a href="#">
                            <h5
                                class="mb-2  text-2xl w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">
                                Projects!
                            </h5>
                        </a>
                        <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                            See my projects
                        </p>
                        <a id="work_project" href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* <!-- Experiences --> */}
                <div
                    class="max-w-[250px] max-h-[100%] my-10 font-mono  bg-[#D1D1D1] border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-8 py-8">
                        <a href="#">
                            <img class="rounded-t-lg w-full  h-full" src="./images/working-time.png" alt="" />
                        </a>
                    </div>

                    <div class="px-3 py-3">
                        <a href="#">
                            <h5
                                class="mb-2 text-lg w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">
                                Work Experiences!
                            </h5>
                        </a>
                        <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                            Efforts!
                        </p>
                        <a id="work_exp" href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>


                {/* <!-- Hobbies --> */}
                <div
                    class="w-[250px] max-h-[100%] bg-[#D1D1D1] font-mono border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-8 py-8">
                        <a href="#">
                            <img class="rounded-t-lg w-full  h-full" src="images/gamer.png" alt="" />
                        </a>
                    </div>
                    <div class="px-3 py-3">
                        <a href="#">
                            <h5
                                class="mb-2 text-2xl w-full h-full font-bold tracking-tight text-gray-900 dark:text-white">
                                Gaming!
                            </h5>
                        </a>
                        <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                            Join my Gaming journey!
                        </p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-[#6F6F6F] rounded-lg hover:bg-gray-100 hover:border hover:border-gray-800 hover:border-solid hover:border-opacity-100 transition-opacity border-opacity-0 duration-500">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container max-h-full max-w-full block py-10 flex-row justify-center items-center">
            <div class="flex items-center justify-center">
                <a href="https://www.youtube.com/@fighterchulbul6260">
                    <div class="mx-5 flex flex-col group">
                        <img class="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/youtube_new.png" alt=""/>
                        
                        
                    </div>
                    <span  class="hidden group-hover:inline-block">
                        Facebook
                    </span>
                    

                </a>

                <a href="https://www.instagram.com/mandalsaheb/">
                    <div class="mx-5 flex flex-col group">
                        <img class="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/insta.png" alt=""/>
                        
                        
                    </div>
                    <span  class="hidden group-hover:inline-block">
                        Instagram
                    </span>

                </a>
               
                <a href="https://github.com/sahebawp">
                    <div class="mx-5 flex flex-col group">
                        <img class="h-10 w-10 hover:scale-110 hover:cursor-pointer" src="./images/github_new.png" alt=""/>
                        
                        
                    </div>
                    <span class="hidden group-hover:inline-block">
                        Github
                    </span>

                </a>
                
               
            </div>
            
        </div>
        
    </div>
    
    
    </div>
  );
}

export default App;
