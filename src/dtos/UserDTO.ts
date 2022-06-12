export interface UserDTO {
  uid: string;
  name: string;
  email: string;
  image?: string | null;
  has_image?: boolean;
  user_color: string[];
}
