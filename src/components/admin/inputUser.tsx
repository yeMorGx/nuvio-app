export default function inputUser() {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-(--foreground) font-medium">User</label>
      <input
        type="text"
        className="bg-(--input-bg) border border-(--input-border) rounded px-4 py-2 text-(--foreground) focus:outline-none focus:ring-2 focus:ring-(--primary)"
        placeholder="username"
      />
    </div>
  );

}