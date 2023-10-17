import { Link, useLoaderData } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineModeEditOutline, MdOutlineDelete } from "react-icons/md";
import swal from "sweetalert";
import { useState } from "react";

const AllUsers = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this the user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {

                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining);

              swal("User deleted successfully", {
                icon: "success",
              });
            }
          });
      } else {
        swal("User not deleted!");
      }
    });
  };
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
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex items-center gap-3">
                  <button title="Edit user" className="btn btn-sm shadow-md">
                    <MdOutlineModeEditOutline className="text-xl" />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    title="Delete user"
                    className="btn btn-sm shadow-md"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
