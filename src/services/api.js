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

const getRecruitmentOptions = async () => {
    return [{
            title: 'Tradutor',
            description: 'Irá traduzir o mangá',
            color: 'info',
            variations: {
                title: 'Idioma',
                values: [{
                        title: 'Inglês',
                        testUri: '#/NotFound'
                    },
                    {
                        title: 'Japonês',
                        testUri: '#/NotFound'
                    },
                    {
                        title: 'Espanhol',
                        testUri: '#/NotFound'
                    }
                ]
            }
        },
        {
            title: 'Revisor',
            description: 'Irá corrigir eventuais erros gramaticais das traduções',
            color: 'primary',
            testUri: 'https://drive.google.com/open?id=0B8uFpnBT5r3yY2tLMzF3cFJ5WWM'
        },
        {
            title: 'Editor',
            description: 'Irá editar as imagens do mangá',
            color: 'warning',
            variations: {
                title: 'Função',
                values: [{
                        title: 'Ambas',
                        description: 'Remove os textos originais e coloca os traduzidos no mangá',
                        testUri: 'https://drive.google.com/file/d/1Yb6aQWGGQhFY0YLzsDU7zzZ2sNbUZqYQ/view?usp=sharing'
                    },
                    {
                        title: 'Cleaner',
                        description: 'Remove os textos originais do mangá',
                        testUri: 'https://drive.google.com/open?id=1ZKOkwIK8-NN_VwgeC6y8J-BQmoUDWdsp'
                    },
                    {
                        title: 'Type',
                        description: 'Coloca os textos traduzidos no mangá',
                        testUri: 'https://drive.google.com/file/d/1V7ZdVIKnI85eFgsmnY4L1ftf5cbFPIKk/view?usp=sharing'
                    }
                ]
            }
        }
    ];
};

