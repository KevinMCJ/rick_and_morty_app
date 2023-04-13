let myFavorites = [];

const postFav = (req, res) => {
    const { id , name, status, species, gender, origin, image} = req.body;

    if(!id || !name || !image){
        return res.status(400).json({ message: "required information missing"});
    }

    const character = {
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
    }

    myFavorites.push(character);
    
    res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(404).json({ message: "id not found"});
    }

    const filteredFavs = myFavorites.filter((fav) => fav.id !== id);

    res.status(200).json(filteredFavs);
};

module.exports = {
    postFav,
    deleteFav,
}

