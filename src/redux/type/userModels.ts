export interface UserModel {
  data: any;
  id: number;
  name: string;
  email: string;
  dob: string;
  supervisor_id: number;
  supervisor: {
    id: string;
    name: string;
  };
}
