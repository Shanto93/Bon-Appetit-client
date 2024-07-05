import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);


    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {const dataItems = data.filter(item => item.category ==='popular');
            setMenu(dataItems);

        })
    },[])
    return (
        <section>
            <SectionTitle
            subheading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            >
            </SectionTitle>

            {
                menu.map(item => <MenuItem key={item.key} item={item}></MenuItem>)
            }
           
        </section>
    );
};

export default PopularMenu;