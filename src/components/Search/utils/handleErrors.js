
const handleErrors = (yearStart, yearEnd, priceStart, priceEnd) =>{
    const newErrors = [];
    if((yearStart && !yearEnd) || (!yearStart && yearEnd)) newErrors.push("You are missing the start or end of the year range!")
    if((priceStart && !priceEnd) || (!priceStart && priceEnd)) newErrors.push("You are missing the beginning or end of the price range!")

    return newErrors;
}

export default handleErrors;