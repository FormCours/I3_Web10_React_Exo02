import PropTypes from 'prop-types';
import style from './title-page.module.css';

// Utilisation des accolades dans le parametre
// -> Permet de recup uniquement se qui nous interesse dans les "props"
const TitlePage = ({title}) => {
    
    return (
        <h1 className={style.title}>{title}</h1>
    );
};

TitlePage.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitlePage;