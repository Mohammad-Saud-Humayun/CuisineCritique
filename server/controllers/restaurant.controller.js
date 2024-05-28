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
        res.status(500).json({ error: "Failed to fetch the restaurants !!!" });
    }
}

//FUNCTION TO GET THE SPECIFIC RESTAURANTS DATA  FROM THE DATABASE USING ID

export async function getRestaurantByID(req, res) {
    try {
        const { id } = req.params;

        // Find restaurant by ID with reviews and user
        const restaurant = await dbconnect.restaurant.findUnique({
            where: { id },
            include: {
                reviews: {
                    include: {
                        user: true,
                        rating: true,
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


export const addreview = async (req, res) => {
    console.log(req)
    try {
        const {
            userId,
            restaurantId,
            review,
            foodQuality,
            ambiance,
            comfort,
            service,
            valueForMoney,
            averageRating,
            useremail,
        } = req.body;

        console.log("Here data: ", req.body)

        // Create a new review record in the database
        const newReview = await dbconnect.review.create({
            data: {
                review,
                user: userId,
                restaurant: restaurantId,
                rating: {
                    create: {
                        foodQuality,
                        ambiance,
                        comfort,
                        service,
                        valueForMoney,
                        averageRating,
                    },
                },
                restaurant: {
                    connect: {
                        id: restaurantId,
                    },
                },
            },
        });
       console.log(newReview)
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};