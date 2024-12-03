const { default: NavBar } = require("@/components/NavBar");

async function loadUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  const { data } = await res.json();
  return data;
}

async function UserDetails({ params }) {
  const { id } = params;
  const user = await loadUser(id);

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="bg-blue-300 w-64 h-64 flex flex-col justify-center items-center rounded-lg shadow-lg border my-2 gap-y-4">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}'s Avatar`}
            className="rounded-full mb-4"
          />
          <p className="text-xl font-semibold text-blue-700">
            {user.first_name} {user.last_name}
          </p>
          <p className="text-slate-600 mt-2 text-sm">{user.email}</p>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
