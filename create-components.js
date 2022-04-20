const fs = require("fs");

const filename =
  `${process.argv[2]}`.charAt(0).toUpperCase() + `${process.argv[2]}`.slice(1);

const componentTemplate = `
import s from './${filename}.module.scss'
const ${filename} = () => {
	return ()
}
export default ${filename}
`;
const createComponents = new Promise((res, rej) => {
  const path = `./src/components/${filename}`;
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err !== null) {
      rej(err);
    } else {
      res(path);
    }
  });
});
createComponents
  .then(async (path) => {
    await fs.writeFile(`${path}/index.js`, componentTemplate, (e) => {
      console.log(e);
    });

    return path;
  })
  .then(async (path) => {
    await fs.writeFile(`${path}/${filename}.modal.scss`, ".root {}", (e) => {
      console.log(e);
    });
  });
