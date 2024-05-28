import { dbconnect } from "../utils/dbconnect";

export const addreview = async (req, res) => {
    console.log("addreview fuction call ")
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
        const newReview = await dbconnect.review.createMany({
            data: {
                review,
                userId,
                restaurantId,
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
                user: {
                    connect: {
                        email: useremail,
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
