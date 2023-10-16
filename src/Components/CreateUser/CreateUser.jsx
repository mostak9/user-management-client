import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const CreateUser = () => {
  return (
    <div>
      <Link to={"/"} className="px-5 py-3 shadow-lg font-medium ">
        <IoIosArrowRoundBack className="inline-block ml-2" />
        All Users
      </Link>
      <div className="mt-8 mb-6">
        <div className="text-center">
          <h1 className="text-2xl font-medium">New User</h1>
          <p className="text-gray-400">Use below form to create new account</p>
        </div>
        <div className="mt-6">
          <form action="" className=" space-y-6">
            {/* name input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-400 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type name here"
                className="input input-bordered w-full"
              />
            </div>
            {/* email input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-400 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type email here"
                className="input input-bordered w-full"
              />
            </div>
            {/* Gender field */}
            <div  className="flex items-center gap-10">
                <p className="font-medium text-gray-400">Gender</p>
                <div className="flex gap-12 items-center">
                    <div className="flex items-center gap-3">
                        <input type="radio" id="male" name="gender" className="radio checked:bg-sky-600"/>
                        <label htmlFor="male" className="font-medium">Male</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="radio" id="female" name="gender" className="radio checked:bg-sky-600"/>
                        <label htmlFor="female" className=" font-medium">Female</label>
                    </div>
                </div>
            </div>
            {/* Status field */}
            <div  className="flex items-center gap-10">
                <p className="font-medium text-gray-400">Status</p>
                <div className="flex gap-12 items-center">
                    <div className="flex items-center gap-3">
                        <input type="radio"id="active" name="status" className="radio checked:bg-sky-600"/>
                        <label htmlFor="active" className=" font-medium">Active</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="radio" id="inactive" name="status" className="radio checked:bg-sky-600"/>
                        <label htmlFor="inactive" className="font-medium">Inactive</label>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" className="btn w-full bg-sky-600 text-white hover:text-black">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
