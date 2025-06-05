import favoriteModel from '../modules/favoriteModel.js';

const favoriteController = {
    createFavorite: async (req, res) => {
        const { userId } = req.params;
        const favoriteData = req.body;
        try {
            const newFavorite = await favoriteModel.createFavorite(userId, favoriteData);
            res.status(201).json(newFavorite);
        } catch (error) {
            console.error('Error creating favorite:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default favoriteController;