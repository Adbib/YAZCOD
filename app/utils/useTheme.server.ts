import fs from "fs/promises";
import path from "path";
export default async function useTheme(name: string) {
  let theme;
  const themesFolder = await fs.readdir(`${__dirname}/../../app/themes`, {
    withFileTypes: false,
  });
  const themeCheck = await Promise.all(
    themesFolder
      .filter((dirent) => !dirent.includes("."))
      .map(async (dirent) => {
        if (name === dirent) {
          // console.log("yes");
          theme = name;
          return name;
        } else {
          // console.log("no");
        }
      })
  );
  // const pp = await path.dirname(`./app/themes/themes`);
  // console.log(pp);
  // console.log(await fs.readdir(pp));

  return (await themeCheck) && theme && `./app/themes/${theme}`;
}
