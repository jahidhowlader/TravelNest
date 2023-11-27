import RestaurantItems from "../../../components/restaurantItems/RestaurantItems";

const RestaurantMenu = () => {
    return (
        <section className="my-container my-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl primary-font font-bold text-center mb-10 lg:mb-20">Menu Highlights</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-5 xl:gap-0">
                {/* breakfast */}
                <div>
                    <h3 className="text-2xl lg:text-3xl primary-font font-bold mb-2">Breakfast</h3>
                    <span className="font-medium opacity-90">8.30 AM – 11:00 AM</span>

                    <div className="space-y-8 mt-8">

                        <RestaurantItems img={'/restaurant/item1.jpg'} name={'Fried Chiken'} category={'Chicken / Rosemary / Lemon'}/>
                        <RestaurantItems img={'/restaurant/item2.jpg'} name={'Belgian Waffle'} category={'Mushroom / Veggie'}/>
                        <RestaurantItems img={'/restaurant/item3.jpg'} name={'Salmon Steak'} category={'Veggie / White Sources'}/>
                        <RestaurantItems img={'/restaurant/item4.jpg'} name={'Eggs Tomato'} category={'Mushroom / Veggie'}/>
                    </div>
                </div>
                
                {/* Lunch */}
                <div>
                    <h3 className="text-2xl lg:text-3xl primary-font font-bold mb-2">Lunch</h3>
                    <span className="font-medium opacity-90">12.00 PM – 2:30 PM</span>

                    <div className="space-y-8 mt-8">

                        <RestaurantItems img={'/restaurant/item4.jpg'} name={'Fried Chiken'} category={'Chicken / Rosemary / Lemon'}/>
                        <RestaurantItems img={'/restaurant/item5.jpg'} name={'Belgian Waffle'} category={'Veggie / White Sources'}/>
                        <RestaurantItems img={'/restaurant/item6.jpg'} name={'Salmon Steak'} category={'Mushroom / Veggie'}/>
                        <RestaurantItems img={'/restaurant/item7.jpg'} name={'Eggs Tomato'} category={'Mushroom / White Sources'}/>
                    </div>
                </div>
                
                {/* THE DINNER */}
                <div>
                    <h3 className="text-2xl lg:text-3xl primary-font font-bold mb-2">The Dinner</h3>
                    <span className="font-medium opacity-90">7.00 PM – 10:30 PM</span>

                    <div className="space-y-8 mt-8">

                        <RestaurantItems img={'/restaurant/item8.jpg'} name={'Fried Chiken'} category={'Chicken / Rosemary / Lemon'}/>
                        <RestaurantItems img={'/restaurant/item9.jpg'} name={'Belgian Waffle'} category={'Veggie / White Sources'}/>
                        <RestaurantItems img={'/restaurant/item9.jpg'} name={'Salmon Steak'} category={'Mushroom / Veggie'}/>
                        <RestaurantItems img={'/restaurant/item3.jpg'} name={'Eggs Tomato'} category={'Mushroom / White Sources'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestaurantMenu;