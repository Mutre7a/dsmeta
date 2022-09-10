import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    itemId: number;
}

function handleClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso");
});
}
function NotificationButton( {itemId}
    : Props) {
    return( 
        <div className="dsmeta-botton-red" onClick={() => handleClick(itemId)}>
                      <img src={icon} alt="Notificar"/>
                     </div> 
                )
                }
  export default NotificationButton;
