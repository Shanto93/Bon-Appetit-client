
import coverPhoto from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bon Appetit | Order</title>
      </Helmet>
      <Cover
        img={coverPhoto}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

      <div className="mt-16">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="flex flex-col items-center"
        >
          <TabList className="flex flex-wrap justify-center mb-8">
            <Tab className="px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg text-[#fcfcfc] border-[#787663] mx-2 my-2 md:my-0 border-b-2  hover:text-[#c38920] focus:text-[#c38920] focus:bg-transparent">
              SALADS
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg text-[#fcfcfc] border-[#787663] mx-2 my-2 md:my-0 border-b-2  hover:text-[#c38920] focus:text-[#c38920] focus:bg-transparent">
              PIZZA
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg text-[#fcfcfc] border-[#787663] mx-2 my-2 md:my-0 border-b-2 hover:text-[#c38920] focus:text-[#c38920] focus:bg-transparent">
              SOUPS
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg text-[#fcfcfc] border-[#787663] mx-2 my-2 md:my-0 border-b-2 hover:text-[#c38920] focus:text-[#c38920] focus:bg-transparent">
              DESSERTS
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg text-[#fcfcfc] border-[#787663] mx-2 my-2 md:my-0 border-b-2 hover:text-[#c38920] focus:text-[#c38920] focus:bg-transparent">
              DRINKS
            </Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
