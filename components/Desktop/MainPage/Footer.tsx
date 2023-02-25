import Image from "next/image";
import VKPicture from '../../../public/images/VK.png';
import TelegramPicture from '../../../public/images/tel.png';
import Link from "next/link";

export default function Footer(props: any){
    return(
        <footer className="footer">
            <div className="info_column">
                <h4>Контакты</h4>
                <h5>Наши соцальные сети</h5>

                <div className="social_network_container">
                    <Link href="https://vk.com">
                        <Image alt="VK" src={VKPicture} className="social_network_picture"></Image>
                    </Link>

                    <Link href="https://web.telegram.org">
                        <Image alt="Telegram" src={TelegramPicture} className="social_network_picture"></Image>
                    </Link>
                </div>
            </div>

            <div className="info_column">
                <h4>Что-нибудь еще</h4>
                <h5>Текст-рыба</h5>
            </div>

            <div className="info_column">
                <h4>Что-нибудь еще</h4>
                <h5>Текст-рыба</h5>
            </div>

            <div className="info_column">
                <h4>Что-нибудь еще</h4>
                <h5>Текст-рыба</h5>
            </div>
        </footer>
    );
}