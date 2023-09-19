import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    // step-9 
    // i need some json data that will have price options for my gym.please provide a reallstic price option name.also add feature for each price options.do not forget to add id
    // make it json 
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to cardio",
                "Locker room access",
                "Free towel service",
                "Fitness assessment",
                "Access to group fitness"
            ],
            "price": 39
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Full access to all gym facilities",
                "Unlimited access to group ",
                "Personal training",
                "Sauna and steam room access",
                "Nutritional consultation"
            ],
            "price": 79
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access for 2 adults and 2 children",
                "Full access to all gym facilities",
                "Access to family-friendly fitness classes",
                "Childcare services during workouts",
                "Discounted personal training sessions"
            ],
            "price": 80
        }
    ]

   return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            {/* step-10  */}
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}

                        // step-11  
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;