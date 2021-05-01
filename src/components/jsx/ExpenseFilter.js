import React from "react";

import "../styles/ExpenseFilter.css";

const ExpenseFilter = ({onChangeFilter, currentYearSelected}) => {
  

    const handleChange = (e) => {

        onChangeFilter(e.target.value);
    };

    //--------------------------------------
    //to be used when component loaded
    //   useEffect(() => {
    //     console.log();
    // }, []);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={handleChange} value={currentYearSelected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
