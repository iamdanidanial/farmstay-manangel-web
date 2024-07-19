import { getData } from "./apiservice";

const getDataGuests = async () => {
    return await getData('/guest');
};

const getDataReview = async () => {
    return await getData('/review');
};

const getDataService = async () => {
    return await getData('/service');
};

const getDataRoom = async () => {
    return await getData('/room');
};

const getDataFacility = async () => {
    return await getData('/facility');
};

const getDataCountries = async () => {
    return await getData('/countries');
};
const getDataGallery = async () => {
    return await getData('/gallery');
};


export { getDataGuests,getDataReview, getDataService, getDataRoom, getDataFacility, getDataCountries, getDataGallery };