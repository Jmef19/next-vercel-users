"use client";
import Link from "next/link";

function User({ user }) {
  return (
    <div className="bg-blue-300 w-64 h-64 flex flex-col justify-center items-center rounded-lg shadow-lg border my-2 gap-y-4">
      <img src={user.avatar}></img>
      <Link
        href={`/users/${user.id}`}
        className="text-xl font-semibold text-blue-700 hover:underline"
      >
        {user.first_name} {user.last_name}
      </Link>
      <p className="text-slate-600 mt-2 text-sm">{user.email}</p>
    </div>
  );
}

export default User;
