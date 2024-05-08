// Password generator
const generator = require("generate-password");
const passwordGenerator = () => {
  const password = generator.generate();
  console.log(password);
};
passwordGenerator()