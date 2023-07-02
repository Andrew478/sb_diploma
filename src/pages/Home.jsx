import Layout from "../components/Layout";
import Banner01 from "../components/Banners/Banner01"
import Ads from "../components/Ads";
import LinkPicture from "../components/LinkPicture";
import Slider from "../components/Slider";

import bannersData from "../assets/data/banners.json";
import adsData from "../assets/data/ads.json";
import BrandLine from "../components/BrandLine";


export function Home () {
    return <>
        {/* <Layout> <h1>Главная страница</h1> </Layout> */}
       {/*  <Layout mb={1} dt={2} gap="small">
            <Card />
            <Card />
            <Card />
            <Card />
        </Layout>
        <Layout mb={4} dt={4} gap="none"/>
        <Layout mb={2} dt={3}/> */}
        <div className="mainWrapper">
            <Layout>
                <Slider img1="ads01" img2="ads02" img3="ads03" img4="ads04" />
            </Layout>
            
            <Layout dt={3}>
                <LinkPicture img="people01" text="Девушкам"/>
                <LinkPicture img="people02" text="Мужчинам"/>
                <LinkPicture img="people03" text="Детям"/>
            </Layout>
            <Layout><BrandLine /></Layout>
            
            <Layout>
                <Banner01 {...bannersData[1]}/>
                <Banner01 {...bannersData[0]} pattern={false}/>
                <Banner01 {...bannersData[2]} pattern={false} bgPos="0 55%"/>
            </Layout>
            <Layout>
                <Ads {...adsData[0]}/> {/* Пропсом указываем наполнение компонента из заготовленного json */}
            </Layout>
            <Layout dt={2}>
                <Ads {...adsData[1]}/>
                <Ads {...adsData[2]}/>
            </Layout>
        </div>
        
    </>
}