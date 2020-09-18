// Mock data

const getRecommendations = async () => {
    return [
        'Boku no Hero Academia',
        'Naruto Shippuden',
        'Dragon Ball Z',
        'Toradora',
        'Plastic Memories'
    ];
};

const getSponsors = async () => {
    return [
        'João',
        'Maria',
        'Ricardo',
        'Pedro',
        'Lucas'
    ];
};

const getMostPopular = async () => {
    return [
        'Boku no Hero Academia',
        'Naruto Shippuden',
        'Dragon Ball Z',
        'Toradora',
        'Plastic Memories'
    ];
};

const getPosts = async (page = 0) => {
    const p = [];

    const delta = 10;
    const index = page * delta;

    return p.slice(index, index + delta);
};

const getPartnershipImages = async () => {
    return [
        'https://2.bp.blogspot.com/-5ZZ8_OiFQuQ/Vgw8C23esTI/AAAAAAAALqU/L3glTwFMsvs/s1600/button-02.png',
        'https://3.bp.blogspot.com/-qBz9wvx-IZw/Vgw85SmxraI/AAAAAAAALqg/AAtyra8TKks/s1600/banner1.gif',
        'https://3.bp.blogspot.com/-12ueIaFAeS8/Vgw85RLqd_I/AAAAAAAALqc/oEYuoJAQ-fE/s1600/banner2.gif',
        'https://1.bp.blogspot.com/-ITdGc7x-qi4/Vgw85xdkLLI/AAAAAAAALqs/IhasAvbgA1I/s1600/banner3.gif',
        'https://4.bp.blogspot.com/-ZiLWKysRTjY/Vgw86MUFlHI/AAAAAAAALq4/P0ooGgkPOYY/s1600/banner4.gif',
        'https://3.bp.blogspot.com/-avj1s6CO73w/Vgw86HF6IhI/AAAAAAAALq0/Nsb-2q7pYJM/s1600/banner5.png',
        'https://1.bp.blogspot.com/-xNmRy1PHEv0/Vgw86Z79RoI/AAAAAAAALq8/YHMCXyJ0FWI/s1600/banner9.png'
    ]
};

export {
    getRecommendations,
    getSponsors,
    getPosts,
    getPartnershipImages,
    getMostPopular
};