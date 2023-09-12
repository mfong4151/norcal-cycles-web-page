import bike from '../../assets/our-bikes.avif'
import parts from '../../assets/parts.jpg'
import rentals from '../../assets/rentals.avif'
import service from '../../assets/service.avif'

const galleryItems = 
    [
        {
            img: bike,
            desc: "Bikes",
            nav: '/bikes'
        },
        
        {
            img: rentals,
            desc: "Rentals",
            nav: '/'
        
        },
        
        {
            img: service,
            desc: "Service",
            nav: '/service'
        },
        {
            img: parts,
            desc: "Parts",
            aLink: 'https://www.ebay.com/str/'
        },
        
    ];
export default galleryItems;