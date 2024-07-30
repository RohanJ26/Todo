import React from "react"

const Contact_Us=()=>{
    return(
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 py-6 md:py-0">
            <div className="bg-gray-200 p-5">
                <p className="font-bold text-4xl">Get in touch:</p>
                <p className="mb-5">Fill in the form to start a conversation</p>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 mix-blend-multiply" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s" alt="" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 mix-blend-multiply" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90U2u6KcG0gDv-IISwiUVBloH1oBtK4f8vQ&s" alt="" />
                        <p>+91 98765XXXXX</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 mix-blend-multiply" src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-mail-icon-vector-illustration-in-line-style-for-any-purpose-png-image_996816.jpg" alt="" />
                        <p>todosbyrohan@todos.com</p>
                    </div>
                </div>
            </div>
            <form className="flex flex-col gap-3">
                <input className="border-2 p-1 rounded-md border-gray-300 " type="text" placeholder="Full Name" />
                <input className="border-2 p-1 rounded-md border-gray-300 " type="text" placeholder="Email" />
                <input className="border-2 p-1 rounded-md border-gray-300 " type="text" placeholder="Telephone Number" />
                <button className="bg-orange-600 w-fit px-5 py-1 text-sm text-white font-semibold rounded-[4px]">Submit</button>
            </form>
        </div>
    )
}

export default Contact_Us