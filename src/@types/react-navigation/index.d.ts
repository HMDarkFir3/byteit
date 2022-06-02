import { PlatesDTO } from "../../dtos/PlatesDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Profile: undefined;
      MenuDetails: {
        details: {
          name: string;
          price: string;
          about: string;
          stars: number;
          preparing: number;
          image: string;
          type: string;
        };
      };
    }
  }
}
