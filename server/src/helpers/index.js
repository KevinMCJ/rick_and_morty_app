const { User } = require("../DB_connection");

const createSuperUser = async () => {
  const superUserEmail = process.env.USER_MAIL;
  const superUserPass = process.env.USER_PASS;

  const superUser = await User.findOne({ where: { email: superUserEmail } });

  if (!superUser) {
    await User.create({
      email: superUserEmail,
      password: superUserPass,
    });
  }
};

module.exports = { createSuperUser };
