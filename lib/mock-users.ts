export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

export const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@mail.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@mail.com", role: "user" },
  { id: 3, name: "Alex Brown", email: "alex@mail.com", role: "user" },
];
