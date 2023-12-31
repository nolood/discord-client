import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IAsideItems {
  id: string;
  title: string;
  img: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  route: string;
}
