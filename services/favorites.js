import mongoose from 'mongoose';

const uri = 'mongodb+srv://mateosan67:Supermateo1@comp229.adj7f.mongodb.net/groupProject?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error conectándose a MongoDB:', err));

const favoriteSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: String, // ID del usuario que agregó el favorito
    createdAt: { type: Date, default: Date.now }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

export async function addFavorite(data) {
    const favorite = new Favorite(data);
    await favorite.save();
    console.log('Fav added', favorite);
    return favorite;
}

export async function getFavorites() {
    const favorites = await Favorite.find();
    console.log('Favoritos:', favorites);
    return favorites;
}