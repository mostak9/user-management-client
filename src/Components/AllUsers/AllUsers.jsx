import { Link, useLoaderData } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";

const AllUsers = () => {
    const loadedUsers =  useLoaderData();
  return (
    <div>
      <Link to={"/createUser"} className="px-5 py-3 shadow-lg font-medium ">
        New User <BiSolidUser className="inline-block ml-2" />
      </Link>

      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
                loadedUsers.map((user, idx) => <tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.gender}</td>
                    <td>{user?.status}</td>
                    <td></td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
