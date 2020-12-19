import Link from "next/link";
import styled from "@emotion/styled";
import wrapper from "../store/configureStore";

const Container = styled.div`
    font-size: 24px;
    cursor: pointer;
`;

export default function Home() {
    return (
        <Container>
            <Link href="/user">
                <div>유저보기</div>
            </Link>
        </Container>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
    console.log(ctx);
    return {
        props: {},
    };
});
