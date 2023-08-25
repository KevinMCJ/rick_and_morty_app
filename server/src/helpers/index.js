const { User } = require("../DB_connection");

const createSuperUsers = async () => {
  const superUsersData = [
    { email: "rick@gmail.com", password: "rickandmorty" },
    { email: "morty@gmail.com", password: "rickandmorty" },
  ];

  for (const userData of superUsersData) {
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });

    if (!existingUser) {
      await User.create(userData);
    }
  }
};

module.exports = { createSuperUsers };
