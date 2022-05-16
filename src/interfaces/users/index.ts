export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: Number;
  create_at: Date;
  updated_at: Date;
}
