import { dbconnect } from "../utils/dbconnect";

export const adduser = async (req, res) => {
    try {
        const { name, email, image } = req.body;

        console.log("Here data: ", req.body);

        // Check if user already exists
        const existingUser = await dbconnect.user.findFirst({
            where: {
                email: email,
            },
        });

        
        if (existingUser) {
            // User already exists, return an error message
            return res.status(400).json({ error: "User already exists" });
        }

        // Create a new review record in the database
        const newUser= await dbconnect.review.createMany({
            data: {
                email,
                name,
                image
            },
        });
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
