import pool from "../config/db.js";

const favoriteModel = {
    createFavorite: async (userId, favoriteData) => {
        const { items } = favoriteData;
        const result = await pool.query(
            'INSERT INTO favorites (user_id, items) VALUES ($1, $2) RETURNING *',
            [userId, JSON.stringify(items)] // <-- stringify items here
        );
        return result.rows[0];
    }
}

export default favoriteModel;