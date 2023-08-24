const { Favorite } = require("../DB_connection");

const getFavorites = async (userId) => {
    if(!userId) throw Error("Id not found");

    const favorites = await Favorite.findAll({
        where: {
            UserId: userId,
        },
    });
    
    return favorites;
}

module.exports = getFavorites;
