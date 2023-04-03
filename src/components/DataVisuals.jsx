import { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, Legend, Tooltip, XAxis, YAxis, CartesianAxis, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
function DataVisuals(dataRecipes) {
    const [data, setData] = useState([
        { name: "No Cuisine", value: 0 },
        { name: "African", value: 0 },
        { name: "American", value: 0 },
        { name: "Chinese", value: 0 },
        { name: "European", value: 0 },
        { name: "French", value: 0 },
        { name: "German", value: 0 },
        { name: "Greek", value: 0 },
        { name: "Indian", value: 0 },
        { name: "Korean", value: 0 },
        { name: "Mediterranean", value: 0 },
        { name: "Middle Eastern", value: 0 }
    ]);

    const [timeData, setTimeData] = useState([
        { name: 15, PrepTime: 0 },
        { name: 20, PrepTime: 0 },
        { name: 25, PrepTime: 0 },
        { name: 30, PrepTime: 0 },
        { name: 35, PrepTime: 0 },
        { name: 40, PrepTime: 0 },
        { name: 45, PrepTime: 0 },
        { name: 50, PrepTime: 0 },
        { name: 55, PrepTime: 0 },
        { name: 60, PrepTime: 0 },
    ])

    const [hasPopulateData, setHasPopulateData] = useState(false);
    const [count, setCount] = useState(0);

    function populateData() {
        console.log("It's working....");
        console.log(dataRecipes.recipes);
        setCount(count + 1);

        if (count == 0) {
            dataRecipes.recipes.map((recipe) => {
                let newArr = [...data];  // Collect data on the cuisines
                let newTimeArr = [...timeData];  // Collect data on the recipes' prep/cooking time

                // Cuisines
                if (recipe.cuisines.length == 0) {
                    newArr[0].value += 1;
                }

                if (recipe.cuisines.includes("African")) {
                    newArr[1].value += 1;
                }

                if (recipe.cuisines.includes("American")) {
                    newArr[2].value += 1;
                }

                if (recipe.cuisines.includes("Chinese")) {
                    newArr[3].value += 1;
                }

                if (recipe.cuisines.includes("European")) {
                    newArr[4].value += 1;
                }

                if (recipe.cuisines.includes("French")) {
                    newArr[5].value += 1;
                }

                if (recipe.cuisines.includes("German")) {
                    newArr[6].value += 1;
                }

                if (recipe.cuisines.includes("Greek")) {
                    newArr[7].value += 1;
                }

                if (recipe.cuisines.includes("Indian")) {
                    newArr[8].value += 1;
                }

                if (recipe.cuisines.includes("Korean")) {
                    newArr[9].value += 1;
                }

                if (recipe.cuisines.includes("Mediterranean")) {
                    newArr[10].value += 1;
                }

                if (recipe.cuisines.includes("Middle Eastern")) {
                    newArr[11].value += 1;
                }

                if (recipe.cuisines.includes("Thai")) {
                    newArr[12].value += 1;
                }

                setData(newArr);

                // Time
                if (recipe.readyInMinutes == 15) {
                    newTimeArr[0].PrepTime += 1;
                } else if (recipe.readyInMinutes == 20) {
                    newTimeArr[1].PrepTime += 1;
                } else if (recipe.readyInMinutes == 25) {
                    newTimeArr[2].PrepTime += 1;
                } else if (recipe.readyInMinutes == 30) {
                    newTimeArr[3].PrepTime += 1;
                } else if (recipe.readyInMinutes == 35) {
                    newTimeArr[4].PrepTime += 1;
                } else if (recipe.readyInMinutes == 40) {
                    newTimeArr[5].PrepTime += 1;
                } else if (recipe.readyInMinutes == 45) {
                    newTimeArr[6].PrepTime += 1;
                } else if (recipe.readyInMinutes == 50) {
                    newTimeArr[7].PrepTime += 1;
                } else if (recipe.readyInMinutes == 55) {
                    newTimeArr[8].PrepTime += 1;
                } else if (recipe.readyInMinutes == 60) {
                    newTimeArr[9].PrepTime += 1;
                }

            })
        }


        console.log(hasPopulateData);



        setHasPopulateData(true);
    }


    return (
        <div className="DataVisuals">
            <button className="DataVisualsButton" onClick={populateData}>Click here to see the data visuals</button>
            {hasPopulateData ?
                <div className="BarChartVisual">
                    <h3>Cuisines</h3>
                    <BarChart width={1400} height={400} data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5, }}>
                        <XAxis dataKey="name" interval={0} />
                        <YAxis />
                        <Bar dataKey="value" fill="#8884d8" />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    </BarChart>
                </div>
                : null
            }

            {hasPopulateData ?
                <div className="BarChartVisual">
                    <h3>Amount of Time to Prepare a Recipe (in minutes)</h3>
                    <BarChart width={1400} height={400} data={timeData} margin={{ top: 5, right: 10, left: 0, bottom: 5, }}>
                        <XAxis dataKey="name" interval={0} />
                        <YAxis />
                        <Bar dataKey="PrepTime" fill="#e01f54" />
                        <Tooltip />
                        <Legend />
                    </BarChart>
                </div>
                : null
            }




        </div>
    )
}

export default DataVisuals