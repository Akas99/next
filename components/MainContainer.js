import s from "../styles/main.module.css";
import LinkComp from "./LinkComp";

const MainContainer = ({children}) => {
    return (
        <>
            <div className={s.navbar}>
                <div>
                    <LinkComp href={'/'} text={'main'}/>
                    <LinkComp href={'/users'} text={'users'}/>
                    <LinkComp href={'/posts'} text={'posts'}/>
                </div>
            </div>
            {children}
        </>
    );
};

export default MainContainer;