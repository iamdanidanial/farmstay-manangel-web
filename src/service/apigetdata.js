import { getData } from "./apiservice";

const getDataGuests = async () => {
    return await getData('/guest');
};

const getDataReview = async () => {
    return await getData('/review');
};

export { getDataGuests,getDataReview };