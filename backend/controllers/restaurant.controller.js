import { dbconnect } from "../utils/dbconnect.js";

//FUNCTION TO GET THE RESTAURANTS DATA FROM THE DATABASE
export async function getRestaurants(req, res) {
    try {
        const restaurants = await dbconnect.restaurant.findMany({
            include: {
                reviews: true,
            },
        });
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch restaurants" });
    }
}

//FUNCTION TO GET THE SPECIFIC RESTAURANTS DATA  FROM THE DATABASE USING ID

export async function getRestaurantByID(req, res) {
    try {
        const { id } = req.params;

        // Find restaurant by ID with reviews and user
        const restaurant = await prisma.restaurant.findUnique({
            where: { id },
            include: {
                reviews: {
                    include: {
                        user: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        });

        // Check if restaurant exists
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found" });
        }

        res.status(200).json(restaurant);
    } catch (error) {
        console.error(
            `Error fetching restaurant with ID ${req.params.id}:`,
            error
        );
        res.status(500).json({ error: `Error fetching restaurant with ID ${req.params.id}` });
    }
}

// Return restaurant data with 200 status
