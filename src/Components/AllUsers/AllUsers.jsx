import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";

const AllUsers = () => {
  return (
    <div>
      <Link to={"/"} className="px-5 py-3 shadow-lg font-medium ">
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
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
