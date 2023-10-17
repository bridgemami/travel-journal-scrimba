import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import s from './travel.module.css'

export default function Travel(props) {
  console.log(props)
  return (
    <section key={props.id} className={s.travelContainer}>
      <img src={`/images/${props.image}`} alt={props.alt} className={s.image} />
      <div className={s.textContainer}>
        <div className={s.locationContainer}>
          <div className={s.pinContainer}>
        <FontAwesomeIcon icon={faLocationDot} className={s.icon} />
        <p className={s.location}>{props.location}</p>
        </div>
        <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className={s.maps}>View on Google Maps</a>
        </div>
        <article className={s.articleContainer}>
        <h2 className={s.title}>{props.title}</h2>
        <div className={s.info}>
        <p className={s.date}>{props.date}</p>
        <p className={s.description}>{props.description}</p>
        </div>
        </article>
      </div>
    </section>
  );
}
