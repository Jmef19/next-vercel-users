import User from "@/components/User";
import NavBar from "@/components/NavBar";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const users = await fetchUsers();
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        {users.map((user) => (
          <div key={user.id}>
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
}
