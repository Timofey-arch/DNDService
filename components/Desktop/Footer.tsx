import Image from "next/image";
import VK from '../../public/images/VK.png';
import tel from '../../public/images/tel.png';
import Logo2 from "../../public/images/Logo2.png";

export default function Footer(props: any){
    return(
        <>
            <footer className="footer">
                <div className={"info indent-left"}>
                    <h4>© 2023-2023 web-application “D&DTavern”</h4>
                </div>
                <div className={"info indent-left"}>
                    <h4>Появились идеи? Свяжитесь с нами!</h4>
                    <h4 className={"p"}>Наши социальные сети</h4>
                </div>
                <div className={"social-picture-container indent-left"}>
                    <div><a href="https://vk.com"><Image className="picture" alt="VK" src={VK}></Image></a></div>
                    <div>ㅤ</div>
                    <div><a href="https://web.telegram.org"><Image className="picture" alt="tel" src={tel}></Image></a></div>
                </div>
            </footer>
        </>
    );
}