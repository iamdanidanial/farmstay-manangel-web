import { getGuests } from "./apiservice";

const getDataGuests = async () => {
    return await getGuests('/guest');
};

export { getDataGuests };