import React, { useEffect, useState } from "react";
import RestaurantDescription from "./RestaurantDescription";
import { useParams } from "react-router-dom";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
// import menu from "../../../../public/image.png"
import Tabs from "../../../components/Tabs/Tabs";
import RestaurantLocationCard from "../../../components/Cards/DirectionCard";
import ReviewForm from "../../../components/Review/ReviewForm";
import { getDataById } from "../../../../actions/getdatabyId";
import Navbar from "../../../components/Navbar/Navbar";
import Reviews from "../../../components/Review/ReviewRating";
import ReviewRating from "../../../components/Review/ReviewRating";


const SinglePage = () => {
    const params = useParams();
    const [resaturant, setResaturant] = useState({});

    useEffect(() => {
        console.log("hello")
        const fetchData = async () => {
            const data = await getDataById(params.RestaurantId);
            setResaturant(data);
        };
        fetchData();
    },[params.RestaurantId]);

    const tabData = [
        {
            name: "Overview",
            content: (
                <div className=" relative w-full min-h-screen md:flex gap-10">
                    <div className=" md:w-[65%]">
                        <p>{resaturant && resaturant.description}</p>
                    </div>
                    <aside className="md:sticky md:top-5 md:right-0  h-[500px]   hidden xl:flex md:w-[35%] p-2.5">
                        {resaturant && (
                            <RestaurantLocationCard
                                address={resaturant.address}
                                phone={resaturant.phoneNumbers}
                            />
                        )}
                    </aside>
                </div>
            ),
        },
        {
            name: "Menu",
            content: (
                <div className="w-full flex justify-center items-center">
                    <div className=" relative h-[600px] w-[500px] flex items-center flex-wrap gap-10">
                    {resaturant &&
                    resaturant.menuimage &&
                    resaturant.menuimage.length > 0 &&
                    resaturant.menuimage.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            className="h-full w-full"
                        />
                    ))}
                    </div>
                </div>
            ),
        },
        {
            name: "Reviews",
            content: (
                <div>
                    <ReviewRating params={params.RestaurantId}/>
                    
                </div>
            ),
        },
    ];

    return (
        <main>
            <Navbar/>
            <div className="md:px-52 md:py-12 px-4 py-8 bg-white  ">
                {resaturant ? (
                    <div className="md:h-[370px] md:w-[1100px] space-y-12">
                        <section>
                            <ImageSlider imageData={resaturant.image} />
                        </section>
                        <section>
                            <RestaurantDescription
                                cuisine={resaturant.cuisine}
                                close={resaturant.close}
                                open={resaturant.open}
                                address={resaturant.address}
                                name={resaturant.name}
                            />
                        </section>
                        <section>
                            <Tabs tabs={tabData} />
                        </section>
                    </div>
                ) : (
                    <div className={`font-bold text-black`} > NO DATA  </div>
                )}
            </div>
        </main>
    );
};

export default SinglePage;
