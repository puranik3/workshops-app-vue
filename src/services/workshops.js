import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const getWorkshopsByPage = async ( _page ) => {
    const response = await axios.get( `${baseUrl}/workshops`, {
        params: {
            // _page: _page
            // _page
            page: _page
        },
        // headers: {
        //     Authorization: 'skdbvkbvebvkb',
        // }
    } );
    // return response.data;
    return response.data.data;
};

const getWorkshopsById = async ( id ) => {
    const response = await axios.get( `${baseUrl}/workshops/${id}` );
    // return response.data;
    return response.data.data;
};

export {
    getWorkshopsByPage,
    getWorkshopsById
};