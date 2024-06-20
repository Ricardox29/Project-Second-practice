import styles from './Navigation.module.css';

const Navigation = () => {

    return (
        <nav className="container">
            <div className="image-nav">
                <img src="./images/panda.png" alt="Imagen logo de la pagina" />
            </div>

            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Ubication</a></li>
                <li><a href="">Contact us</a></li>
            </ul>

        </nav>
    );

};

export default Navigation;