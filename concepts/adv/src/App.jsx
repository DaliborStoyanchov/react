// import UseFetchHookTest from "../components/use-fetch/UseFetchHookTest";
// import UseOutsideClickTest from "../components/use-outside-click/UseOutsideClickTest";
// import UseWindowResizeTest from "../components/use-window-resize/UseWindowResizeTest";
// import ScrollToBottomAndTop from "../components/scroll-bottom-top/ScrollToBottomAndTop";
// import ScrollToSection from "../components/scroll-bottom-top/ScrollToSection";
// import Weather from "../components/weather-app/components/weather/Weather";

import { Routes, Route } from "react-router-dom";
// import Home from "../components/e-commerce/pages/home";
// import Cart from "../components/e-commerce/pages/cart";
// import Header from "../components/e-commerce/components/header";
// import Navbar from "../components/food-recepies/components/Navbar/Navbar";
// import Favorites from "../components/food-recepies/pages/favorites/Favorites";
// import Home from "../components/food-recepies/pages/home/Home";
// import Details from "../components/food-recepies/pages/details/Details";

import { Container } from "@chakra-ui/react";
import Main from "../components/expences-tracker/components/main/main";

export default function App() {
  return (
    <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
      </Flex>
    </Container>

    // <div className="mx-16 lg:mx-22">
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/cart" element={<Cart />} />
    //   </Routes>
    // </div>

    // <div>
    // {/* <UseFetchHookTest /> */}
    // {/* <UseOutsideClickTest /> */}
    // {/* <UseWindowResizeTest /> */}
    // {/* <ScrollToBottomAndTop /> */}
    // {/* <ScrollToSection /> */}
    // {/* <Weather /> */}
    // {/* <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/favorites" element={<Favorites />} />
    //     <Route path="/recipe-item/:id" element={<Details />} />
    //   </Routes>
    // </div> */}
  );
}
