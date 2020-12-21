import wrapper from "../store/configureStore";

import HomeContainer from "components/HomeContainer";

export default function Home() {
    return <HomeContainer></HomeContainer>;
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
    console.log(ctx.store);
});