const getPartners = async () => {
    return [{
            uri: 'https://www.animestelecine.com/',
            name: 'Animes Telecine',
            image: 'https://www.animestelecine.com/wp-content/uploads/2017/02/AnimesTelecine.jpg'
        },
        {
            uri: 'https://mundomanga-kun.blogspot.com.br/',
            name: 'Mundo Mangá-Kun',
            image: 'https://4.bp.blogspot.com/-uOOCcdGLD_Q/UcTAlPr-75I/AAAAAAAAAUA/wZtlGSZrums/s1600/button120x60_zps75703a52.png'
        },
        {
            uri: 'https://www.familyyuki.blogspot.com/',
            name: 'Family Yuki',
            image: 'https://4.bp.blogspot.com/-sTN5vfvNLJk/T0EQO-kdHXI/AAAAAAAABOg/I_ZoFdpZUg8/s1600/bannerfy.gif'
        },
        {
            uri: 'https://eensyweensymangas.wordpress.com/',
            name: 'Eensyweensy Mangás',
            image: 'https://eensyweensymangas.files.wordpress.com/2010/09/5.png?w=460'
        },
        {
            uri: 'https://www.shirogatari.blogspot.com.br/',
            name: 'Shirogatari',
            image: 'https://4.bp.blogspot.com/--tyceSTuuxQ/UTdHBVdrrGI/AAAAAAAAALU/Px6UGKRRcTQ/s1600/bt2.jpg'
        },
        {
            uri: 'https://kyodaiscans.com.br/',
            name: 'Kyoday Scans',
            image: 'https://i.imgur.com/SdVJ7dT.png'
        },
        {
            uri: 'https://www.myotakuway.com.br/',
            name: 'My Otaku Way',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/wqr91s.gif'
        },
        {
            uri: 'https://omoshiroiscan.blogspot.pt/',
            name: 'Omoshiroi Scan',
            image: 'https://3.bp.blogspot.com/-4W0B-wEzR4U/UjNFpOZWT7I/AAAAAAAAAGc/3caexGcat_Q/s1600/Banner-Omoshiroi-(yowamushi).gif'
        },
        {
            uri: 'https://seikou-scan.blogspot.com.br/',
            name: 'Seikou Scan',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/143p7aa.gif'
        },
        {
            uri: 'https://breakerscans.blogspot.com.br/',
            name: 'Breaker Scans',
            image: 'https://i.imgur.com/MxafNkO.png'
        },
        {
            uri: 'http://itadakimasu-scan.com/',
            name: 'Itadakimasu Scans',
            image: 'http://itadakimasu-scan.com/assets/img/logon.png'
        },
        {
            uri: 'https://suiseiscans.blogspot.com.br/',
            name: 'Suisei Scans',
            image: 'https://i.imgur.com/6baNnY6.png?1'
        },
        {
            uri: 'https://lazyscans.wordpress.com/',
            name: 'Lazy Scans',
            image: 'https://lazyscans.files.wordpress.com/2014/10/button-88x33.gif'
        },
        {
            uri: 'https://okaeri-scans.blogspot.com.br/',
            name: 'Okaeri Scans',
            image: 'https://i1320.photobucket.com/albums/u528/jpmrs1/Okaeri-scans-banner_zpse81c5ee9.gif?t=1399380409'
        },
        {
            uri: 'https://skyscansbr.blogspot.com.br/',
            name: 'Sky Scans BR',
            image: 'https://i.imgur.com/9BImiBE.png'
        },
        {
            uri: 'https://kaimangas.blogspot.com.br/',
            name: 'Kai Mangás',
            image: 'https://i1251.photobucket.com/albums/hh544/kaitosama1/anigif.gif'
        },
        {
            uri: 'https://www.fansubbr.blogspot.com.br/',
            name: 'Fan-Sub BR',
            image: 'https://2.bp.blogspot.com/-KjztF00VwGs/UdB6E7xmjNI/AAAAAAAAASU/GPrL1YQGIk8/s88/FANSUBBR_128.gif'
        },
        {
            uri: 'https://otakubr-mangas.blogspot.com.br/',
            name: 'OtakuBr Mangás',
            image: 'https://i.imgur.com/YqTy4.gif'
        },
        {
            uri: 'https://portalskipbeat.blogspot.com.br/',
            name: 'Portal Skipbeat',
            image: 'https://lh3.googleusercontent.com/-ZlshI_s4e-Q/UfCeovNdyUI/AAAAAAAACOI/KslXzfxt6Tc/w88-h31-no/button.gif'
        },
        {
            uri: 'https://ani-scans.blogspot.com.br/',
            name: 'Ani-Scans!',
            image: 'https://i.imgur.com/vRYP8c0.png'
        },
        {
            uri: 'https://cronpirata.com/',
            name: 'Cron Pirata',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/j6mofb.jpg'
        },
        {
            uri: 'https://www.animesyukinotenshi.blogspot.jp/',
            name: 'Animes Yuki no Tenshi',
            image: 'https://3.bp.blogspot.com/-17a0OTXH_yk/T4rO-yjrlII/AAAAAAAAGOw/6f5WM97GOAI/s1600/%5BAYbanner02%5D.jpg'
        },
        {
            uri: 'https://animekaizen.blogspot.com.br/',
            name: 'Anime Kaizen',
            image: 'https://1.bp.blogspot.com/-CWpsGOeBd84/VZWAO_yxj0I/AAAAAAAABQg/7NyHh9Alxic/s1600/kaizen.jpg'
        },
        {
            uri: 'https://www.afbr.org/v2/',
            name: 'Anime Fansub Brasil',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/botaoafbr.jpg'
        },
        {
            uri: 'https://www.ligiazanella.com/',
            name: 'Ligia Zanella',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/link01.gif'
        },
        {
            uri: 'https://www.kitsunemangas.com/',
            name: 'Kitsune Mangás',
            image: 'https://lh4.googleusercontent.com/-0IKQBzDqzrk/TYzZg5fMxZI/AAAAAAAAAZ0/fUyhxUOtaHc/s1600/KITSUNE+ban.gif'
        },
        {
            uri: 'https://www.sagadeanimes.blogspot.com.br/',
            name: 'Saga de Animes',
            image: 'https://3.bp.blogspot.com/-dIZe6u-mn4U/T5hPBGsdwsI/AAAAAAAACY4/70KFncZtd4A/s1600/saga+de+animes+%281%29.jpg'
        },
        {
            uri: 'https://kitsune-san.blogspot.com/',
            name: 'Kitsune-san',
            image: 'https://lh6.ggpht.com/_2jlc3l3RjdI/TPMMFeyZShI/AAAAAAAAAdI/sp7nhWMcNE4/s400/003.png'
        },
        {
            uri: 'https://yuri-zone.forumeiros.com/',
            name: 'Yuri Zone',
            image: 'https://i45.servimg.com/u/f45/16/95/53/26/yurizo10.gif'
        },
        {
            uri: 'https://www.otaku-no-seikatsu.blogspot.com/',
            name: 'Otaku no Seikatsu',
            image: 'https://i372.photobucket.com/albums/oo161/gutostrife_2008/ac2273a6.png'
        },
        {
            uri: 'https://aokiscan.blogspot.com.br/',
            name: 'Aoki Scans',
            image: 'https://static.tumblr.com/fyagrdj/mGJn2ge9z/aoki_button.png'
        },
        {
            uri: 'http://euinsisto.com.br/mangasspace',
            name: 'Eu Insisto',
            image: 'https://i.imgur.com/F1qm6sp.gif'
        },
        {
            uri: 'https://www.sscans.com/',
            name: 'Super Scan',
            image: 'https://i.imgur.com/GNGf21t.png'
        },
        {
            uri: 'https://otakunyascan.blogspot.com.br/',
            name: 'OtakuNyaScan',
            image: 'https://www.ow-scan.com/wp-content/uploads/2016/10/29nb43b.png'
        },
        {
            uri: 'https://budokaimangas.blogspot.com.br/',
            name: 'Bodukai Mangás',
            image: 'https://4.bp.blogspot.com/-yF1mDf1Fyrg/V7OSv_iyMOI/AAAAAAAAABo/fQjkAIfMS_QJ0iDWTTcXRFv253QJ9G8TwCLcB/s1600/parceria.png'
        },
        {
            uri: 'https://radiojhero.com/',
            name: 'Rádio J-Hero',
            image: 'http://radiojhero.com/img/button-radiojhero-88x31.gif'
        },
        {
            uri: 'https://uragiri-scan.blogspot.com/',
            name: 'Uragiri Scan',
            image: 'https://www.ow-scan.com/wp-content/uploads/2018/07/unnamed.jpg'
        },
        {
            uri: 'https://fansubkoisuru.wordpress.com/',
            name: 'Koisuru Fansub',
            image: 'https://1.bp.blogspot.com/-H56l7Xq5Hic/VUCX3cSTU1I/AAAAAAAAIuI/3-YYDPwhbF8/s1600/koisuru-fansub-banner_1_88x.png'
          },
          {
            uri: 'https://www.atlantidafansub.blogspot.com/',
            name: 'Atlantida Fansub',
            image: 'https://4.bp.blogspot.com/-cPUxYByIn4I/Ut3AHWP680I/AAAAAAAAETY/bzwocXMdvFY/s1600/banner+atlantida+finalmente+!.png'
          },
          {
            uri: 'https://yukiazu.blogspot.com/',
            name: 'yukiazu Fansub',
            image: 'https://2.bp.blogspot.com/-M3O-x3ggsCA/VZvlnljnZEI/AAAAAAAAejY/YZglvM0Oxe4/s1600/banner02.png'
          },
          {
            uri: 'https://animakyodai.blogspot.com.br/',
            name: 'Anima Kyodai',
            image: 'https://i.imgur.com/h8WJhfx.gif'
          },
          {
            uri: 'https://kawaiievolution.wordpress.com/',
            name: '',
            image: 'https://kawaiievolution.files.wordpress.com/2015/06/k-e-scan.png?w=663'
          },
          {
            uri: 'https://himuratale.blogspot.com.br/',
            name: '',
            image: 'https://1.bp.blogspot.com/-_SatFvmfN_g/WO_a_XZtEXI/AAAAAAAAEFg/g_nEoxIhnd4LHh7NT1xxNR2iBrOAUMWtACLcB/s1600/button88.gif'
          }
    ]
};

const getPosts = async (page = 0) => {
    const p = [];

    const delta = 10;
    const index = page * delta;

    return p.slice(index, index + delta);
};

const getPagSeguroLink = async () => {
    return 'https://ow-scan.com';
}

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
    getPagSeguroLink,
    getPartners,
    getRecruitmentOptions,
    getPosts,
    getPartnershipImages,
    getMostPopular
};