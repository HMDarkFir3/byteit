import "styled-components";
import { light } from "../../themes/light";

declare module "styled-components" {
  interface ThemeType {
    title: string;

    colors: {
      skeleton: {
        background: string;
        card: string;
      };

      screens: {
        sign_in: {
          background: string;

          title: string;

          placeholder: string;
          input: string;
          border: string;
          continue_with: string;
          divider: string;
        };
        menu: {
          background: string;

          title: string;
        };
        menu_details: {
          background: string;
          primary: string;
          header: string;

          primary_text: string;
          secondary_text: string;
          price: string;
          placeholder: string;
        };
        demands: {
          background: string;

          count: string;
          label: string;
        };
        groups: {
          background: string;

          count: string;
          label: string;
        };
        profile: {
          background: string;

          image_border: string;
          edit_icon: string;

          title: string;
          description: string;
          placeholder: string;
        };
      };
      components: {
        header: {
          border: string;
        };
        search: {
          background: string;

          title: string;
          placeholder: string;
        };
        category_food: {
          active: string;
          inactive: string;

          active_title: string;
          inactive_title: string;
        };
        menu_card: {
          background: string;

          title: string;
          price: string;

          add_button: string;
          color_button: string;
        };
        button: {
          background: string;
          title: string;
        };
        linear_button: {
          background: string[];
          title: string;
        };
        o_auth_button: {
          background: string;
          border: string;
        };
        info_card: {
          background: string;
          title: string;
        };
        accompaniment_type_card: {
          background: string;

          title: string;
          placeholder: string;
        };
        accompaniment_select_card: {
          active: string;
          inactive: string;
          border: string;

          title: string;
          placeholder: string;
        };
        demand_card: {
          background: string;

          title: string;
          price: string;
          count: string;
          count_button: string;
          count_icon: string;

          border: string;
        };
        group_card: {
          background: string;

          title: string;
          placeholder: string;
          group_members: string;
          group_member_label: string;
        };
        settings_card: {
          title: string;
        };
      };

      navigation_bar: {
        color: string;
        type: string;
      };

      switch: {
        thumb_color: string;
        track_color: string;
      };

      bottom_tabs: {
        background: string;

        active: string;
        inactive: string;
      };
    };

    fonts: {
      regular: string;
      medium: string;
      semi_bold: string;
    };
  }

  export interface DefaultTheme extends ThemeType {}
}
