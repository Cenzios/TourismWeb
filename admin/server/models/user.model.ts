import pool from "@/server/db/db.connection";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export async function createUser({
  name,
  email,
  password,
  role,
}: Omit<User, "id" | "created_at" | "updated_at">): Promise<User> {
  const result = await pool.query<User>(
    "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, password, role]
  );
  return result.rows[0];
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query<User>(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0] || null;
}

export async function getUserById(id: number): Promise<User | null> {
  const result = await pool.query<User>(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}
