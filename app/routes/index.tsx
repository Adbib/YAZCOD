import Jidah from "~/components/Jidah";
import Theme from "../utils/theme";

export default function Index() {
  const themeSelected = Theme.theme_name;
  return themeSelected === "Jidah" ? (
    <Jidah />
  ) : themeSelected === "Idham" ? (
    <h1>Jidah Theme</h1>
  ) : (
    <h1>Default</h1>
  );
}
