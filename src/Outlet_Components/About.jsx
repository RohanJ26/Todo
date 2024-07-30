import React from "react";
const About=()=>{
    return(
        <div className="flex flex-col md:flex-row justify-center items-center flex-1 px-6 py-10 md:p-20 space-x-10 bg-white">
            <img className="h-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QkHVZ1AdyPggsguQRPoFwOePHFTSJMvAdA&s" alt="" />
            <div className="w-96 mt-6 md:mt-0 max-w-60 md:max-w-none">
                <div className="font-bold text-4xl mb-5">Todo is very useful</div>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus debitis nam quos quae, eum reiciendis nesciunt praesentium doloribus earum rerum officia dignissimos porro aliquid laboriosam exercitationem impedit aperiam veniam!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolores minima expedita animi odio incidunt blanditiis et impedit dolorum exercitationem?</p>
            </div>
        </div>
    )
}
export default About